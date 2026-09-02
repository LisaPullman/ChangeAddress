# Aimei 虚拟地址生成器 / foxai Virtual Address Generator

免费、无需注册的在线随机地址生成工具，支持 **6 个国家**的真实格式地址（街道、城市、邮编、电话、姓名），提供单条 / 批量生成、历史保存、暗 / 亮主题与多语言界面。

- **线上地址**：https://c.qifei2035.eu.cc/
- **品牌**：foxai · Aimei
- **类型**：纯静态站点（HTML + CSS + JS + SVG）—— **无任何构建步骤**
- **托管**：Cloudflare Pages（全球 CDN、自动 HTTPS）
- **多语言**：中文（默认）/ English / 日本語 / 한국어

---

## ✨ 功能

- 🌐 **6 国地址格式**：🇺🇸 美国 · 🇨🇦 加拿大 · 🇬🇧 英国 · 🇦🇺 澳大利亚 · 🇩🇪 德国 · 🇫🇷 法国
- 🎯 **单条生成** 与 📦 **批量生成**，一键复制到剪贴板
- 💾 **本地保存** 历史地址（`localStorage`，不上传）
- 🌗 **明 / 暗主题**（跟随系统 + 手动切换，偏好写入 `localStorage`）
- 🌍 **4 语言切换**：`zh / en / ja / ko`，每页带 `hreflang` 与 `canonical`
- 🧩 **Schema.org** 结构化数据：`WebApplication` / `FAQPage` / `Organization`
- 📝 **10 篇 SEO 长文**，每篇 4 语言，共 40 个文章页
- ⚡ 客户端纯 JS 渲染，**无后端、无数据库、无追踪**（可选 Cloudflare Analytics）

> 本工具生成的是**地址格式与测试数据**，主要用于表单填写、开发测试、跨境电商与隐私场景。**不保证每条地址都对应真实可收件地点。**

---

## 📁 目录结构

```
.
├── index.html              # 中文首页（默认）
├── about.html
├── contact.html
├── privacy.html
├── terms.html
│
├── en/ ja/ ko/             # 三套语言首页 / 关于 / 联系 / 隐私 / 条款
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── privacy.html
│   └── terms.html
│
├── articles/               # 10 篇 SEO 长文（中文）
│   ├── index.html
│   ├── us-address-format-guide.html
│   ├── uk-postal-code-guide.html
│   ├── canadian-address-format.html
│   ├── germany-france-address-guide.html
│   ├── valid-us-address-format.html
│   ├── register-us-apple-id.html
│   ├── cross-border-ecommerce-address-comparison.html
│   ├── address-generator-use-cases.html
│   ├── address-generator-testing-guide.html
│   └── privacy-random-address-guide.html
├── articles/en/ ja/ ko/    # 同样 10 篇的英 / 日 / 韩版本
│
├── assets/brand/           # 品牌资源
│   ├── mark.svg            # 站点 icon
│   ├── lockup.svg          # 横版 logo（foxai 文字 + 图形）
│   ├── tile.svg            # 方形 tile
│   ├── og-image.svg        # 社交分享卡（1200×630）
│   ├── brand.css           # 品牌 token（颜色 / 字体 / 间距）
│   ├── cf-analytics.js     # Cloudflare Web Analytics 注入脚本
│   └── README.md           # 品牌使用说明
│
├── favicon.svg             # 浏览器标签页图标
├── style.css               # 全站样式
├── script.js               # 生成逻辑 + i18n + 主题切换
├── article.css             # 文章页专用样式
│
├── robots.txt              # 搜索引擎指令
├── sitemap.xml             # 站点地图（由 scripts/build-sitemap.js 生成）
├── _headers                # Cloudflare Pages 缓存与安全头
├── _redirects              # Cloudflare Pages 重定向
│
├── scripts/
│   ├── build-sitemap.js    # 扫描所有 *.html 重新生成 sitemap.xml
│   ├── set-domain.py       # 一键替换全站域名（canonical / hreflang / og:url / JSON-LD）
│   └── domain.txt          # 当前生效的域名（set-domain.py 的单一真源）
│
├── DEPLOY.md               # Cloudflare Pages 完整部署文档
├── cf.md                   # CF Pages 进阶（监控 / 缓存 / 故障排查）
├── LOGO.html               # Logo 实现规范（可浏览器预览）
└── README.md               # 你正在看的这个文件
```

> ⚠️ `API.md` 是早期 / 其它项目残留的影视聚合 API 文档，与本地址生成器无关，建议删除（保留也可，文档无害）。

---

## 🛠️ 技术栈

| 层 | 选型 | 备注 |
|---|---|---|
| 内容 | 静态 HTML | 所有文本、链接、SEO 标签都在源码里 |
| 样式 | 原生 CSS（`style.css` + `article.css` + `assets/brand/brand.css`） | 无 Tailwind / 无 PostCSS |
| 行为 | 原生 JS（`script.js`） | i18n 字典内嵌、主题切换、`localStorage` 持久化 |
| 图标 / Logo | 内联 SVG + `favicon.svg` | 矢量、零外部请求 |
| SEO | `<title>` / `<meta>` / `hreflang` / `canonical` / Schema.org JSON-LD | `sitemap.xml` 由脚本生成 |
| 托管 | Cloudflare Pages | Git 连接 / 拖拽上传 / Wrangler CLI 三种方式都支持 |

**没有任何 npm 依赖**，也**没有构建步骤**。直接打开 `index.html` 就能跑。

---

## 🚀 本地预览

任选其一：

```bash
# 1) Python（不需要额外安装）
python3 -m http.server 8080
# → 浏览器打开 http://localhost:8080/

# 2) Node（如果你装了 npx）
npx serve .

# 3) Cloudflare Wrangler（最贴近生产环境）
npx wrangler pages dev .
```

> 直接双击 `index.html` 用 `file://` 打开**也可以**，但部分浏览器对 `localStorage` 与 `fetch` 在 `file://` 下的行为有差异，建议用上面任一 HTTP 服务。

---

## 🌐 切换域名

域名在所有 `*.html` 的 `canonical` / `hreflang` / `og:url` / JSON-LD 里**硬编码**（静态托管 + 爬虫不跑 JS，没法做运行时改写）。改域名用脚本一次性替换：

```bash
# 查看当前域名
python3 scripts/set-domain.py

# 切换到新域名（同步更新 HTML、_redirects、robots.txt、build-sitemap.js 的 BASE 默认值、domain.txt，并重建 sitemap.xml）
python3 scripts/set-domain.py new.example.com
```

`scripts/domain.txt` 是**域名单一真源**。

---

## 🗺️ 重新生成 sitemap

新增 / 删除文章或页面后，重建 `sitemap.xml`：

```bash
# 默认写入 ./sitemap.xml
node scripts/build-sitemap.js

# 预览而不写文件
node scripts/build-sitemap.js --dry-run

# 指定基础域
BASE=https://c.qifei2035.eu.cc node scripts/build-sitemap.js
```

脚本会自动扫描所有 `*.html`（跳过 `.git` / `scripts` / `node_modules` / `assets`），按页分组写出 `hreflang` 集群与 `lastmod`。

---

## ☁️ 部署

详见 [`DEPLOY.md`](./DEPLOY.md) —— 涵盖 Git 连接、拖拽上传、Wrangler CLI 三种方式，以及 DNS、缓存、回滚、常见坑。

简要流程：

1. Cloudflare 控制台 → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**，选本仓库
2. Build settings：Framework preset = **None**，Build command / Build output 全部留空
3. **Custom domains** → 添加 `c.qifei2035.eu.cc`（或你自己的子域）
4. 每次 `git push origin main` 自动触发 production 部署

进阶（Analytics、自动压缩、Brotli、Cache Rules）见 [`cf.md`](./cf.md)。

### 已配置的头与重定向

- **`_headers`**：HTML 永远 `must-revalidate`（改版立刻生效），CSS / JS / `/assets/*` 走 `must-revalidate`；统一加 `X-Content-Type-Options` / `X-Frame-Options` / `Referrer-Policy` / `Permissions-Policy`。
- **`_redirects`**：强制 HTTPS、`/c` 短链、未知路径 fallback 回首页。

---

## 🌍 多语言

- `zh`（中文，默认）放在根目录
- `en` / `ja` / `ko` 在各自文件夹下结构镜像（`index.html`、`articles/<slug>.html`）
- 每页 `<head>` 都带：

  ```html
  <link rel="canonical" href="https://c.qifei2035.eu.cc/...">
  <link rel="alternate" hreflang="zh" href="https://c.qifei2035.eu.cc/...">
  <link rel="alternate" hreflang="en" href="https://c.qifei2035.eu.cc/en/...">
  <link rel="alternate" hreflang="ja" href="https://c.qifei2035.eu.cc/ja/...">
  <link rel="alternate" hreflang="ko" href="https://c.qifei2035.eu.cc/ko/...">
  ```

- UI 文案用 `data-i18n="key"`，在 `script.js` 里维护 4 语言字典
- 文章内容每语言独立写，**不靠翻译工具** —— SEO 与可读性优先

新增一篇文章的步骤：

1. 在 `articles/<slug>.html`、`articles/en/<slug>.html`、`articles/ja/<slug>.html`、`articles/ko/<slug>.html` 各写一份
2. 在 `articles/index.html` 的多语言卡片列表里加 4 条
3. 在首页 `index.html`（及 en/ja/ko 镜像）的"最新文章"区块加 4 条
4. `node scripts/build-sitemap.js` 重建 sitemap
5. 提交、推送、Cloudflare Pages 自动部署

---

## 🔒 合规

- `privacy.html` / `terms.html` 已预置（每语言各一份）
- 所有用户数据仅存浏览器 `localStorage`（已保存地址、主题偏好）—— 不上传服务器
- 如开启 `assets/brand/cf-analytics.js`，会加载 Cloudflare Web Analytics（不写 Cookie）
- 不使用 Google Analytics、不使用任何广告 SDK

---

## 🧰 故障排查

| 现象 | 可能原因 | 处理 |
|---|---|---|
| 打开域名白屏 | DNS 未切到 CF / 缓存的旧版本 | `curl -I` 看 HTTP 状态；CF 控制台强制 purge |
| `1014 / 1016` | `eu.cc` 注册商对子域 CNAME 限制 | 改用 A 记录指向 CF Pages IP，或换域名 |
| CSS / JS 404 | 路径非相对路径 | 仓库里所有链接都是相对路径，确认没动过 |
| 主题不切换 | `localStorage` 被禁用 | 隐私模式下回退到 `prefers-color-scheme` |
| sitemap 不全 | 新增页面未跑构建脚本 | `node scripts/build-sitemap.js` |

---

## 📜 许可

仓库源码仅供个人学习与部署本项目使用。地址生成数据为虚构 / 公开格式样本，**不得用于任何违法用途**（注册欺诈、身份冒用、虚假广告等）。

---

## 维护命令速查

```bash
# 改域名
python3 scripts/set-domain.py new.example.com

# 重建 sitemap
node scripts/build-sitemap.js

# 提交并部署
git add -A
git commit -m "update: ..."
git push origin main    # → Cloudflare Pages 自动部署
```