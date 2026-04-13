# Stage 1: Landing Page + Advisory Page

**Goal:** Build the two most important pages on the site. The landing page positions Tomas as a fractional data leader. The advisory page closes the loop with a detailed offering page.

**Branch:** `feature/site-redesign-astro`
**Depends on:** Stage 0 (foundation must be complete)

## Context

Read `specs/content-spec.md` sections "Page 1: Landing" and "Page 2: Advisory" for the full content direction. Voice profile is at `/Users/tomaspeluritis/projects/ghost-writter/voice_profiles/en.md`. Also read `vault/career/consulting-positioning.md` and `vault/writing/uncle-data-brand.md` in the ghost-writter project for positioning context.

**Email for all CTAs:** `tomas.peluritis@gmail.com`

## Landing page (`src/pages/index.astro`)

### Structure (from content-spec)

1. **Hero section**
   - Headline: "Fractional Head of Data for companies that need senior data leadership without the full-time hire."
   - Subhead: one sentence that earns the headline. Draft in Tomas's voice (direct, no hype, no corporate speak). Something like: "I help small companies build the data foundations that make everything else, hiring, AI, growth, actually work."
   - Primary CTA button: "Email me about advisory" -> `mailto:tomas.peluritis@gmail.com?subject=Advisory inquiry`
   - Secondary link: "Read Uncle Data" -> `https://uncledata.substack.com/?utm_source=site&utm_medium=cta&utm_campaign=landing`
   - No hero image. No animation. Just words and whitespace.

2. **Proof bar**
   - Single horizontal row, text only, no graphics
   - Content: "Head of Data at Mediatech. PyCon LT 2026 keynote. Uncle Data newsletter and podcast. Previously Wix, kevin., HomeToGo."
   - No subscriber/listener counts. The venues do the talking.

3. **What I do (3 paragraphs)**
   - Prose, not bullets. Each paragraph answers one question:
     - What does fractional advisory actually mean in practice?
     - Who is this for?
     - Why me?
   - Write in Tomas's voice. Direct, experienced, slightly dry. No em dashes. No corporate speak. Read the voice profile before drafting.

4. **Recent talks section**
   - Header: "Recent talks"
   - Show 2-3 most recent talks as cards (title, event, date, one-line description)
   - Pull from the existing talk data. The current talks on the site:
     - Tech Debt (PyCon LT 2026)
     - Beyond dbt (Big Data Europe 2025)
     - DE vs SWE (Dev Tech 2025)
   - Link each to its talk page (these will be migrated in Stage 4, link to `/talks/slug` for now)

5. **CTA block**
   - Use the reusable `<CTA />` component with default subject "Advisory inquiry"

### Design notes

- Background: warm off-white (`#FBF6F3`)
- Coral (`#E8845A`) for primary CTA buttons
- Georgia headings, Calibri body
- Generous whitespace. Restrained color use.
- No card-heavy layout. Prose sections should feel like reading, not browsing a dashboard.

## Advisory page (`src/pages/advisory.astro`)

### Structure (from content-spec)

1. **Headline:** "Fractional advisory for small companies that need their data foundations to actually work."

2. **What this is (2-3 paragraphs)**
   - Shape of an engagement: async-first, monthly deep-dive sessions (in person or video), occasional full days for concentrated attention
   - What advisory means in practice: review architecture, team, priorities, propose changes, stick around to see them land
   - Open-ended length (not a three-month box)

3. **Who this is for (3-4 paragraphs, prose, not a checklist)**
   - Small companies, not enterprise
   - Companies wanting AI but needing basics first
   - Companies where the data lead is good but isolated
   - NOT for: companies wanting a contractor to write code, wanting team management, wanting audit-and-leave (those go to `/consulting`)

4. **How an engagement works (3 subsections)**
   - *Cadence:* async-first, monthly deep-dive, full days available
   - *Scope:* architecture, hiring, prioritization, team structure reviews
   - *What I don't do:* manage the team, write production code, sell AI before basics are in place

5. **How to start (1 paragraph)**
   - "Email me with a few sentences about your company, your current data setup, and what's bothering you. If it sounds like a fit, we get on a call. If it doesn't, I'll tell you and probably point you toward someone who's better suited."

6. **Link to consulting**
   - Small note: "Looking for a scoped, project-based engagement instead? See [consulting](/consulting)."
   - This is how consulting is reachable without being in the nav.

7. **CTA block**
   - `<CTA subject="Advisory inquiry" />`

### Voice notes

This page does the most work. It needs to sound like Tomas, not a consultancy website. The "what I don't do" section is the biggest credibility signal. Name actual things. Be specific enough that the wrong reader self-disqualifies.

## Files created/modified

```
src/pages/index.astro        # full landing page
src/pages/advisory.astro     # advisory offering page
```

## Verification

- [ ] Landing page renders with hero, proof bar, three prose paragraphs, recent talks, CTA
- [ ] Advisory page renders with all sections
- [ ] No em dashes anywhere in the prose
- [ ] Primary CTA buttons link to `mailto:tomas.peluritis@gmail.com?subject=Advisory inquiry`
- [ ] "Read Uncle Data" link has UTM parameters
- [ ] Pages use the shared Layout/Nav/Footer components
- [ ] Prose sounds like Tomas, not like a brochure (read out loud to check)
- [ ] No subscriber/listener/follower counts anywhere
