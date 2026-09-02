/**
 * Cloudflare Web Analytics loader.
 *
 * Drop in your beacon token at deploy time by editing the line below OR by
 * injecting `window.CF_BEACON_TOKEN` from a build step / Pages Function
 * snippet. If no token is set, this loader is a no-op — no extra requests,
 * no third-party JS.
 *
 * To enable:
 *   1. CF Dashboard → Account Home → Web Analytics → Add site
 *   2. Pick the deployed Pages project
 *   3. Copy the token string from the beacon snippet
 *   4. Paste it between the quotes on the line marked [TOKEN]
 *
 * Or set window.CF_BEACON_TOKEN before this script runs.
 */
(function () {
  var TOKEN = (typeof window !== 'undefined' && window.CF_BEACON_TOKEN) || ''; // [TOKEN]
  if (!TOKEN) return;

  // Inject the official Cloudflare beacon. The script tag is async + deferred
  // so it never blocks first paint.
  var s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.dataset.cfBeacon = JSON.stringify({ token: TOKEN });
  s.dataset.cfAsync = 'false';
  document.head.appendChild(s);
})();
