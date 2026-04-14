# Uncle Data site — working agreement for Claude Code

Astro + Tailwind static site deployed via GitHub Pages. Content-first, zero JS shipped by default. Brand tokens defined as CSS custom properties, wired into Tailwind config.

Full specs live in `specs/` (product-spec.md, content-spec.md, tech-spec.md). Staged implementation plan in `stages/`. Read the relevant stage file before starting work.

## Hard rules

1. **Never commit. Never push. Never merge.** Stop at "here are the changed files, here is a diff, please review." The human reviews and commits manually.
2. **Never run `git push`, `git commit`, `gh pr create`, or any destructive git command.** You may run `git status`, `git diff`, `git log`, and `git checkout -b` to create a working branch.
3. **Always work on a branch**, never on `main`. Branch naming: `talk/<slug>` for talk pages, `feature/<slug>` for site changes.
4. **Ask before assuming.** If you don't have metadata (event, date, abstract, video URL), ask. Do not invent dates, venues, or quotes.

## Stack

- **Framework:** Astro (content-first, ships zero JS by default)
- **Styling:** Tailwind CSS with brand tokens as CSS custom properties
- **Content:** Markdown/MDX in Astro content collections where applicable
- **Hosting:** GitHub Pages via GitHub Actions (`withastro/action@v3`)
- **Lead capture:** `mailto:` links with subject-line tagging (no forms, no backend)
- **Analytics:** None. Zero third-party requests (except Spotify iframe on podcast page)

## Brand tokens

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

Background: warm off-white (#FBF6F3). Coral for CTAs. Georgia headings, Calibri body. No webfonts.

## Site structure

**Nav:** Home / Advisory / Writing / Talks / Podcast / About
Consulting is reachable from the advisory page footer, not the main nav.

**Pages:**
- `/` — Landing: fractional data leader positioning, proof bar, "what I do" prose, recent talks, advisory CTA
- `/advisory` — Primary offering page. What it is, who it's for, how to start.
- `/writing` — Post index linking to Substack. Subscribe nudge at bottom.
- `/talks` — Talk list grouped by year. Speaking inquiry CTA at bottom.
- `/podcast` — Spotify embed. Subscribe-elsewhere links.
- `/about` — Long-form narrative bio + structured CV (merged from old about + cv pages). Download CV button.
- `/consulting` — Lightweight scoped-project page. Steers toward advisory.

**Footer:** "Fractional data leadership, written from experience." + Substack link + LinkedIn link + copyright. No social icons array.

**Reusable CTA block:** "Looking for a fractional data leader? Email me." with `mailto:tomas.peluritis@gmail.com?subject={subject}`. Appears on landing, advisory, about, and consulting pages. Subject varies by page.

**Mailto subjects:**
- `Advisory inquiry` — landing, advisory, about pages
- `Consulting inquiry` — consulting page
- `Speaking inquiry` — talks page

## Voice and writing rules

- No em dashes. Ever. Use commas, parentheses, or two sentences.
- No corporate speak. No "leverage," "unlock," "delve," "navigate the landscape," "in today's fast-paced world."
- No AI tells: "delve," "tapestry," "it's worth noting," "in conclusion," "fascinating," "certainly," "robust," "streamline," "game-changer."
- Simple over smart. Short sentences. Concrete over abstract.
- Write like Tomas writes on Uncle Data: direct, experienced, slightly dry, no hype. Voice profile at `/Users/tomaspeluritis/projects/ghost-writter/voice_profiles/en.md`.
- Prose over bullets where possible. Flowing paragraphs, not staccato lists.
- No vanity numbers. No subscriber counts, listener counts, view counts, team sizes. The work and the venues are the credibility.
- Speaker notes from the deck are the source of truth for talk pages. Paraphrase them, don't rewrite them into something fancier.

## File layout

```
src/
  components/
    Nav.astro           # Side-sliding burger menu on mobile, horizontal on desktop
    Footer.astro        # Tagline + Substack + LinkedIn + copyright
    CTA.astro           # Reusable mailto CTA block
  layouts/
    BaseLayout.astro    # Wraps all pages with Nav + Footer
  pages/
    index.astro         # Landing
    advisory.astro
    about.astro         # Bio + CV (merged)
    consulting.astro
    talks.astro         # or talks/index.astro
    talks/[slug].astro  # Individual talk pages
    writing.astro
    podcast.astro
  content/
    talks/*.md          # Talk entries (optional content collection)
  styles/
    global.css          # Tailwind base + brand tokens
public/
  images/               # Logo, photo, social icons
  talks/pdfs/           # Exported slide decks
  cv/tomas-cv.pdf       # CV download (when generated)
```

Slug format: lowercase, hyphenated, descriptive. Examples: `tech-debt-pycon-lt-2026`, `airflow-war-stories`.

## What a talk page contains

- Talk title as page title
- Event name + date + location
- 2-3 sentence abstract
- "Download slides (PDF)" button linking to the committed PDF
- Section summaries: walk through the deck's main sections in prose, not a slide-by-slide dump
- Key takeaways at the end
- Shared Layout (Nav + Footer)

No video embeds unless a YouTube URL is provided.

## Review checklist before handing back to the human

- [ ] Page renders correctly when opened locally (`npm run dev`)
- [ ] Nav matches spec: Home / Advisory / Writing / Talks / Podcast / About
- [ ] Footer matches spec: tagline + Substack + LinkedIn + copyright
- [ ] No em dashes anywhere in prose
- [ ] No AI tells in prose
- [ ] No vanity numbers (subscriber/listener counts)
- [ ] PDF links work (file exists at the path)
- [ ] All mailto links use `tomas.peluritis@gmail.com` with correct subject
- [ ] Background is warm off-white (#FBF6F3)
- [ ] `git status` shows only the expected files
- [ ] You have NOT committed or pushed anything
