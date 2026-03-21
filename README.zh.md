# 个人学术主页

基于 Astro 构建的个人学术主页，支持国际化、Markdown 内容管理和现代化设计。

## 特性

- **国际化支持**：中文/英文双语切换，基于 URL 路由 (`/zh/` 和 `/en/`)
- **Markdown 内容**：所有文本内容使用 Markdown 文件存储
- **响应式设计**：适配桌面和移动设备
- **深色模式**：自动深色模式支持
- **PDF 预览**：简历页面内嵌 PDF 查看器
- **可配置侧边栏**：通过 JSON 配置文件管理个人信息和社交链接
- **静态生成**：针对 GitHub Pages 部署优化

## 项目结构

```
├── public/                      # 静态资源
│   ├── images/                 # 图片
│   │   ├── publications/       # 论文封面图
│   │   ├── projects/           # 项目封面图
│   │   └── blog-series/        # 博客系列封面图
│   ├── cv/                     # 简历 PDF 文件 (cv-zh.pdf, cv-en.pdf)
│   ├── content/                # Markdown 内容文件
│   │   ├── about/              # 关于页面 (zh.md, en.md)
│   │   ├── publications/       # 论文 Markdown 文件
│   │   ├── projects/           # 项目 Markdown 文件
│   │   └── blogs/              # 博客 Markdown 文件
│   └── config/                 # 配置文件
│       └── sidebar.json        # 侧边栏配置
├── src/
│   ├── components/             # 可复用组件
│   │   ├── Navbar.astro        # 导航栏
│   │   └── Sidebar.astro       # 侧边栏（个人信息）
│   ├── layouts/                # 页面布局
│   │   └── Layout.astro        # 主布局
│   ├── pages/                  # 页面路由
│   │   ├── index.astro         # 关于页面（英文）
│   │   ├── publications.astro  # 论文页面（英文）
│   │   ├── projects.astro      # 项目页面（英文）
│   │   ├── cv.astro            # 简历页面（英文）
│   │   ├── blogs/              # 博客页面（英文）
│   │   └── zh/                 # 中文页面
│   │       ├── index.astro     # 关于页面（中文）
│   │       ├── publications.astro
│   │       ├── projects.astro
│   │       ├── cv.astro
│   │       └── blogs/
│   ├── content.config.ts       # 内容集合配置
│   ├── i18n/                   # 国际化
│   │   ├── zh.json             # 中文翻译
│   │   ├── en.json             # 英文翻译
│   │   └── utils.ts            # i18n 工具函数
│   └── styles/                 # 全局样式
│       └── global.css
├── astro.config.mjs            # Astro 配置
└── package.json
```

## URL 结构

- **根目录** (`/`): 英文版本（无需重定向）
- **英文** (`/*`): 所有页面的英文版本（如 `/publications`, `/projects`）
- **中文** (`/zh/*`): 所有页面的中文版本（如 `/zh/publications`, `/zh/projects`）

| 页面 | 英文 URL | 中文 URL |
|------|----------|----------|
| 关于 | `/` | `/zh/` |
| 论文 | `/publications` | `/zh/publications` |
| 项目 | `/projects` | `/zh/projects` |
| 博客 | `/blogs` | `/zh/blogs` |
| 博客系列 | `/blogs/{series}` | `/zh/blogs/{series}` |
| 博客文章 | `/blogs/{series}/{slug}` | `/zh/blogs/{series}/{slug}` |
| 简历 | `/cv` | `/zh/cv` |

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview
```

## 部署

本项目已配置为 GitHub Pages 部署。请在 `astro.config.mjs` 中更新 `site` 和 `base` 字段：

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',  // 如果使用 username.github.io 则删除此项
  // ...
});
```

## 配置

### 侧边栏配置

编辑 `public/config/sidebar.json` 来自定义个人信息：

```json
{
  "name": {
    "zh": "你的名字",
    "en": "Your Name"
  },
  "tagline": {
    "zh": "机器学习研究员 | 热爱开源",
    "en": "ML Researcher | Open Source Enthusiast"
  },
  "avatar": "/images/avatar.jpg",
  "location": {
    "zh": "中国，北京",
    "en": "Beijing, China"
  },
  "school": {
    "zh": "XX大学",
    "en": "XX University"
  },
  "links": {
    "googleScholar": "https://scholar.google.com/citations?user=YOUR_ID",
    "orcid": "https://orcid.org/0000-0000-0000-0000",
    "github": "https://github.com/YOUR_USERNAME",
    "zhihu": "https://www.zhihu.com/people/YOUR_USERNAME"
  }
}
```

**支持的链接类型：** `googleScholar`、`orcid`、`github`、`zhihu`，以及其他任意 URL（将使用通用链接图标）。

## 内容管理

### 添加论文

1. 在 `public/content/publications/` 创建新的 Markdown 文件，如 `my-paper.md`
2. 添加以下 frontmatter 和内容：

```yaml
---
title: "论文标题"
authors:
  - "你的名字"
  - "合作者 1"
  - "合作者 2"
conference: "会议名称 (如 NeurIPS, ICML)"
year: 2024
cover: "/images/publications/your-paper.jpg"
tags:
  - "深度学习"
  - "计算机视觉"
links:
  paper: "https://arxiv.org/abs/xxxx"
  code: "https://github.com/username/repo"
  project: "https://project-page.com"
date: 2024-03-15
selected: true
---

在这里用 Markdown 语法写论文摘要和描述。
```

3. 将封面图添加到 `public/images/publications/your-paper.jpg`
4. 重新构建网站：`npm run build`

**排序规则：** 论文按 `selected`（精选优先）和 `date`（新→旧）排序。精选论文会显示标签。

### 添加项目

1. 在 `public/content/projects/` 创建新的 Markdown 文件，如 `my-project.md`
2. 添加以下 frontmatter 和内容：

```yaml
---
title: "项目名称"
description: "项目的一句话简介。"
cover: "/images/projects/your-project.jpg"
tags:
  - "Python"
  - "机器学习"
  - "Web 开发"
github: "https://github.com/username/repo"
stars: 100
demo: "https://demo.example.com"
date: 2024-03-15
---

在这里用 Markdown 语法写项目描述。
包括功能特性、安装说明、使用示例等。
```

3. 将封面图添加到 `public/images/projects/your-project.jpg`
4. 重新构建网站：`npm run build`

**排序规则：** 项目按 `date`（新→旧）排序。

### 添加博客系列

博客系列以目录形式组织在 `public/content/blogs/` 下，每个系列包含多篇博客文章。

添加新博客系列：

1. 在 `public/content/blogs/` 下创建新目录，如 `my-series/`
2. 目录名将用作 URL slug（如 `/blogs/my-series/`）
3. 在该目录下添加博客文章（见下一节）
4. 更新 `src/pages/zh/blogs/index.astro` 和 `src/pages/en/blogs/index.astro` 中的系列列表

### 添加博客文章

1. 进入系列目录，如 `public/content/blogs/my-series/`
2. 为文章创建子目录，如 `my-post/`
3. 在该目录下创建 `main.md` 文件，结构如下：

```yaml
---
title: "博客文章标题"
series: "系列显示名称"
date: 2024-03-20
readTime: 15
zhihuLink: "https://zhihu.com/p/xxxx"  # 可选
wechatLink: "https://mp.weixin.qq.com/s/xxxx"  # 可选
---

# 博客文章标题

在这里用 Markdown 语法写博客内容。

## 章节标题

- 项目符号
- 代码块
- 图片
- 等等
```

4. 博客文章将自动在 `/zh/blogs/my-series/my-post/` 和 `/en/blogs/my-series/my-post/` 可用

### 更新关于页面

关于页面支持中英文两个版本：

1. 中文版：`public/content/about/zh.md`
2. 英文版：`public/content/about/en.md`

示例 frontmatter 和内容：

```yaml
---
lang: zh  # 或 "en" 表示英文
---

# 关于我

在这里写关于页面的内容...
```

### 添加简历 PDF 文件

1. 将简历 PDF 文件放入 `public/cv/`：
   - 中文简历：`cv-zh.pdf`
   - 英文简历：`cv-en.pdf`
2. 简历页面将根据当前语言自动显示对应版本

### 添加图片

将图片放入相应目录：

- 论文封面：`public/images/publications/`
- 项目封面：`public/images/projects/`
- 博客系列封面：`public/images/blog-series/`
- 博客文章图片：`public/content/blogs/{series}/{post}/`
- 头像：`public/images/avatar.jpg`

在 Markdown 中引用图片：

```markdown
![替代文字](/images/publications/my-image.jpg)
```

或在博客文章中使用相对路径：

```markdown
![替代文字](./image1.png)
```

## 自定义

### 翻译

更新 `src/i18n/zh.json` 和 `src/i18n/en.json` 中的翻译：

```json
{
  "nav": {
    "about": "关于",
    "publications": "论文",
    "projects": "项目",
    "blogs": "博客",
    "cv": "简历"
  },
  "sidebar": {
    "links": "链接",
    "googleScholar": "Google Scholar",
    "orcid": "ORCID",
    "github": "GitHub",
    "zhihu": "知乎"
  }
}
```

### 样式

- 全局样式：`src/styles/global.css`
- 组件中使用 Tailwind CSS 类
- 通过 Tailwind 的 `dark:` 修饰符支持深色模式

## 许可证

MIT
