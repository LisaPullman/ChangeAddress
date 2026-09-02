# 部署到 Cloudflare Pages

本项目是纯静态站点（HTML + CSS + JS + SVG），可以直接托管在 Cloudflare Pages
上，免费、自动 HTTPS、全球 CDN。**不需要任何构建步骤**。

部署目标：`https://c.qifei2035.eu.cc/`

---

## 1. 前置准备

| 项 | 要求 |
| --- | --- |
| Cloudflare 账号 | 免费版即可 |
| 域名 `qifei2035.eu.cc` | 已在 Cloudflare 托管（用于配 CNAME） |
| 项目根目录 | `address-main/`（所有 HTML 在根，没有 `dist/` 或 `public/`） |
| `git` | 可选，Git 部署方式需要 |

> 如果 `qifei2035.eu.cc` 还没有在 Cloudflare 注册，先把它 Add Site，Cloudflare 会
> 自动接管 DNS。

---

## 2. 部署方式（任选其一）

### 方式 A：Git 连接（推荐）

把项目推到一个 git 仓库（GitHub / GitLab），然后在 Pages 后台关联。每次 push
都会自动触发部署，preview 部署给 PR，production 部署给 main 分支。

```bash
cd address-main
git init -b main
git remote add origin git@github.com:YOUR/c-address-generator.git
git push -u origin main
```

然后在 CF 控制台：

1. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 选 `c-address-generator` 仓库
3. **Build settings**（关键：项目是纯静态）

   | 字段 | 值 |
   | --- | --- |
   | Framework preset | **None** |
   | Build command | （留空） |
   | Build output directory | `/`（根目录）或 `.` |
   | Root directory | （留空） |

4. **Save and Deploy**。首次会跑一次空 build，几十秒后 `*.pages.dev` 上线。
5. 进入项目 → **Custom domains** → **Set up a custom domain**
   → 填 `c.qifei2035.eu.cc`。CF 会自动配 CNAME 并签发证书。

> ⚠️ 如果 `qifei2035.eu.cc` 不在 CF 的 DNS 里，会要求你先把 NS 切到 CF。

### 方式 B：直接上传（最快）

不用 git。打包 → 拖进 CF 后台。

```bash
cd address-main
zip -r ../c-address-generator.zip . -x '.git/*' -x '*.DS_Store'
```

控制台：**Workers & Pages** → **Create** → **Pages** → **Upload assets**
→ **Drag and drop** 或选 zip。CF 会自动上传并部署。

⚠️ 这种方式每次都要手动上传，不能 rollback 到任意历史版本。适合临时验证。

### 方式 C：Wrangler CLI

本地直接推。适合脚本化部署。

```bash
npm i -g wrangler
wrangler login                                # 一次性

cd address-main
wrangler pages deploy . --project-name=c-address-generator --branch=main
```

`wrangler` 会：
- 自动创建 Pages project（如不存在）
- 上传所有静态文件
- 输出 `https://c-address-generator.pages.dev` 链接

---

## 3. DNS 配置

`c.qifei2035.eu.cc` 是子域名。两条路：

### 推荐：让 CF 自动配（控制台一键）

**Pages 项目 → Custom domains → Set up a custom domain → c.qifei2035.eu.cc**

CF 自动在 `qifei2035.eu.cc` 所在 zone 加一条：

```
CNAME   c   c-address-generator.pages.dev   (proxied / 橙色云朵)
```

证书自动签发，10 秒内 HTTPS 生效。

### 手动配

如果不想走 Pages 自定义域名流程，**Pages → Custom domains → Add** 后台会列出
需要加的 DNS 记录。最常见的就是 `c` 子域的 CNAME。

> 注意：`eu.cc` 是 Freenom 系二级域名，部分注册商可能不支持 `c.` 子域的
> CNAME。如果有问题，把 A 记录指向 CF Pages 的 IP 也行（CF 会给出 IP 列表）。

---

## 4. 缓存策略：`_headers` 文件

把下面的 `_headers` 放到项目根目录。CF Pages 自动识别。

```
/*.html
  Cache-Control: public, max-age=0, must-revalidate
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.svg
  Cache-Control: public, max-age=31536000, immutable

/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

> HTML 永远 0 缓存（这样你改完代码发版用户立刻看到），CSS/JS/SVG 用
> `immutable` 永久缓存。

本项目 `_headers` 已经预置，见文件末尾。

---

## 5. SPA fallback：`_redirects` 文件

本项目不是 SPA，但因为有 4 个语言目录（`en/ ja/ ko/`）和 `articles/` 子目录，
建议加一条 fallback：

```
/*    /index.html   404
```

文件已预置在项目根目录，作用：访问不存在的 URL 时回到首页而不是 404。

---

## 6. 部署后验证清单

```bash
# 1. 主页可访问
curl -I https://c.qifei2035.eu.cc/
# → HTTP/2 200

# 2. SSL 证书有效
curl -vI https://c.qifei2035.eu.cc/ 2>&1 | grep "subject:"
# → subject: CN = c.qifei2035.eu.cc

# 3. 缓存头正确
curl -I https://c.qifei2035.eu.cc/style.css | grep -i cache-control
# → cache-control: public, max-age=31536000, immutable

# 4. sitemap 可访问
curl -I https://c.qifei2035.eu.cc/sitemap.xml
# → 200, Content-Type: application/xml

# 5. 4 语言路径都通
for p in en/index.html ja/index.html ko/index.html; do
  curl -I "https://c.qifei2035.eu.cc/$p" | head -1
done
# 全部 200
```

CF Pages 控制台 → **项目 → Analytics** 可以看到请求量、带宽、缓存命中率。
上线 24 小时后看 cache hit rate 应该 > 80%。

---

## 7. 回滚

- **Git 部署**：控制台 → **Deployments** → 找历史 commit → **Rollback to this deploy**
- **Wrangler CLI**：`wrangler pages deployment list --project-name=c-address-generator` 看 ID，`wrangler pages deployment rollback <id>`
- **直接上传**：覆盖式上传，没有历史版本

---

## 8. 常见坑

| 现象 | 原因 | 解决 |
| --- | --- | --- |
| 打开域名白屏 | DNS 没切到 CF | 检查 NS 记录，CF 控制台 DNS 列表里有没有这条 |
| `c.qifei2035.eu.cc` 报 1014 / 1016 | CNAME 冲突 / 区域错误 | 把根域 NS 切到 CF，或检查 `eu.cc` 注册商是否锁了子域 |
| CSS / JS 404 | 路径写错 | 项目是静态根目录部署，链接必须是相对路径（已经是） |
| 浏览器 favicon 还是旧版 | 强缓存 | 加 `?v=2` 或重命名文件；CF 边缘缓存可用 API 主动 purge |
| 主题切换不工作 | `localStorage` 被禁用 | 用户开了隐私模式；切到默认 `prefers-color-scheme` 即可 |

---

## 9. 进阶（可选）

- **Analytics**：CF 控制台 → **Web Analytics** → **Add** → 复制那段 `<script defer>` 粘到所有 HTML 的 `<head>`
- **Speed → Auto Minify**：HTML/CSS/JS 全部开
- **Speed → Brotli**：默认开
- **Caching → Cache Rules**：可以再细调，比如 `/sitemap.xml` 5 分钟缓存
- **Workers**：未来如果加 contact form 提交，可以挂一个 Pages Function（`functions/api/contact.js`）

---

部署完在浏览器开 `https://c.qifei2035.eu.cc/` 看到橙色 foxai 头部 + 暗色模式可切换，就算成了。
