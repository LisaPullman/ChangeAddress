#!/usr/bin/env node
/* eslint-disable */
/**
 * scripts/build-sitemap.js
 *
 * Regenerates sitemap.xml from the on-disk HTML structure.
 * - Walks every *.html under the project root (excluding .git, scripts).
 * - Groups URLs by logical page (home / about / contact / privacy / terms /
 *   articles/<slug>) so hreflang alternates point at each other.
 * - Pulls <title> from each file for the optional display: none, but more
 *   importantly reads mtime for lastmod.
 *
 * Usage:
 *   node scripts/build-sitemap.js                 # default: write ./sitemap.xml
 *   node scripts/build-sitemap.js --dry-run       # print to stdout
 *   BASE=https://c.qifei2035.eu.cc node scripts/build-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BASE = (process.env.BASE || 'https://c.qifei2035.eu.cc').replace(/\/$/, '');
const LANGUAGES = ['', 'en', 'ja', 'ko']; // '' = default (zh)
const STATIC_PAGES = ['index', 'about', 'contact', 'privacy', 'terms'];
const SKIP_DIRS = new Set(['.git', 'scripts', 'node_modules', 'assets']);

/* ── walk ──────────────────────────────────────────────────────────────── */

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, acc);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      acc.push(full);
    }
  }
  return acc;
}

/* ── build logical URL groups ─────────────────────────────────────────── */

/**
 * Each "page group" represents one logical page across all languages.
 * shape: { id, urls: [{ lang, url, lastmod, priority }] }
 */
function buildGroups(files) {
  const groups = new Map();

  const keyFor = (relPath) => {
    // relPath like "index.html" | "en/about.html" | "articles/foo.html" |
    // "articles/en/foo.html"
    const noExt = relPath.replace(/\.html$/, '');
    const parts = noExt.split('/');
    if (parts[0] === 'articles') {
      // All language variants of one article share a key so hreflang
      // alternates form a complete set. lang is recorded on the entry.
      const lang = LANGUAGES.includes(parts[1]) ? parts[1] : '';
      const slug = parts[parts.length - 1];
      return `article:${slug}`;
    }
    // non-article: each (lang, page) is its own group
    return `static:${parts.join('/')}`;
  };

  const langOf = (relPath) => {
    const parts = relPath.split('/');
    if (LANGUAGES.includes(parts[0])) return parts[0] || 'zh';
    return 'zh';
  };

  const priorityFor = (relPath) => {
    const base = relPath.replace(/^en\//, '').replace(/^ja\//, '').replace(/^ko\//, '');
    if (base === 'index.html') return '1.0';
    if (base === 'about.html' || base === 'contact.html') return '0.6';
    if (base === 'privacy.html' || base === 'terms.html') return '0.4';
    return '0.8'; // articles
  };

  const urlFor = (relPath) => {
    // trailing slash for directory-style URLs; keep .html for file URLs
    // We chose directory style for the homepage, file style for the rest.
    if (relPath === 'index.html') return `${BASE}/`;
    if (relPath === 'en/index.html') return `${BASE}/en/`;
    if (relPath === 'ja/index.html') return `${BASE}/ja/`;
    if (relPath === 'ko/index.html') return `${BASE}/ko/`;
    return `${BASE}/${relPath}`;
  };

  const lastmodFor = (file) => {
    const stat = fs.statSync(file);
    return stat.mtime.toISOString().slice(0, 10);
  };

  for (const file of files) {
    const rel = path.relative(ROOT, file).split(path.sep).join('/');
    const key = keyFor(rel);
    if (!groups.has(key)) groups.set(key, { id: key, urls: [] });
    groups.get(key).urls.push({
      lang: langOf(rel),
      url: urlFor(rel),
      lastmod: lastmodFor(file),
      priority: priorityFor(rel),
      changefreq: rel.endsWith('/index.html') || rel === 'index.html' ? 'weekly' : 'monthly',
    });
  }

  // Make sure the 4 home variants share one group so hreflang alternates
  // form a complete set. Their keys currently differ ("static:index.html" vs
  // "static:en/index.html"); merge anything ending in /index into one bucket.
  const homeGroup = { id: 'home', urls: [] };
  for (const [key, group] of groups) {
    const isHome = group.urls.every((u) => u.url.endsWith('/') || u.url.match(/\/(en|ja|ko)\/$/));
    if (isHome && group.urls.length === 1 && group.urls[0].priority === '1.0') {
      homeGroup.urls.push(...group.urls);
      groups.delete(key);
    }
  }
  if (homeGroup.urls.length) groups.set('home', homeGroup);

  return Array.from(groups.values()).sort((a, b) => a.id.localeCompare(b.id));
}

/* ── render ───────────────────────────────────────────────────────────── */

function render(groups) {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ];

  for (const group of groups) {
    // Stable order for hreflang alternates: zh, en, ja, ko
    const order = ['zh', 'en', 'ja', 'ko'];
    group.urls.sort((a, b) => order.indexOf(a.lang) - order.indexOf(b.lang));

    for (const u of group.urls) {
      lines.push('  <url>');
      lines.push(`    <loc>${u.url}</loc>`);
      lines.push(`    <lastmod>${u.lastmod}</lastmod>`);
      lines.push(`    <changefreq>${u.changefreq}</changefreq>`);
      lines.push(`    <priority>${u.priority}</priority>`);
      for (const alt of group.urls) {
        lines.push(`    <xhtml:link rel="alternate" hreflang="${alt.lang === 'zh' ? 'zh' : alt.lang}" href="${alt.url}"/>`);
      }
      lines.push('  </url>');
    }
  }

  lines.push('</urlset>\n');
  return lines.join('\n');
}

/* ── main ─────────────────────────────────────────────────────────────── */

function main() {
  const dry = process.argv.includes('--dry-run');
  const files = walk(ROOT);
  const groups = buildGroups(files);
  const xml = render(groups);

  if (dry) {
    process.stdout.write(xml);
    return;
  }

  const out = path.join(ROOT, 'sitemap.xml');
  fs.writeFileSync(out, xml);
  const urls = groups.reduce((n, g) => n + g.urls.length, 0);
  console.log(`sitemap.xml: ${urls} URLs across ${groups.length} groups → ${path.relative(ROOT, out)}`);
}

main();
