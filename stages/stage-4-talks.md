# Stage 4: Talks Page Enhancement + Talk Detail Migration

**Goal:** Migrate the existing talks page and all 7 individual talk pages to Astro. Add year grouping and a speaking inquiry CTA.

**Branch:** `feature/site-redesign-astro`
**Depends on:** Stage 0 (foundation must be complete)

## Context

Read `specs/content-spec.md` section "Page 5: Talks" for content direction.

The current talks page (`talks.html`) and 7 individual talk pages (`talks/*.html`) are already in good shape, content-wise. This stage is mostly a migration to Astro with a few enhancements.

**Email for CTA:** `tomas.peluritis@gmail.com`

## Talks index (`src/pages/talks.astro`)

### Current state (keep)

The existing `talks.html` has a clean list of 7 talks with title, event, date, location, and one-line description. This content is good. Migrate it.

### Enhancements

1. **One-line intro at top**
   - "I've been speaking at PyCon Lithuania for four years now and at a few other places along the way. Slides and recordings where they exist."

2. **Group talks by year**
   - 2026: Tech Debt (PyCon LT 2026)
   - 2025: Beyond dbt (Big Data Europe 2025), DE vs SWE (Dev Tech 2025)
   - 2024: Data Lineage (PyData Vilnius 2024), Write-Audit-Publish (PyCon LT 2024)
   - 2023: Why Not Dagster (PyData Vilnius 2023), Is It the End for Apache Airflow? (PyCon LT 2023)
   - Year headers as section dividers

3. **Speaking inquiry CTA at bottom**
   - "Conference organizers: I'm always happy to hear about events. Email me."
   - `mailto:tomas.peluritis@gmail.com?subject=Speaking inquiry`
   - Quiet, not a big CTA block. Just a line with a link.

### Content collection (optional but recommended)

If setting up an Astro content collection for talks:

```
src/content/talks/
  tech-debt-pycon-lt-2026.md
  beyond-dbt-big-data-europe-2025.md
  de-vs-swe-dev-tech-2025.md
  data-lineage-pydata-vilnius-2024.md
  write-audit-publish-pycon-lt-2024.md
  why-not-dagster-pydata-vilnius-2023.md
  airflow-end-pycon-lt-2023.md
```

Frontmatter schema:
```yaml
title: string
event: string
date: date
location: string
type: keynote | talk    # Tech Debt 2026 is keynote, rest are talks
description: string
slidesUrl: string       # path to PDF in public/talks/pdfs/
videoUrl: string        # optional
```

The index page queries this collection, groups by year, and renders cards.

If this feels like too much infrastructure for 7 talks, hardcoding the data in the `.astro` file is fine too. The content collection pays off when there are 15+ talks.

## Individual talk pages

The 7 existing talk pages (`talks/*.html`) contain detailed writeups with section summaries, key takeaways, and PDF download links. These are valuable content.

### Migration approach

Option A (simpler): Create `src/pages/talks/[slug].astro` pages, one per talk, copying the body content from the existing HTML files into Astro markup. Keep the same URLs.

Option B (content collection): Put the prose content into the markdown files in `src/content/talks/` and render them with a dynamic `[...slug].astro` route. This is cleaner long-term but more work now.

Either way, each talk detail page should have:
- Talk title as page title
- Event name, date, location
- The existing prose content (section summaries, key takeaways)
- "Download slides (PDF)" button linking to `talks/pdfs/<slug>.pdf`
- Back link to `/talks`
- Shared Layout/Nav/Footer

### Existing talk page files to migrate

```
talks/tech-debt-pycon-lt-2026.html
talks/beyond-dbt-big-data-europe-2025.html
talks/de-vs-swe-dev-tech-2025.html
talks/data-lineage-pydata-vilnius-2024.html
talks/write-audit-publish-pycon-lt-2024.html
talks/why-not-dagster-pydata-vilnius-2023.html
talks/airflow-end-pycon-lt-2023.html
```

### PDF files (keep in place)

The PDFs should be in `public/talks/pdfs/` so they're served as static files. Check if they currently exist at `talks/pdfs/` and move them to `public/talks/pdfs/` if needed.

## Files created/modified

```
src/pages/talks.astro           # or src/pages/talks/index.astro
src/pages/talks/[slug].astro    # if using dynamic routes
  OR
src/pages/talks/*.astro         # one per talk if hardcoding
public/talks/pdfs/*.pdf         # move existing PDFs here
```

## Verification

- [ ] Talks index shows all 7 talks grouped by year (2026, 2025, 2024, 2023)
- [ ] One-line intro at top matches spec
- [ ] Speaking inquiry CTA at bottom with correct mailto subject
- [ ] Each talk detail page renders with full prose content from old HTML
- [ ] PDF download links work
- [ ] URLs match old structure (`/talks/tech-debt-pycon-lt-2026` etc.)
- [ ] No em dashes in any prose
- [ ] Pages use shared Layout/Nav/Footer
