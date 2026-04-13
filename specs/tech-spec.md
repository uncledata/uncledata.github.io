# Technical Spec: Personal Site & Portfolio

**Owner:** Tomas
**Status:** Draft v1
**Last updated:** April 2026
**Companion doc:** `product-spec.md`

## Summary

A static site built with Astro, styled with Tailwind, hosted on GitHub Pages at `uncledata.github.io`. Content lives as markdown files in the same repo, with the long-term goal of treating the site as the canonical source for posts and Substack as a downstream distribution channel. No analytics, no forms, no backend, no JavaScript shipped unless a specific component requires it.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Astro | Content-first, MDX support, ships zero JS by default, fast builds, easy GitHub Pages deploy |
| Styling | Tailwind CSS | Fast to build, brand tokens map cleanly to CSS variables, already familiar from agent work |
| Content format | Markdown / MDX | Plain text, lives in Git, fits the existing vault workflow |
| Hosting | GitHub Pages | Zero cost, zero ops, native to the existing Git workflow |
| Deployment | GitHub Actions | Standard Astro deploy workflow, runs on push to `main` |
| Domain | `uncledata.github.io` | No DNS to manage, no domain renewal, ships immediately |
| Analytics | None | Script-free site, zero third-party requests |
| Lead capture | `mailto:` links | No backend, no forms, subject-line tagging for triage |

## Repository structure

```
uncledata-site/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Astro build + GitHub Pages deploy
├── public/
│   ├── cv/
│   │   └── tomas-cv.pdf            # Generated, committed for direct linking
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Layout.astro
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── CTA.astro               # Reusable mailto CTA block
│   │   └── PostCard.astro
│   ├── content/
│   │   ├── config.ts               # Astro content collections schema
│   │   ├── posts/                  # Markdown blog posts (canonical source)
│   │   │   └── *.md
│   │   ├── talks/                  # Speaking entries
│   │   │   └── *.md
│   │   └── cv/
│   │       └── cv.yaml             # Structured CV, single source of truth
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro             # Landing
│   │   ├── about.astro             # Bio + CV (rendered from cv.yaml)
│   │   ├── advisory.astro
│   │   ├── consulting.astro
│   │   ├── talks.astro
│   │   ├── podcast.astro
│   │   └── writing/
│   │       ├── index.astro         # Post list
│   │       └── [slug].astro        # Individual post page
│   └── styles/
│       └── global.css              # Tailwind base + brand tokens as CSS variables
├── scripts/
│   └── build-cv-pdf.mjs            # Generates CV PDF from rendered HTML
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## Content model

Astro content collections give you typed, validated content. Three collections:

**`posts`** — blog posts written as markdown, frontmatter schema:
```yaml
title: string
slug: string
description: string
publishedAt: date
substackUrl: string (optional)  # link to canonical Substack version if cross-posted
tags: string[]
draft: boolean
```

**`talks`** — speaking engagements:
```yaml
title: string
event: string                    # "PyCon LT 2026"
date: date
location: string                 # "Vilnius, Lithuania"
type: enum [keynote, talk, panel, workshop]
description: string
slidesUrl: string (optional)
videoUrl: string (optional)
```

**`cv`** — single `cv.yaml` file, structured:
```yaml
summary: string
roles:
  - title: string
    company: string
    start: date
    end: date | "present"
    highlights: string[]
education: [...]
speaking: [...]                  # can be derived from talks collection
writing: [...]                   # selected publications
```

The about page reads `cv.yaml` and renders both the bio prose and a structured CV section. The PDF is generated from the same source.

## Substack relationship

Long-term: site is canonical, Substack is downstream. The flow looks like this:

1. Tomas drafts a post in his `uncledata/notes` vault using the existing ghostwriter pipeline.
2. When ready, the post is moved (or symlinked, or copied via a script) into `src/content/posts/` in this repo.
3. Push to `main` triggers GitHub Actions, site rebuilds, post is live at `uncledata.github.io/writing/post-slug`.
4. The same markdown is cross-posted to Substack — manually for v2, eventually via Substack's API or a small script.
5. The post's frontmatter stores the `substackUrl` once published, and the post page shows a "Also on Substack" link for readers who want to comment or subscribe.

For v2 the cross-post can be manual (copy-paste into Substack's editor). The pipeline integration with the ghostwriter agent is v4.

## Page-by-page technical notes

**Landing (`/`).** Static `.astro` page. Hero with positioning headline and primary CTA. Three or four supporting sections: short bio, recent writing (pulls latest 3 posts from the `posts` collection), recent talks, secondary newsletter CTA. No JS.

**About (`/about`).** Reads `cv.yaml`, renders bio prose at top, structured CV below. Includes a "Download PDF" button linking to `/cv/tomas-cv.pdf`.

**Advisory (`/advisory`).** Static page. What it is, who it's for, how engagements work, FAQ, mailto CTA with subject `Advisory inquiry`.

**Consulting (`/consulting`).** Same shape as advisory, lighter content, mailto CTA with subject `Consulting inquiry`.

**Writing (`/writing`).** Lists all published (non-draft) posts from the `posts` collection, sorted by date.

**Writing post (`/writing/[slug]`).** Dynamic route generated from the `posts` collection at build time. Renders markdown content, shows publish date, links to Substack version if present.

**Talks (`/talks`).** Lists entries from the `talks` collection, grouped by year, with links to slides and video where available.

**Podcast (`/podcast`).** Static page with the Spotify show embed (`<iframe>`). Optionally a manually curated list of standout episodes below the embed.

## Styling and design tokens

Brand tokens defined as CSS custom properties in `src/styles/global.css`, then exposed to Tailwind via `tailwind.config.mjs`:

```css
:root {
  --color-bg-light: #FBF6F3;
  --color-bg-dark: #1A1A2E;
  --color-accent-peach: #f5cdb8;
  --color-accent-coral: #E8845A;
  --color-accent-coral-deep: #C4643C;
  --color-accent-blue: #3B7DD8;
  --font-heading: Georgia, serif;
  --font-body: Calibri, system-ui, sans-serif;
}
```

Tailwind config extends the theme with these tokens so you can use `bg-bg-light`, `text-accent-coral`, `font-heading`, etc. across components without losing the single-source-of-truth property.

Design principles that translate from the slide deck system:
- Card-based layouts with color-coded left accent bars where applicable
- Georgia for headings, Calibri for body
- Generous whitespace, restrained color use
- Coral as the accent for CTAs and highlights, peach as the soft brand color, blue used sparingly

## CV PDF generation

The PDF is generated from the rendered HTML CV page using Playwright in a Node script (`scripts/build-cv-pdf.mjs`):

1. Build the site locally or in CI.
2. Script launches Playwright, navigates to `http://localhost:4321/about` (or a dedicated print-friendly route like `/cv-print`).
3. A print-specific stylesheet hides nav, footer, and CTAs, and applies clean print typography.
4. Playwright calls `page.pdf()` and writes to `public/cv/tomas-cv.pdf`.
5. The PDF is committed to the repo so the GitHub Pages build can serve it directly.

A dedicated `/cv-print` route is cleaner than print CSS on `/about` because it gives you full control over the print layout without leaking print styles into the live page.

The script can run as a pre-commit hook, manually before pushing, or as a step in the GitHub Actions workflow that commits the regenerated PDF back to the repo. For v1, manual is fine.

## Deployment

Standard Astro + GitHub Pages workflow:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Astro config needs `site` and `base` set correctly for GitHub Pages:

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://uncledata.github.io',
  base: '/',  // root domain since the repo is named uncledata.github.io
  // ...
});
```

Naming the repo `uncledata.github.io` (matching the GitHub username/org) means the site is served at the root path, not a subdirectory, so `base` stays `/`.

## Performance and constraints

- **Zero JS by default.** Astro ships no JavaScript unless a component is explicitly marked `client:*`. The current scope has no interactive components, so the entire site should ship as static HTML and CSS.
- **Total page weight under 100KB per page** as a soft target. No webfonts loaded from CDNs (Georgia and Calibri are system fonts on most platforms anyway). Images optimized at build time using Astro's image integration.
- **Build time under 30 seconds** even with 100+ posts. Astro handles this trivially.
- **No third-party requests.** No analytics, no fonts, no embeds except Spotify on the podcast page (which only loads on that one page).

## Phased build plan

**v1 — landing, advisory, about**
- Repo scaffolded, Astro + Tailwind configured, brand tokens wired up
- `Layout`, `Nav`, `Footer`, `CTA` components built
- Landing page written and styled
- Advisory page written and styled
- About page reads `cv.yaml`, renders bio + structured CV
- GitHub Actions deploy workflow live, site reachable at `uncledata.github.io`
- Goal: shipped in a weekend or two of evening work

**v2 — writing**
- `posts` content collection schema defined
- 5–10 existing Substack posts copied into `src/content/posts/` as markdown
- Writing index and dynamic post pages built
- Latest-posts section added to landing page
- CV PDF generation script built and run for the first time

**v3 — talks, consulting, podcast**
- `talks` content collection populated with PyCon LT, Big Data Europe, Data & Donuts entries
- Talks page built
- Consulting page written
- Podcast page with Spotify embed
- Newsletter CTA UTM tagging finalized so signups can be attributed

**v4 — pipeline integration**
- Script or subagent to move drafts from the `uncledata/notes` vault into `src/content/posts/`
- Optional: Substack API cross-posting from the same source
- Optional: automated CV PDF regeneration in CI

## Open questions

- **CV print route vs print stylesheet on `/about`.** Recommended: dedicated `/cv-print` route, but the tradeoff is one more page to maintain. Confirm before building.
- **Image hosting.** Post images: committed to the repo under `public/images/` (simple, slow if the site grows large), or hosted externally? For v2 with a handful of posts, committing is fine.
- **RSS feed for the writing section.** Astro generates one trivially. Worth doing for v2 even though Substack is the primary email channel — some readers will want to subscribe via RSS.
- **404 page.** Custom or default? Easy to add a branded one in v1, low priority.