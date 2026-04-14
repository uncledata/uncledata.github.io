# Stage 6: Deploy + Cleanup

**Goal:** Set up GitHub Actions for Astro deployment, remove old HTML files, and do a final review pass.

**Branch:** `feature/site-redesign-astro`
**Depends on:** All previous stages (0-5) must be complete

## Tasks

### 1. GitHub Actions deploy workflow

Create `.github/workflows/deploy.yml`:

```yaml
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

### 2. Astro config for GitHub Pages

Verify `astro.config.mjs` has:
```js
export default defineConfig({
  site: 'https://uncledata.github.io',
  base: '/',
});
```

### 3. Remove old HTML files

Once all Astro pages are confirmed working, remove:
- `index.html`
- `about.html`
- `consulting.html`
- `cv.html`
- `talks.html`
- `talks/*.html` (7 individual talk pages)

Keep:
- `images/` directory (move to `public/images/` if not already there)
- `talks/pdfs/` directory (move to `public/talks/pdfs/` if not already there)
- `specs/` directory
- `stages/` directory
- `CLAUDE.md` (updated in earlier stage)

### 4. Move static assets to `public/`

Astro serves static files from `public/`. Ensure:
- `public/images/` has all images (logo.png, Me.jpeg, linkedin.png, github.png, substack.png, spotify.png)
- `public/talks/pdfs/` has all talk PDFs
- `public/favicon.svg` exists (can derive from logo)

### 5. Final review checklist

**Every page:**
- [ ] Renders correctly in browser (desktop and mobile)
- [ ] Nav shows: Home / Advisory / Writing / Talks / Podcast / About
- [ ] Burger menu works on mobile (side-sliding)
- [ ] Footer shows: tagline + Substack link + LinkedIn link + copyright
- [ ] No em dashes anywhere
- [ ] No "delve", "leverage" (non-technical), "navigate the landscape", etc.
- [ ] No subscriber/listener/follower counts
- [ ] Background is warm off-white (#FBF6F3)
- [ ] Georgia headings, Calibri body

**Page-specific:**
- [ ] Landing: hero + proof bar + 3 prose paragraphs + recent talks + CTA
- [ ] Advisory: full offering page + CTA (subject: Advisory inquiry)
- [ ] About: narrative bio + structured CV + download CV button + CTA
- [ ] Consulting: short page + CTA (subject: Consulting inquiry) + link to advisory
- [ ] Talks: grouped by year + speaking inquiry CTA (subject: Speaking inquiry)
- [ ] Writing: post list with Substack links + subscribe nudge
- [ ] Podcast: Spotify embed + subscribe-elsewhere links

**Technical:**
- [ ] `npm run build` succeeds without errors
- [ ] No JS shipped except burger menu toggle
- [ ] No third-party requests except Spotify iframe on podcast page
- [ ] All internal links work
- [ ] All PDF download links work
- [ ] All mailto links have correct email and subject
- [ ] `git status` shows expected files only

### 6. Prepare for merge

- The human reviews everything and manually commits/pushes
- Do NOT commit, push, or create a PR
- Provide a summary of all changed files and a diff

## Files created/modified

```
.github/workflows/deploy.yml
astro.config.mjs              # verify site/base settings
```

## Files removed (after confirmation)

```
index.html
about.html
consulting.html
cv.html
talks.html
talks/tech-debt-pycon-lt-2026.html
talks/beyond-dbt-big-data-europe-2025.html
talks/de-vs-swe-dev-tech-2025.html
talks/data-lineage-pydata-vilnius-2024.html
talks/write-audit-publish-pycon-lt-2024.html
talks/why-not-dagster-pydata-vilnius-2023.html
talks/airflow-end-pycon-lt-2023.html
```
