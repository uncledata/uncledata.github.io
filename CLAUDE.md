# Uncle Data site — working agreement for Claude Code

This is a hand-rolled static HTML site deployed via GitHub Pages. No build step, no framework, no JS framework. Just HTML + CSS + images.

## Hard rules

1. **Never commit. Never push. Never merge.** Stop at "here are the changed files, here is a diff, please review." The human reviews and commits manually.
2. **Never run `git push`, `git commit`, `gh pr create`, or any destructive git command.** You may run `git status`, `git diff`, `git log`, and `git checkout -b` to create a working branch.
3. **Always work on a branch**, never on `main`. Branch naming: `talk/<slug>` for talk pages, `feature/<slug>` for site changes.
4. **Match the existing site's HTML structure, CSS classes, and visual style exactly.** Read `index.html`, `about.html`, `consulting.html`, and `cv.html` before writing any new page. Reuse existing CSS classes. Do not introduce new CSS files unless explicitly asked. If new styles are needed, add them to the existing stylesheet in the same conventions already in use.
5. **Ask before assuming.** If you don't have the talk metadata (event, date, abstract, video URL), ask. Do not invent dates, venues, or quotes.

## Voice and writing rules (for any prose you generate on talk pages)

- No em dashes. Ever. Use commas, parentheses, or two sentences.
- No corporate speak. No "leverage," "unlock," "delve," "navigate the landscape," "in today's fast-paced world."
- Simple over smart. Short sentences. Concrete over abstract.
- Write like Tomas already writes on Uncle Data: direct, experienced, slightly dry, no hype.
- Speaker notes from the deck are the source of truth. Paraphrase them, don't rewrite them into something fancier.
- No AI tells. If a sentence sounds like an LLM wrote it, rewrite it.

## File layout for talks

```
talks.html                          # index page listing all talks
talks/
  <slug>.html                       # one page per talk
  pdfs/
    <slug>.pdf                      # exported deck, committed to repo
```

Slug format: lowercase, hyphenated, descriptive. Examples: `tech-debt-pycon-lt-2026`, `airflow-war-stories`, `snowflake-cost`.

## Nav update rule

When adding the Talks section, the "Talks" link must be added to the nav of every existing HTML page (`index.html`, `about.html`, `cv.html`, `consulting.html`) in the same position across all pages. Insert it between "About" and "CV" unless told otherwise.

## What a talk page contains

- Page title and meta tags matching the site's existing pattern
- Same header (logo + nav) as other pages
- Talk title
- Event name + date + location
- 2-3 sentence abstract
- "Download slides (PDF)" button linking to the committed PDF
- Section summaries: walk through the deck's main sections in prose, telling the war stories properly. Not a slide-by-slide dump. Group related slides into a coherent narrative.
- Key takeaways at the end (the deck usually has these explicitly)
- Same footer as other pages

No video embeds unless a YouTube URL is provided.

## Review checklist before handing back to the human

- [ ] Page renders correctly when opened locally in a browser
- [ ] Nav matches other pages exactly
- [ ] No em dashes anywhere in prose
- [ ] PDF link works (file exists at the path)
- [ ] No new CSS files, no new dependencies, no JS framework
- [ ] `git status` shows only the expected files
- [ ] You have NOT committed or pushed anything
