# Product Spec: Personal Site & Portfolio

**Owner:** Tomas
**Status:** Draft v1
**Last updated:** April 2026

## Positioning statement

A personal site for Tomas, Head of Data and creator of Uncle Data, that serves as the canonical home for his professional identity. The site exists primarily to convert qualified inbound interest into fractional and advisory engagements, and secondarily to grow the Uncle Data audience by giving readers a single place to find his writing, podcast, and CV.

The site is fully merged with the Uncle Data brand. Uncle Data is the credibility engine; the site is where that credibility converts into business outcomes.

## Audiences

**Primary: Companies evaluating Tomas for a fractional or advisory role.**
A CTO, VP Engineering, or founder who has read an Uncle Data post, heard the podcast, or been referred by a peer, and is now checking whether Tomas is real, credible, and available. They need to walk away believing he can help them, knowing what an engagement looks like, and having a low-friction way to start a conversation.

**Secondary: Data practitioners who follow Uncle Data.**
Engineers, leads, and analytics folks who want to read the latest post, find a specific old post, or subscribe to the newsletter and podcast. They are the audience that creates the credibility that serves audience one.

**Explicitly not optimizing for:** recruiters sourcing for full-time roles, students looking for tutorials, or one-off consulting buyers shopping on price.

## Goals

1. Generate qualified advisory inbound. The site should make it obvious that fractional/advisory is the primary offering and make it trivial to start a conversation.
2. Grow the Uncle Data newsletter. Every page should give a reader a reason and a way to subscribe.
3. Centralize professional identity. One URL Tomas can give to anyone — clients, conference organizers, podcast hosts — that answers "who is this person and what do they do."
4. Serve as an evergreen, always-current CV.

## Non-goals

- **Not a CMS.** Content lives in Git, not in a database or admin panel.
- **Not a Substack replacement.** Substack remains the primary publishing and email distribution channel. The site mirrors or links to that content; it does not try to replace it.
- **Not a consulting marketplace.** Consulting is a rare, exception-based offering. The site should not foreground it or make it look like a productized service.
- **Not a contact form / CRM / booking system.** Lead capture is a `mailto:` link. No forms, no Calendly, no backend.
- **Not a design showcase.** The site should look professional and on-brand, but it is not a portfolio of design work. Restraint over flourish.
- **Not feature-complete on day one.** The site ships in slices and grows over time.

## Offerings

**Advisory (primary).** Ongoing, fractional engagements. Tomas works with a company's data leadership on a recurring basis — strategy, hiring, architecture review, team coaching. Engagements are measured in months, not deliverables.

**Consulting (rare exception).** Project-based, defined-scope engagements where Tomas does the work directly. Examples: Snowflake cost audit, dbt migration review, Airflow stabilization. The site mentions this exists but does not promote it as a primary path.

## Content surfaces

1. **Landing page.** Hero positioning Tomas as a fractional data leader, social proof (Uncle Data reach, conference talks, prior roles), primary CTA to start an advisory conversation, secondary CTA to subscribe.
2. **About / CV.** Long-form bio in Tomas's voice, structured CV section, downloadable PDF version.
3. **Advisory.** What it is, who it's for, how engagements work, how to start one.
4. **Consulting.** Lighter page. What it is, when it makes sense, how to inquire.
5. **Writing.** Index of blog posts mirrored from or synced with Substack, individual post pages.
6. **Podcast.** Spotify embed of the Uncle Data podcast, episode list.
7. **Contact.** Likely just a CTA block reused across pages rather than a dedicated page.

## Lead capture

A `mailto:` link with a pre-filled subject line. Different CTAs across the site can use different subjects (e.g. `Advisory inquiry`, `Consulting inquiry`, `Speaking inquiry`) so Tomas can triage in his inbox without needing a form or backend.

## Success metrics (6 months)

- **At least 100 newsletter signups attributable to the site.** Measured via a tagged Substack signup link or a UTM parameter.
- **Qualified advisory inbound.** Concrete probes from real companies, not just curiosity emails. Target: enough volume to fill or selectively decline.
- **One signed advisory engagement** sourced through the site would validate the whole effort.

## Constraints and principles

- **Static site, hosted on GitHub Pages.** Zero infrastructure, zero cost, fits Tomas's existing Git-based workflows.
- **Built incrementally, on the side.** No deadline pressure. Ship a usable v1 fast, then add surfaces over time.
- **Voice rules apply everywhere.** No em dashes, no AI-sounding filler, flowing prose over bullets, direct and self-deprecating tone. The site copy is held to the same standard as Uncle Data posts.
- **Content lives in the same vault as everything else.** The site should plug into the existing `uncledata/notes` workflow, not become a separate content silo.
- **Restraint in design.** Brand colors and typography from the existing presentation design system. No animations for animation's sake. The site should look like it was made by someone who has opinions, not someone showing off.

## Phased rollout

**v1 (ship first, ideally in a weekend or two of evening work):**
- Landing page with positioning and CTA
- Advisory page
- About / CV page (HTML version, PDF can come later)
- Site infrastructure deployed to GitHub Pages with custom domain

**v2:**
- Writing index synced from Substack
- Individual post pages
- CV PDF download

**v3:**
- Consulting page
- Podcast page with Spotify embed
- Newsletter signup capture and attribution

**v4 and beyond:**
- Integration with the ghostwriter agent pipeline so drafts in the vault can become published posts
- Whatever the first three versions reveal as missing