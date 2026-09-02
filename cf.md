# Cloudflare Pages 部署详细文档

本文档详细说明如何把本项目（c.qifei2035.eu.cc 虚拟地址生成器）部署到 Cloudflare Pages。
涵盖平台选型（CF vs Vercel）、三种部署方式、DNS 配置、缓存策略、监控与回滚、故障排查、CLI 脚本。

## 项目快照

| 项 | 值 |
| --- | --- |
| 部署目标 | `https://c.qifei2035.eu.cc/` |
| 项目类型 | 静态站点（HTML + CSS + JS + SVG） |
| 构建工具 | 无（无 Node 构建步骤） |
| 框架预设 | **None** |
| 构建命令 | （留空） |
| 构建输出目录 | `/` 或 `.` |
| 总文件数 | 78（61 HTML + 3 CSS + 3 JS + 5 SVG + sitemap/robots/_headers/_redirects） |
| 总大小 | ≈ 1.4 MB |
| 语言版本 | zh（根目录）/ en / ja / ko 四套 |

---

## 〇、部署平台选型：Cloudflare Pages vs Vercel

**结论：本项目用 Cloudflare Pages，且不是"勉强赢"，是每个维度都赢。**

| 维度 | Cloudflare Pages | Vercel | 对本项目的影响 |
| --- | --- | --- | --- |
| 域名 DNS | `qifei2035.eu.cc` 的 NS 已在 CF，加子域 = 点一下按钮，证书自动签 | 需在 CF DNS 手工加 CNAME 到 `cname.vercel-dns.com`，且**必须关掉橙色云朵（Proxy）**，否则 CF 代理与 Vercel 的证书/回源互相打架 | CF 零配置；Vercel 反而要动现有 DNS |
| 配置文件 | 根目录 `_headers`、`_redirects` **原生支持**（本项目已带） | 不认识这两个文件，要翻译成 `vercel.json` 的 `headers`/`rewrites`（见附录 C） | CF 直接用；Vercel 要额外维护一套等价配置 |
| 免费额度 | 带宽**不限**、请求数不限、站点数不限 | Hobby 计划 100 GB/月带宽，超出直接停站 | 静态小站两者都够，但 CF 没有"流量爆了站没了"的风险 |
| 商业用途 | 免费版可用于商业站点 | **Hobby 计划条款禁止商业用途**；本站挂 AdSense 属商业，合规要用 Pro（$20/月起） | 用 Vercel = 要么违规要么付费 |
| 中国大陆可达性 | CF 边缘节点大陆基本可达（速度一般但能开） | `*.vercel.app` 被墙；自定义域也经常被重置/极慢 | 本站 zh 是第一语言、中文搜索流量为主，这点接近一票否决 |
| 纯静态场景适配 | 静态资产全球 CDN，恰好是它的本职 | 的强项是 Next.js SSR/ISR、Serverless、图像优化——本项目**一个都用不上** | Vercel 的优势维度全部落空 |
| 分析 | 免费 Web Analytics，无 cookie（GDPR 友好），项目已接 `cf-analytics.js` | 要接第三方或用付费产品 | CF 顺路 |
| 回滚 | 控制台 / CLI 任意历史版本，秒级 | 同样支持 | 平手 |

**什么时候才选 Vercel**：站点要重构成 Next.js/Remix、需要 ISR 或服务端函数、团队要细粒度 Preview 协作、且目标用户全在海外。本项目短期没有这些计划——**选 Cloudflare Pages**。

> 已在用 Vercel 或想双跑验证？看附录 C 的 `vercel.json` 迁移速查。

---

## 一、前置条件

### 1.1 Cloudflare 账号
免费版即可。访问 https://dash.cloudflare.com/sign-up 注册。

### 1.2 域名
- 主域名：`qifei2035.eu.cc`
- 子域名：`c.qifei2035.eu.cc`
- 主域名必须已经接入 Cloudflare（即 NS 记录指向 Cloudflare 的两个地址）
  - 如果没有：CF 控制台 → **Add Site** → 输入 `qifei2035.eu.cc` → 按提示改 NS
  - 改 NS 后 DNS 解析全球生效可能需要 24–48 小时

### 1.3 CLI 工具（可选）
```bash
# macOS / Linux
curl -fsSL https://pkg.wrangler.workers.dev | bash

# 或 npm
npm install -g wrangler

# 或 Homebrew
brew install cloudflare/wrangler/wrangler

# 登录（一次性）
wrangler login
```

---

## 二、部署方式（任选其一）

### 方式 A：Git 连接（推荐 ⭐）

每次 push 自动部署，PR 自动出 preview 链接，可任意回滚。

#### 步骤
1. 把项目推到 GitHub / GitLab（如果还没在 git 仓库里）：

```bash
cd address-main
git init -b main
git add .
git commit -m "initial"
git remote add origin git@github.com:YOUR_USERNAME/c-address-generator.git
git push -u origin main
```

2. Cloudflare 控制台 → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. 选择 `c-address-generator` 仓库 → **Begin setup**
4. 填项目名（全局唯一，会成为 `<name>.pages.dev`）：

| 字段 | 值 |
| --- | --- |
| Project name | `c-address-generator` |
| Production branch | `main` |
| Framework preset | **None** |
| Build command | （留空） |
| Build output directory | `/` |

5. **Save and Deploy**。首次部署约 30 秒，结束后给一个 `*.pages.dev` 预览地址。
6. **Custom domains** → **Set up a custom domain** → 填 `c.qifei2035.eu.cc` → 继续
7. CF 自动在 `qifei2035.eu.cc` zone 加 CNAME + 签发证书，HTTPS 立刻生效。

#### 后续工作流
```bash
# 改完代码
git add .
git commit -m "..."
git push origin main
# → 自动触发 production 部署，1 分钟内上线

# 提 PR（GitHub）
# → 自动触发 preview 部署，每个 PR 一个独立 URL
# 例：https://abc123.c-address-generator.pages.dev
```

---

### 方式 B：Wrangler CLI（脚本化部署）

适合 CI/CD 或本地手动部署。

#### 首次部署
```bash
cd address-main
wrangler pages deploy . \
  --project-name=c-address-generator \
  --branch=main
```

输出示例：
```
🌎  Uploading... (X files)
✨  Success! Uploaded Y files (Y KiB / Y KiB)
🌎  Deploying...
✨  Deployment complete!
   Deployment URL: https://abc123.c-address-generator.pages.dev
   Branch: main
```

#### 后续部署
同样的命令就行，wrangler 会自动识别增量。

#### 脚本化（CI 中用）
```bash
#!/usr/bin/env bash
set -euo pipefail

# 在 CI 环境变量里配置
# CLOUDFLARE_API_TOKEN (推荐 scope: Pages Edit)
# CLOUDFLARE_ACCOUNT_ID

cd "$(dirname "$0")/.."
wrangler pages deploy . --project-name=c-address-generator --branch=main --commit-dirty=true
```

#### API Token 配置
CF 控制台 → **My Profile** → **API Tokens** → **Create Token**
→ **Edit Cloudflare Pages** 模板 → 选 account + 项目 → 创建
→ 复制 token（只显示一次），存到 CI secret。

---

### 方式 C：直接上传（最快，无 git 也能跑）

```bash
cd address-main
# 打包（排除 .git）
zip -r ../c-address-generator.zip . -x '.git/*' -x '*.DS_Store' -x 'scripts/*'
```

CF 控制台 → **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
→ 给项目起名 `c-address-generator` → **Select files** 或拖拽 `c-address-generator.zip`
→ **Deploy site**

⚠️ 这种方式：
- 每次都要手动上传
- 不能回滚到任意历史版本（只有最近 50 个）
- 适合临时验证，不建议生产用

---

## 三、DNS 配置

`c.qifei2035.eu.cc` 是 `qifei2035.eu.cc` 的子域。

### 3.1 推荐：让 CF 自动配
**Pages 项目 → Custom domains → Set up a custom domain → c.qifei2035.eu.cc**

CF 自动加：
```
类型    名称    内容                                  代理状态
CNAME   c       c-address-generator.pages.dev         Proxied (橙色云朵)
```

证书自动签发（Let's Encrypt / CF 内部 CA），通常 30 秒内生效。

### 3.2 手动配
如果不走 Custom domains 流程，也可以手工加 CNAME：

CF 控制台 → **DNS** → **Records** → **Add record**

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | `c` | `c-address-generator.pages.dev` | ✅ Proxied |

CNAME 必须 Proxied（橙色云朵），否则证书不签发。

### 3.3 验证 DNS
```bash
# 解析是否生效
dig c.qifei2035.eu.cc +short
# 应返回 Cloudflare 的 IP（橙色代理）

# 或用 nslookup
nslookup c.qifei2035.eu.cc 1.1.1.1
```

### 3.4 eu.cc 域名的特殊坑
`eu.cc` 是 Freenom 系二级域名。**大部分情况下**支持子域 CNAME，但如果出现：

| 现象 | 原因 | 解决 |
| --- | --- | --- |
| `Error 1014: CNAME cross-user banned` | CF 后端路由冲突 | 改用 A 记录指向 CF IP |
| `Error 1016: Origin DNS error` | 注册商不支持 `c.` 子域 | 联系注册商 / 换域名 |
| 添加 custom domain 卡在 "Initializing" | 证书签发延迟 | 等 5 分钟，刷新页面 |

如果走不通，备用方案是改用 A 记录：
```
A  c  192.0.2.1  Proxied   # CF 给的任一 Anycast IP
```

---

## 四、缓存策略：`_headers`

项目根目录已有 `_headers` 文件。CF Pages 自动识别并应用。

```headers
# HTML: never cache so edits are seen immediately on the next deploy
/*.html
  Cache-Control: public, max-age=0, must-revalidate
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

# CSS / JS / brand assets: filenames are NOT content-hashed, so browsers
# must revalidate to pick up deploys. CF's edge still caches (cheap 304).
/*.css
  Cache-Control: public, max-age=0, must-revalidate
/*.js
  Cache-Control: public, max-age=0, must-revalidate
/assets/*
  Cache-Control: public, max-age=0, must-revalidate

# Security headers for everything
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
```

策略：
- **HTML 永不久存**：改完发版用户立刻看到新内容（避免缓存导致看不见修改）。
- **CSS/JS 同样走 revalidate**：因为本站文件名**不带内容 hash**（就是 `style.css`、`article.css`、`script.js`），如果设 `max-age=31536000, immutable`，用户会在一年内一直拿到旧样式。`must-revalidate` 让浏览器每次发条件请求，命中就是 304，流量几乎为零。
- **升级路线**：哪天把资源引用改成 `style.css?v=3` 或 hash 文件名，就把上面三条改成 `Cache-Control: public, max-age=31536000, immutable`，浏览器缓存全开。
- **安全头**：`/*` 兜底作用于所有资产（含 SVG/XML）。

### 验证
```bash
curl -I https://c.qifei2035.eu.cc/
# Cache-Control: public, max-age=0, must-revalidate  ✓

curl -I https://c.qifei2035.eu.cc/style.css
# Cache-Control: public, max-age=0, must-revalidate  ✓

curl -I https://c.qifei2035.eu.cc/article.css | grep -i x-content-type
# X-Content-Type-Options: nosniff  ✓
```

---

## 五、URL 重写：`_redirects`

项目根目录已有 `_redirects` 文件。

```
# Force HTTPS
/http://c.qifei2035.eu.cc/*  https://c.qifei2035.eu.cc/:splat  301

# Short alias for homepage
/c  /index.html  301

# Fallback for typos
/*  /index.html  404
```

### 验证
```bash
curl -I http://c.qifei2035.eu.cc/
# → 301 https://c.qifei2035.eu.cc/

curl -I https://c.qifei2035.eu.cc/c
# → 301 https://c.qifei2035.eu.cc/index.html

curl -I https://c.qifei2035.eu.cc/nonexistent
# → 404 https://c.qifei2035.eu.cc/index.html
```

---

## 六、sitemap & robots.txt

### 6.1 自动生成 sitemap
项目用 `scripts/build-sitemap.js` 扫描所有 HTML 文件生成 `sitemap.xml`。

```bash
# 本地生成
node scripts/build-sitemap.js

# 干跑（输出到 stdout）
node scripts/build-sitemap.js --dry-run

# 改 BASE 环境变量
BASE=https://staging.c.qifei2035.eu.cc node scripts/build-sitemap.js
```

**重要**：每次新增/删除/重命名 HTML 文件都要重新跑一次。

### 6.2 robots.txt
当前内容：
```
User-agent: *
Allow: /
Sitemap: https://c.qifei2035.eu.cc/sitemap.xml
```

CF Pages 原样提供 `/robots.txt`。

### 6.3 提交到 Google / Bing
- Google Search Console：https://search.google.com/search-console → 添加 `c.qifei2035.eu.cc` → Sitemaps → 提交 `https://c.qifei2035.eu.cc/sitemap.xml`
- Bing Webmaster Tools：同上
- 百度搜索资源平台：https://ziyuan.baidu.com → 添加站点 → 提交 sitemap

---

## 七、部署后验证清单

跑完部署，按顺序执行：

```bash
# 1. 主页 200
curl -I https://c.qifei2035.eu.cc/
# → HTTP/2 200

# 2. SSL 证书 OK
echo | openssl s_client -servername c.qifei2035.eu.cc -connect c.qifei2035.eu.cc:443 2>/dev/null | openssl x509 -noout -subject
# → subject=CN = c.qifei2035.eu.cc

# 3. 缓存头正确
curl -I https://c.qifei2035.eu.cc/ | grep -i cache-control
# → max-age=0, must-revalidate
curl -I https://c.qifei2035.eu.cc/style.css | grep -i cache-control
# → max-age=0, must-revalidate
# （CSS/JS/SVG 当前走 must-revalidate：文件名不带 hash，避免用户拿到旧版；
#  改成 ?v=2 或内容 hash 文件名后再切到 max-age=31536000, immutable）

# 4. HTTPS 强制
curl -I http://c.qifei2035.eu.cc/ | head -1
# → HTTP/1.1 301 Moved Permanently  (location: https://...)

# 5. sitemap 可访问
curl -I https://c.qifei2035.eu.cc/sitemap.xml | head -1
# → 200

# 6. 4 语言路径都通
for p in "" en/ ja/ ko/; do
  curl -sI "https://c.qifei2035.eu.cc/${p}index.html" | head -1
done
# 全部 200

# 7. favicon
curl -I https://c.qifei2035.eu.cc/favicon.svg | head -1
# → 200

# 8. theme toggle 在 DOM 里
curl -s https://c.qifei2035.eu.cc/ | grep -c 'id="themeToggle"'
# → 1
```

---

## 八、监控

### 8.1 Pages Analytics
CF 控制台 → **Workers & Pages** → 项目 → **Analytics**
- Requests（请求数）
- Bandwidth（带宽）
- Cache hit ratio（缓存命中率，应 > 80%）
- Status codes（4xx / 5xx 比例）

### 8.2 Web Analytics（免费）
CF 控制台 → **Account Home** → **Web Analytics** → **Add** → 选 Pages 项目
→ 复制那段 `<script defer src="...">` → 粘到所有 HTML 的 `<head>`

CF 的 Web Analytics 不放 cookie，符合 GDPR。

### 8.3 日志
CF 控制台 → **Workers & Pages** → 项目 → **Logs**
可看实时请求、状态码、缓存命中、CIDR（客户端 IP 段）。

如果要导出到自己的 SIEM，开 **Logpush**（需 Enterprise 或加价）。

---

## 九、回滚

### Git 部署
```
CF 控制台 → Pages → 项目 → Deployments → 找历史 commit
→ "..." 菜单 → "Rollback to this deploy"
```

立即生效。

### Wrangler CLI
```bash
# 看历史
wrangler pages deployment list --project-name=c-address-generator

# 输出示例：
# ID                    BRANCH  COMMIT   CREATED
# abc123-def456-...     main    abc123   2026-09-01 12:00
# def456-abc123-...     main    def456   2026-08-31 18:30

# 回滚到指定 ID
wrangler pages deployment rollback abc123-def456-... --project-name=c-address-generator
```

### 直接上传
控制台 → **Deployments** → 找历史 → **Activate**

---

## 十、故障排查

### 10.1 域名打开白屏

| 排查步骤 | 命令 |
| --- | --- |
| DNS 解析 | `dig c.qifei2035.eu.cc +short` |
| HTTP 状态 | `curl -I https://c.qifei2035.eu.cc/` |
| 证书是否签发 | `echo | openssl s_client -connect c.qifei2035.eu.cc:443` |
| CF 节点连通 | `curl -vI https://c.qifei2035.eu.cc/ 2>&1 \| head -20` |

如果 NS 没切到 CF：dig 不会返回 CF 的 IP，而是返回注册商原 DNS。

### 10.2 自定义域名报 1014 / 1016

```
Error 1014: CNAME cross-user banned
```
说明 CNAME 指向了别的 CF 账号下的资源。检查 DNS 里的 CNAME 内容是不是 `c-address-generator.pages.dev`。

```
Error 1016: Origin DNS error
```
DNS 解析 CNAME 失败。检查 NS、CNAME 是否正确。

### 10.3 CSS/JS 404

说明路径不对。本项目所有资源都是相对路径或同目录，部署后不应该 404。
- 检查 `_redirects` 里的 fallback 没把 `/style.css` 误吞
- 检查构建输出目录配置（应是 `/` 或 `.`）

### 10.4 浏览器看到旧版

强制刷新（Cmd+Shift+R / Ctrl+F5），或开隐私窗口。
如果是 CF 边缘缓存，用 API 主动 purge：
```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/<ZONE_ID>/purge_cache" \
  -H "Authorization: Bearer <API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"hostname":"c.qifei2035.eu.cc","purge_everything":true}'
```

### 10.5 主题切换不工作

`<html>` 没有 `data-theme` 属性 → 用户开隐私模式（localStorage 禁用）→ 回退到 `prefers-color-scheme`。

调试：在浏览器 console 看：
```js
localStorage.getItem('foxai-theme')
// 应返回 'light' / 'dark' / null
```

### 10.6 sitemap 不更新

```bash
# 强制重新生成
node scripts/build-sitemap.js

# 然后 push 到 git / 重新部署
git add sitemap.xml && git commit -m "regenerate sitemap" && git push
```

---

## 十一、进阶

### 11.1 自动触发 sitemap 重新生成（GitHub Actions）

`.github/workflows/sitemap.yml`：

```yaml
name: Regenerate sitemap
on:
  push:
    paths:
      - '**.html'
      - 'articles/**/*.html'
      - 'en/**/*.html'
      - 'ja/**/*.html'
      - 'ko/**/*.html'

jobs:
  sitemap:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: node scripts/build-sitemap.js
      - run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add sitemap.xml
          git diff --cached --quiet || git commit -m "chore: regenerate sitemap"
          git push
```

### 11.2 接 CF Analytics

在所有 HTML 的 `<head>` 加：
```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
        data-cf-beacon='{"token": "YOUR_TOKEN_HERE"}'></script>
```

token 从 CF 控制台 **Web Analytics** → **Add** 拿到。

### 11.3 接触发器 / 定时任务

⚠️ **CF Pages 免费层不支持 Cron Triggers**——定时任务需要 Workers Paid 计划（$5/月起）。
sitemap 的"每次 HTML 变更时自动重生成"已经由上面的 GitHub Actions workflow（§11.1）覆盖。
只有当定时刷新第三方数据（直播源刷新、外部 feed 等）才需要 cron，按需升级 Workers。

### 11.4 域名不写死：`scripts/set-domain.py`

**为什么不能在 HTML 里直接用变量**：canonical、hreflang、`og:url`、JSON-LD 的 url
按 Google/OG 规范必须是**绝对 URL** 且存在于原始 HTML 里——爬虫不执行 JS，
运行时注入等于没有；CF Pages 免费静态层也不做内容改写（用 Pages Function 改写
会让所有请求变成动态渲染，得不偿失）。

**采用的方案**：域名仍写死在文件里，但 `scripts/domain.txt` 是唯一事实来源，
`set-domain.py` 一键全站换绑：

```bash
# 查看当前域名与引用分布
python3 scripts/set-domain.py
# → current domain: c.qifei2035.eu.cc
# → occurrences: 634 across 64 files

# 换域名（自动改 HTML/_redirects/robots.txt/build-sitemap.js 并重生成 sitemap）
python3 scripts/set-domain.py new.example.com
```

脚本覆盖：61 个 HTML（canonical/hreflang/og/twitter/JSON-LD）、`_redirects`、
`robots.txt`、`scripts/build-sitemap.js` 的默认 BASE，最后调 node 重新生成
`sitemap.xml`。换域后只需重新部署（git push 或 wrangler）+ 到 CF 控制台把
custom domain 改成新域名。



---

## 十二、部署检查表（自用）

每次上线前打勾：

- [ ] 本地 `node scripts/build-sitemap.js` 跑通
- [ ] 所有 HTML 的 `c.qifei2035.eu.cc` 域名一致
- [ ] `theme-color` meta 有 light + dark 两种
- [ ] 没有遗留的 `#2563eb` 蓝色（`grep -rl '#2563eb' --include='*.html' .` 应为空）
- [ ] 文章页都链接 `article.css` 且无内联蓝色 `<style>` 残留
- [ ] `favicon.svg` 是 foxai Tile（Ember 底 + 反白 Mark）
- [ ] Lockup 在所有 header 里（Mark 与 "ai" 同为品牌色，"fox" 中性墨色）
- [ ] Footer 显示联系邮箱 `foxbobby@qq.com`（mailto 链接可点）
- [ ] 全站名称为「虚拟地址生成器 / Virtual Address Generator / 仮想アドレスジェネレーター / 가상 주소 생성기」，无旧名残留
- [ ] `_headers` / `_redirects` 在项目根，CSS/JS 规则是 `must-revalidate`（文件名无 hash，不能 immutable）
- [ ] `robots.txt` 的 Sitemap 行指向 `https://c.qifei2035.eu.cc/sitemap.xml`
- [ ] `_redirects` 里的 fallback `/*  /index.html  404` 没误伤静态资源

---

## 附录 A：完整命令速查

```bash
# 部署
wrangler pages deploy . --project-name=c-address-generator --branch=main

# 看历史部署
wrangler pages deployment list --project-name=c-address-generator

# 回滚
wrangler pages deployment rollback <DEPLOYMENT_ID> --project-name=c-address-generator

# 看实时日志（控制台也行）
wrangler pages deployment tail --project-name=c-address-generator

# 重新生成 sitemap
node scripts/build-sitemap.js

# 验证主页
curl -I https://c.qifei2035.eu.cc/

# 验证 SSL
echo | openssl s_client -connect c.qifei2035.eu.cc:443 2>/dev/null | openssl x509 -noout -subject

# 验证 DNS
dig c.qifei2035.eu.cc @1.1.1.1 +short

# 验证缓存头
curl -I https://c.qifei2035.eu.cc/style.css | grep -i cache-control
```

## 附录 B：相关链接

- CF Pages 文档：https://developers.cloudflare.com/pages
- Wrangler CLI：https://developers.cloudflare.com/workers/wrangler
- CF 状态页：https://www.cloudflarestatus.com
- 免费 CF 套餐功能：https://www.cloudflare.com/plans/free/

---

## 附录 C：如果想跑 Vercel（迁移速查）

结论仍是 CF（见第〇节），但若要双跑验证或已付 Pro，按下面来：

1. **根目录新建 `vercel.json`**，把 `_headers` / `_redirects` 翻译过去：

```json
{
  "headers": [
    {
      "source": "/(.*)\\.(html)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "geolocation=(), microphone=(), camera=()" }
      ]
    },
    {
      "source": "/(.*\\.(css|js))",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" }
      ]
    }
  ],
  "rewrites": [{ "source": "/c", "destination": "/index.html" }]
}
```

注意 Vercel 的 `rewrites` 没有"404 状态码"语义，`_redirects` 里的 `/* → /index.html 404` 兜底在 Vercel 上要么做成 rewrite（返回 200，SEO 不佳），要么让 Vercel 自己 404（推荐）。

2. **DNS**：CF 控制台 → DNS → 加 `CNAME c → cname.vercel-dns.com`，**Proxy 设为 DNS only（灰色云朵）**。保持橙色云朵会出现重定向循环或证书报错（CF 代理挡在 Vercel 前面，Vercel 看到的 Host 不对）。
3. **部署**：`npx vercel --prod`（框架预设 Other，无构建命令，输出目录 `./`）。
4. **商业合规**：挂 AdSense 属商业用途，Hobby 计划条款不允许，需 Pro。
5. **验收**：`curl -I https://c.qifei2035.eu.cc/style.css` 看缓存头是否与 `vercel.json` 一致。

---

部署完在浏览器开 `https://c.qifei2035.eu.cc/`，看到橙色 foxai 头部 + 右上角主题切换按钮能切换明暗，就算成了。
