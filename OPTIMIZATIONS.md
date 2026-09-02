# 部署优化行动清单

> 本文件列出**只能在 Cloudflare 控制台或第三方服务后台操作**的步骤，仓库改动无法覆盖。
> 建议每完成一项在方框 `[ ]` 里打勾 `[x]`，并在文末"执行记录"里填日期。

---

## A. Cloudflare 控制台性能开关（5 分钟）

登录 <https://dash.cloudflare.com/> → 选 `qifei2035.eu.cc` zone → 左侧 **Speed** / **Network** 标签。

### A1. HTTP/3（QUIC）+ 0-RTT

- [ ] **Network** → **HTTP/3 (QUIC)** → 开启
- [ ] **Network** → **0-RTT** → 开启（仅对边缘缓存命中有效；本项目 HTML 走 revalidate，但 CSS/JS/SVG 命中后 0-RTT 收益明显）

### A2. Early Hints

- [ ] **Speed** → **Optimization** → **Early Hints** → 开启

### A3. Auto Minify

- [ ] **Speed** → **Optimization** → **Auto Minify: HTML, CSS, JS** → 全部开启
- 本项目已无构建步骤，运行时压缩对 LCP 改善约 5–10%

### A4. Brotli

- [ ] 默认已开启；如果看到 "Off" 把它打开
- 在 **Speed** → **Optimization** 里

### A5. Cache Reserve / Cache Rules（可选）

- [ ] **Caching** → **Cache Rules** → 新增一条：
  - Match: `URI Path` contains `/sitemap.xml`
  - Action: `Cache eligibility` = Eligible, Edge TTL = 5 min, Browser TTL = 0
- 这样 sitemap 走边缘缓存，CF Pages 后端不会被打爆

### A6. 验证

```bash
# HTTP/3 工作
curl -I --http3 https://c.qifei2035.eu.cc/ 2>&1 | head -5

# Early Hints（CF 回 103 + 200）
curl -I -H "Accept: text/html" https://c.qifei2035.eu.cc/ 2>&1 | head -10

# 压缩生效
curl -H "Accept-Encoding: br" -I https://c.qifei2035.eu.cc/style.css | grep -i content-encoding
# → br
```

---

## B. Cloudflare Turnstile + UptimeRobot（30 分钟）

### B1. Turnstile（联系表单防滥用）

**适用场景**：当前 mailto 表单被滥用时（自动脚本提交垃圾邮件）。本期先用 mailto 不接 Turnstile；待升级 Pages Functions 接表单后端时同步加上。

启用步骤：

1. <https://dash.cloudflare.com/> → 左侧 **Turnstile** → **Add widget**
2. Widget name: `c-foxai-contact`
3. Hostname: `c.qifei2035.eu.cc`
4. Widget mode: **Managed**（最严）或 **Non-interactive**（最友好，推荐）
5. 创建后拿到：
   - **Site Key**（公开，前端嵌入）
   - **Secret Key**（私密，Pages Function 里校验）

前端嵌入（部署 Pages Function 后加到 contact.html 的 `<form>` 里）：
```html
<div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

后端校验（`functions/api/contact.js`）：
```js
const ok = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    secret: env.TURNSTILE_SECRET,           // Pages env 里配
    response: formData.get('cf-turnstile-response'),
    remoteip: request.headers.get('CF-Connecting-IP'),
  }),
}).then(r => r.json());
if (!ok.success) return new Response('bot', { status: 403 });
```

### B2. UptimeRobot（站点可用性监控，免费 50 步 / 5 分钟一次）

1. 注册 <https://uptimerobot.com/>（免费）
2. **Add New Monitor**：
   - Monitor Type: `HTTP(s)`
   - Friendly Name: `foxai home`
   - URL: `https://c.qifei2035.eu.cc/`
   - Monitoring Interval: `5 minutes`
3. 重复添加：
   - `foxai sitemap` → `https://c.qifei2035.eu.cc/sitemap.xml`
   - `foxai robots` → `https://c.qifei2035.eu.cc/robots.txt`
4. **Alert Contacts** → 加邮箱 / Discord webhook / Telegram
5. （可选）**Status Page** → 起一个公开 status 页 `<your-name>.statuspage.io`，挂在 footer

### B3. CF 内置 Notifications（推送部署失败 / 错误率）

1. CF 控制台 → **Workers & Pages** → 项目 → **Settings** → **Notifications**
2. 启用以下事件，路由到 Discord/Slack/Email：
   - `Deployment failed`
   - `Free tier limit reached`
3. 推荐路由到 Discord webhook（最快）

---

## C. CAA / DNSSEC / HSTS Preload（10 分钟）

### C1. CAA 记录（限制证书签发机构）

CF 控制台 → **DNS** → **Records** → Add：

| Type | Name | Content | TTL |
| --- | --- | --- | --- |
| CAA | `@` | `0 issue "letsencrypt.org"` | Auto |
| CAA | `@` | `0 issue "cloudflare.com"` | Auto |
| CAA | `@` | `0 iodef "mailto:foxbobby@qq.com"` | Auto |

> 如果以后改用其它 CA（如 DigiCert），再加一行。

### C2. DNSSEC

- CF 控制台 → **DNS** → **Settings** → 开启 DNSSEC
- `eu.cc` 二级域：Freenom 系注册商**通常不暴露 DS 记录接口**，所以**很可能没法开**——试试看，如果失败就跳过。

### C3. HSTS Preload

1. 先观察 `_headers` 里的 HSTS：`max-age=15552000; includeSubDomains` 跑稳 6 个月
3. 改为：`max-age=63072000; includeSubDomains; preload`
4. 到 <https://hstspreload.org/> 提交 `c.qifei2035.eu.cc`
5. 进入 Chrome / Firefox / Safari 内置列表后，浏览器永远强制 HTTPS（首次连接也走 HTTPS，无法被 SSL Strip）

---

## D. 长期：域名迁移（1–3 天）

> `eu.cc` 属 Freenom 系 TLD，长期被邮件网关 / 广告联盟 / 企业代理视为低信任域。AdSense 申请大概率拒。

### D1. 选稳定后缀

| 后缀 | 优点 | 缺点 | 推荐度 |
| --- | --- | --- | --- |
| `.com` | 全球认知度最高 | 贵、好名字被注册完 | ⭐⭐⭐⭐⭐ |
| `.io` | 技术圈偏好 | 中等 | ⭐⭐⭐⭐ |
| `.dev` | 强制 HTTPS / 技术定位 | 中等 | ⭐⭐⭐⭐ |
| `.app` | 强制 HTTPS | 略显新 | ⭐⭐⭐ |
| `.net` / `.org` | 老牌 | 适合但不抢眼 | ⭐⭐⭐ |

### D2. 落地步骤

1. 购买 + DNS 切到 CF（如果还不是）
2. `python3 scripts/set-domain.py new.example.com` 一键全站换绑
3. `_redirects` 第一条改 `http://c.qifei2035.eu.cc/*  https://new.example.com/:splat  301`（旧域 301 跳新域，SEO 权重可继承）
4. CF Pages → **Custom domains** → 加新域名，旧域改为 301 redirect
5. Google Search Console / Bing / 百度站长平台 重新提交 sitemap
6. 监控旧域 30 天后流量归零再停止续费

---

## 执行记录

| 步骤 | 完成日期 | 备注 |
| --- | --- | --- |
| A1 HTTP/3 + 0-RTT | | |
| A2 Early Hints | | |
| A3 Auto Minify | | |
| A5 Cache Rule（sitemap） | | |
| B2 UptimeRobot | | |
| B3 CF Notifications | | |
| C1 CAA 记录 | | |
| C3 HSTS Preload（6 个月后） | | |
| D 域名迁移 | | |