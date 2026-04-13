# Stage 5: Writing Index + Podcast Page

**Goal:** Create the Writing page (index linking to Substack posts) and the Podcast page (Spotify embed). These are the lighter pages that round out the site.

**Branch:** `feature/site-redesign-astro`
**Depends on:** Stage 0 (foundation must be complete)

## Context

Read `specs/content-spec.md` sections "Page 4: Writing" and "Page 6: Podcast" for full direction.

For v1, the Writing page links out to Substack rather than hosting post content locally. The spec's content-collection approach (markdown posts in the repo) is a future improvement.

## Writing page (`src/pages/writing.astro`)

### Structure

1. **Headline:** "Writing." (or longer: "Writing on data engineering, leadership, and the parts of the job nobody talks about.")

2. **One-line intro**
   - "Posts on data engineering, leadership, and the things they don't put in the docs. Most of these are also on the Uncle Data Substack, which is where the comments and discussion live."

3. **Post list**

   For v1, a manually curated list of posts linking out to Substack. Each entry: title (linked to Substack URL), date, one-line description.

   To populate this, check the ghost-writter project for published posts:
   - `/Users/tomaspeluritis/projects/ghost-writter/published/` has published content
   - Substack URL pattern: `https://uncledata.substack.com/p/<slug>`

   Also check the Substack directly for the full post archive. Include at least 5-10 representative posts. If the full list isn't available, include what you can find and flag it as needing Tomas to fill in.

   Sorted newest first. No pagination needed yet.

4. **Subscribe nudge (at the bottom, not the top)**
   - "Want these in your inbox? Subscribe on Substack."
   - Link: `https://uncledata.substack.com/?utm_source=site&utm_medium=cta&utm_campaign=writing`

### CTA note

This is the one page where the CTA is NOT "email about advisory." Readers here are in reading mode, not buying mode. The subscribe nudge replaces the reusable CTA block.

## Podcast page (`src/pages/podcast.astro`)

### Structure

1. **Headline:** "The Uncle Data podcast."

2. **One-line intro**
   - Something like: "Conversations with people who actually do the work of building and running data teams. New episodes irregularly."
   - Keep it honest about cadence.

3. **Spotify show embed**
   - Full-show iframe from Spotify
   - Current Spotify link: `https://podcasters.spotify.com/pod/show/duomenu-dede`
   - The embed iframe URL will be something like:
     ```html
     <iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/SHOW_ID" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
     ```
   - Need to find the correct Spotify show ID. Check the current podcast link or ask Tomas for the embed code.
   - This is the only third-party script/iframe on the entire site.

4. **Subscribe-elsewhere line**
   - "Also on Apple Podcasts and wherever you listen."
   - With links to Apple Podcasts (if URL is known) and Spotify

### CTA note

Primary CTA on this page: listen to the podcast. Secondary: subscribe to Uncle Data newsletter. No advisory CTA on this page.

### Voice notes

Don't write a podcast manifesto. Embed, list, link, done.

## Files created/modified

```
src/pages/writing.astro
src/pages/podcast.astro
```

## Open questions for Tomas

- [ ] Full list of Substack posts with titles, dates, and slugs (for the writing page)
- [ ] Spotify show embed code or show ID (for the podcast iframe)
- [ ] Apple Podcasts URL (for the subscribe-elsewhere line)
- [ ] Any standout podcast episodes to feature? (spec says optional)

## Verification

- [ ] Writing page lists posts with links to Substack
- [ ] Subscribe link has UTM parameters
- [ ] No advisory CTA on writing or podcast pages
- [ ] Podcast page has Spotify embed (or placeholder if embed code not yet available)
- [ ] No em dashes in prose
- [ ] Both pages use shared Layout/Nav/Footer
