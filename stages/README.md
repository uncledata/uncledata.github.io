# Site Redesign: Staged Plan

Each stage is a self-contained chunk of work. You can hand any stage file to Claude Code in a new conversation and it has everything needed to execute that stage independently.

**Branch:** `feature/site-redesign-astro`
**Email for all CTAs:** `tomas.peluritis@gmail.com`
**Footer tagline:** "Fractional data leadership, written from experience."
**Voice reference:** `/Users/tomaspeluritis/projects/ghost-writter/voice_profiles/en.md`

## Stages

| Stage | Name | What it does | Depends on |
|-------|------|-------------|------------|
| 0 | [Foundation](stage-0-foundation.md) | Astro scaffold, Tailwind, brand tokens, Layout/Nav/Footer/CTA components | Nothing |
| 1 | [Landing + Advisory](stage-1-landing-advisory.md) | Rewrite index page, create advisory page | Stage 0 |
| 2 | [About + CV](stage-2-about-cv.md) | Merge about + CV into one page with narrative bio | Stage 0 |
| 3 | [Consulting](stage-3-consulting.md) | Rewrite consulting as lightweight, advisory-steering page | Stage 0 |
| 4 | [Talks](stage-4-talks.md) | Enhance talks page: year grouping, speaking CTA, migrate existing talk pages | Stage 0 |
| 5 | [Writing + Podcast](stage-5-writing-podcast.md) | New writing index (links to Substack), podcast page with Spotify embed | Stage 0 |
| 6 | [Deploy + Cleanup](stage-6-deploy-cleanup.md) | GitHub Actions workflow, remove old HTML files, final review | All above |

Stages 1-5 can be done in any order after Stage 0. Stage 6 is last.
