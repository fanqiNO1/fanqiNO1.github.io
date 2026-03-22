# Personal Portfolio

A personal portfolio website built with Astro, featuring i18n support, markdown-based content, and a clean, modern design.

## Features

- **i18n Support**: Chinese and English language switching with URL-based routing (`/zh/` and `/en/`)
- **Markdown Content**: All text content stored in markdown files
- **Blog Tags**: Tag-based blog organization with tag cloud visualization
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode**: Automatic dark mode support
- **PDF Preview**: CV page with embedded PDF viewer
- **Configurable Sidebar**: Personal info and social links via JSON config
- **Static Generation**: Optimized for GitHub Pages deployment

## Project Structure

```
├── public/                      # Static assets
│   ├── images/                 # Images
│   │   ├── publications/       # Publication cover images
│   │   ├── projects/           # Project cover images
│   │   └── blog-series/        # Blog series cover images
│   ├── cv/                     # CV PDF files (cv-zh.pdf, cv-en.pdf)
│   ├── content/                # Markdown content files
│   │   ├── about/              # About page markdown (zh.md, en.md)
│   │   ├── publications/       # Publication markdown files
│   │   ├── projects/           # Project markdown files
│   │   └── blogs/              # Blog markdown files
│   └── config/                 # Configuration files
│       └── sidebar.json        # Sidebar configuration
├── src/
│   ├── components/             # Reusable components
│   │   ├── Navbar.astro        # Navigation bar
│   │   └── Sidebar.astro       # Sidebar with personal info
│   ├── layouts/                # Page layouts
│   │   └── Layout.astro        # Main layout
│   ├── pages/                  # Page routes
│   │   ├── index.astro         # About page (EN)
│   │   ├── publications.astro  # Publications page (EN)
│   │   ├── projects.astro      # Projects page (EN)
│   │   ├── cv.astro            # CV page (EN)
│   │   ├── blogs/              # Blog pages (EN)
│   │   │   └── tag/            # Blog tags
│   │   └── zh/                 # Chinese pages
│   │       ├── index.astro     # About page (ZH)
│   │       ├── publications.astro
│   │       ├── projects.astro
│   │       ├── cv.astro
│   │       └── blogs/
│   ├── content.config.ts       # Content collections config
│   ├── i18n/                   # Internationalization
│   │   ├── zh.json             # Chinese translations
│   │   ├── en.json             # English translations
│   │   └── utils.ts            # i18n utilities
│   └── styles/                 # Global styles
│       └── global.css
├── astro.config.mjs            # Astro configuration
└── package.json
```

## URL Structure

- **Root** (`/`): English version (no redirect)
- **English** (`/*`): English version of all pages (e.g., `/publications`, `/projects`)
- **Chinese** (`/zh/*`): Chinese version of all pages (e.g., `/zh/publications`, `/zh/projects`)

| Page | English URL | Chinese URL |
|------|-------------|-------------|
| About | `/` | `/zh/` |
| Publications | `/publications` | `/zh/publications` |
| Projects | `/projects` | `/zh/projects` |
| Blogs | `/blogs` | `/zh/blogs` |
| Blog Series | `/blogs/{series}` | `/zh/blogs/{series}` |
| Blog Post | `/blogs/{series}/{slug}` | `/zh/blogs/{series}/{slug}` |
| Blog Tags | `/blogs/tag` | `/zh/blogs/tag` |
| Blog Tag Filter | `/blogs/tag/{tag}` | `/zh/blogs/tag/{tag}` |
| CV | `/cv` | `/zh/cv` |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is configured for GitHub Pages deployment. Update the `site` and `base` fields in `astro.config.mjs` with your GitHub username and repository name.

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',  // Remove this if using username.github.io
  // ...
});
```

## Configuration

### Sidebar Configuration

Edit `public/config/sidebar.json` to customize your personal information:

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

**Supported link types:** `googleScholar`, `orcid`, `github`, `zhihu`, and any other URL (will use generic link icon).

## Content Management

### Adding a Publication

1. Create a new markdown file in `public/content/publications/`, e.g., `my-paper.md`
2. Add the following frontmatter and content:

```yaml
---
title: "Your Paper Title"
authors:
  - "Your Name"
  - "Co-author 1"
  - "Co-author 2"
conference: "Conference Name (e.g., NeurIPS, ICML)"
year: 2024
cover: "/images/publications/your-paper.jpg"
tags:
  - "Deep Learning"
  - "Computer Vision"
links:
  paper: "https://arxiv.org/abs/xxxx"
  code: "https://github.com/username/repo"
  project: "https://project-page.com"
date: 2024-03-15
selected: true
---

Write your paper abstract and description here using Markdown syntax.
```

3. Add a cover image to `public/images/publications/your-paper.jpg`
4. Rebuild the site: `npm run build`

**Sorting:** Publications are sorted by `selected` (true first) and then by `date` (newest first). Selected papers are highlighted with a badge.

### Adding a Project

1. Create a new markdown file in `public/content/projects/`, e.g., `my-project.md`
2. Add the following frontmatter and content:

```yaml
---
title: "Project Name"
description: "A brief one-sentence description of the project."
cover: "/images/projects/your-project.jpg"
tags:
  - "Python"
  - "Machine Learning"
  - "Web Development"
github: "https://github.com/username/repo"
stars: 100
demo: "https://demo.example.com"
date: 2024-03-15
---

Write your project description here using Markdown syntax.
Include features, installation instructions, usage examples, etc.
```

3. Add a cover image to `public/images/projects/your-project.jpg`
4. Rebuild the site: `npm run build`

**Sorting:** Projects are sorted by `date` (newest first).

### Adding a Blog Series

Blog series are organized as directories under `public/content/blogs/`. Each series contains multiple blog posts.

To add a new blog series:

1. Create a new directory under `public/content/blogs/`, e.g., `my-series/`
2. The directory name will be used as the URL slug (e.g., `/blogs/my-series/`)
3. Add blog posts to this directory (see next section)
4. Update the series list in `src/pages/zh/blogs/index.astro` and `src/pages/en/blogs/index.astro`

### Adding a Blog Post

1. Navigate to an existing series directory, e.g., `public/content/blogs/my-series/`
2. Create a new subdirectory for your post, e.g., `my-post/`
3. Create a `main.md` file inside that directory with the following structure:

```yaml
---
title: "Blog Post Title"
series: "Series Display Name"
date: 2024-03-20
readTime: 15
cover: "/images/blog-series/your-series.jpg"  # Optional
tags: ["Tag1", "Tag2", "Tag3"]  # Optional
zhihuLink: "https://zhihu.com/p/xxxx"  # Optional
wechatLink: "https://mp.weixin.qq.com/s/xxxx"  # Optional
---

# Blog Post Title

Write your blog content here using Markdown syntax.

## Section Heading

- Bullet points
- Code blocks
- Images
- Etc.
```

4. The blog post will be automatically available at `/zh/blogs/my-series/my-post/` and `/en/blogs/my-series/my-post/`

### Blog Tags

Blog posts support tags for better organization. Tags are displayed as a tag cloud on the tags page and allow filtering posts by topic.

**To use tags:**

1. Add tags to your blog post frontmatter:
```yaml
tags: ["Deep Learning", "Computer Vision", "PyTorch"]
```

2. View all tags at `/blogs/tag` (or `/zh/blogs/tag` for Chinese)

3. Click on a tag to see all posts with that tag

The tag cloud shows tags with varying font sizes based on the number of posts, creating a visual hierarchy of popular topics.

### Updating the About Page

The about page supports both Chinese and English versions:

1. Chinese version: `public/content/about/zh.md`
2. English version: `public/content/about/en.md`

Example frontmatter and content:

```yaml
---
lang: zh  # or "en" for English
---

# About Me

Write your about page content here...
```

### Adding CV PDF Files

1. Place your CV PDF files in `public/cv/`:
   - Chinese CV: `cv-zh.pdf`
   - English CV: `cv-en.pdf`
2. The CV page will automatically display the correct version based on the current language

### Adding Images

Place images in the appropriate directories:

- Publication covers: `public/images/publications/`
- Project covers: `public/images/projects/`
- Blog series covers: `public/images/blog-series/`
- Blog post images: `public/content/blogs/{series}/{post}/`
- Avatar: `public/images/avatar.jpg`

Reference images in markdown using:

```markdown
![Alt text](/images/publications/my-image.jpg)
```

Or within blog posts, use relative paths:

```markdown
![Alt text](./image1.png)
```

## Customization

### Translations

Update translations in `src/i18n/zh.json` and `src/i18n/en.json`:

```json
{
  "nav": {
    "about": "About",
    "publications": "Publications",
    "projects": "Projects",
    "blogs": "Blogs",
    "cv": "CV"
  },
  "sidebar": {
    "tagline": "Tagline",
    "location": "Location",
    "school": "School",
    "links": "Links",
    "googleScholar": "Google Scholar",
    "orcid": "ORCID",
    "github": "GitHub",
    "zhihu": "Zhihu"
  },
  "publications": {
    "title": "Publications",
    "authors": "Authors",
    "conference": "Conference",
    "links": "Links"
  },
  "projects": {
    "title": "Projects",
    "description": "Description",
    "stars": "Stars"
  },
  "blogs": {
    "title": "Blog Archives",
    "series": "Series",
    "lastUpdated": "Last Updated",
    "readTime": "Read Time",
    "minutes": "min",
    "zhihu": "Zhihu",
    "wechat": "WeChat"
  },
  "cv": {
    "title": "Curriculum Vitae",
    "openInNewTab": "Open in new tab",
    "switchZh": "中文简历",
    "switchEn": "English CV"
  }
}
```

### Styling

- Global styles: `src/styles/global.css`
- Tailwind CSS classes are used throughout the components
- Dark mode is supported via Tailwind's `dark:` modifier

## License

MIT