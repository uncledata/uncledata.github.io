# Stage 2: About + CV (Merged)

**Goal:** Replace the separate about.html and cv.html with a single `/about` page that has a long-form narrative bio at the top and a structured CV section below.

**Branch:** `feature/site-redesign-astro`
**Depends on:** Stage 0 (foundation must be complete)

## Context

Read `specs/content-spec.md` section "Page 3: About" for the full content direction. Voice profile at `/Users/tomaspeluritis/projects/ghost-writter/voice_profiles/en.md`.

The current `cv.html` has structured career data that should be reused. The current `about.html` has generic card-based content ("Continuous Learning", "Adaptability", etc.) that should be completely replaced.

**Email for CTAs:** `tomas.peluritis@gmail.com`

## About page (`src/pages/about.astro`)

### Structure

1. **Opening (no marketing headline)**
   - "Tomas Peluritis" as heading
   - Subtitle: "Head of Data, writer, fractional advisor."
   - Photo (`images/Me.jpeg`) alongside the name, similar to the current about page but cleaner

2. **Bio (800-1500 words, narrative, first person)**

   This is the hardest part of the page because it needs to sound like Tomas, not an LLM. Draft it, but flag it clearly as needing his review and rewrite.

   Sections to cover (in flowing narrative, not as labeled sections):
   - *Where you are now:* Head of Data at Mediatech (data engineering, science, analytics team). Advisory practice. Uncle Data newsletter and podcast.
   - *How you got here:* The path through Wix (data developer, then team lead of ~14), HomeToGo (senior DE / team lead, Redshift-to-Snowflake migration), kevin. (Head of Data, built the data platform from scratch), back to Wix as DE, then Mediatech as Head of Data. Not a chronological list, a story. What you learned at each place.
   - *What you believe about this work:* Simple over smart. Most data problems are organizational, not technical. Translating technical work into business language is the entire job of a data leader.
   - *Uncle Data and why it exists:* Newsletter and podcast. Why you started writing publicly. No subscriber/listener counts.
   - *Speaking and community:* PyCon LT (four times, including 2026 keynote), Big Data Europe, PyData Vilnius, Dev Tech. Extension of the writing.
   - *Outside work:* Vilnius, family, Magic: The Gathering, 3D printer.
   - *Closing line.*

   **Voice reminders:** No em dashes. No "delve", "navigate", "landscape". Self-deprecation welcome. Specific anecdotes over capability statements. If a paragraph could appear on someone else's site, rewrite it.

3. **Structured CV section**

   Below the bio. Reuse the career data from the current `cv.html`:

   **Current role:**
   - Head of Data, Mediatech (Nov 2024 - present)

   **Prior roles:**
   - Data Engineer, Wix (Aug 2023 - Oct 2024)
   - Head of Data, kevin. (Mar 2022 - Jun 2023)
   - Senior Data Engineer / Team Lead, HomeToGo (Jun 2021 - Mar 2022)
   - Data Engineering Team Lead, Wix (Feb 2020 - Jun 2021)
   - Data Developer, Wix (Sep 2018 - Feb 2020)
   - Earlier roles: Visma Lietuva, SEB, Finance Engineering, Seesam Insurance

   **Selected speaking:**
   - Auto-list from talks already on the site (7 talks spanning 2023-2026)

   **Skills as tags (reuse from current cv.html):**
   Data Engineering, Technical Leadership, SQL, Python, PySpark, Airflow, Snowflake, Redshift, dbt, CI/CD, Mentoring

   **Uncle Data:**
   - Newsletter and podcast, present

4. **Download CV button**
   - Links to `/cv/tomas-cv.pdf` (placeholder for now, PDF generation is a later concern)
   - Quiet, not flashy

5. **CTA block**
   - `<CTA subject="Advisory inquiry" />`

### Design notes

- Bio section: generous line height, max-width for readability (~65-70 characters per line)
- CV section: clean, structured, minimal. Left-aligned dates, role titles prominent.
- Photo: rounded, not too large, alongside the name at the top

## Files created/modified

```
src/pages/about.astro
```

## What happens to old pages

- `about.html` -> content replaced entirely, old file stays until Stage 6
- `cv.html` -> content merged into about, old file stays until Stage 6

## Verification

- [ ] Bio reads as narrative, not a list of achievements
- [ ] No em dashes in the prose
- [ ] CV section has all roles from current cv.html
- [ ] Photo renders properly
- [ ] Download CV button present (can be placeholder link)
- [ ] CTA block at bottom with correct mailto
- [ ] Page uses shared Layout/Nav/Footer
