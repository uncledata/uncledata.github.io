# Content Spec: Personal Site & Portfolio

**Owner:** Tomas
**Status:** Draft v1
**Last updated:** April 2026
**Companion docs:** `product-spec.md`, `tech-spec.md`

## How to use this doc

This spec defines what every page on the site says, in what order, with what CTA. It is the bridge between the product spec ("what are we building and why") and the actual code ("how do we build it"). The goal is that by the time this doc is filled in with real prose, building v1 is mechanical — you are translating finished copy into Astro components, not writing copy and code at the same time.

Each page section below has:
- **Purpose.** What this page exists to do.
- **Headline.** The single most important sentence on the page.
- **Body outline.** Section-by-section structure, with notes on what each section says.
- **CTA.** The one action this page is trying to drive.
- **Voice notes.** Page-specific reminders where the default voice rules need extra emphasis.

The default voice rules apply everywhere: no em dashes, no AI filler ("delve," "navigate," "in today's fast-paced world"), flowing prose over bullet structures where possible, direct and self-deprecating, specific over generic. If a section reads like it could have been written by anyone, it isn't done.

**No vanity numbers.** No subscriber counts, listener counts, view counts, follower counts, team sizes, or any other metric that ages badly or invites the wrong kind of comparison. The work, the venues, and the writing itself are the credibility. If a sentence relies on a number to land, rewrite it without the number and see if it still works. It almost always does.

## Site-wide elements

**Nav:** Home / Advisory / Writing / Talks / Podcast / About
*(Consulting is reachable from the Advisory page footer, not the main nav. It is a rare exception offering and shouldn't compete for attention.)*

**Footer:** Short tagline, link to Uncle Data Substack, link to LinkedIn, copyright line. No social icons array, no link soup.

**Reusable CTA block:** The same component appears at the bottom of the landing page, advisory page, about page, and consulting page. It says one thing: "Looking for a fractional data leader? Email me." with a `mailto:` link. The subject line varies by page (`Advisory inquiry`, `Consulting inquiry`, etc.) so inbox triage is trivial.

## Page 1: Landing (`/`)

**Purpose.** Convert a first-time visitor — most likely a CTO, VP Engineering, or founder who landed here from an Uncle Data post or a referral — into either an advisory inquiry or a newsletter subscriber. Primary outcome: advisory inquiry. Secondary: subscribe.

**Headline.**
> Fractional Head of Data for companies that need senior data leadership without the full-time hire.

**Subhead (one sentence under the headline).**
A short line that earns the headline. Something like: "I help small companies build the data foundations that make everything else — hiring, AI, growth — actually work." Rewrite in your own voice, but keep it to one sentence.

**Body outline.**

1. **Hero.** Headline, subhead, primary CTA button ("Email me about advisory"), secondary link ("Read Uncle Data"). No hero image or animation. Just words and whitespace.

2. **Proof bar.** A single horizontal row, no graphics, just text. Something like:
   > Head of Data at Mediatech · PyCon LT 2026 keynote · Uncle Data newsletter and podcast · Previously Wix, kevin., HomeToGo
   This is the 10-second credibility hit. It exists so the skeptical reader keeps scrolling. Note: no follower or subscriber counts anywhere on the site. The work and the venues do the talking. Numbers age badly and invite the wrong kind of comparison.

3. **What I do (3 paragraphs).** Three short paragraphs in prose, not bullets. Each one answers a different question:
   - *What does fractional advisory actually mean in practice?* You sit alongside a company's data leadership on a recurring basis, you review what they have, you make it better, and you stay long enough to see the changes land.
   - *Who is this for?* Small companies that need solid data foundations before they can do anything ambitious with AI. Companies where the data team is technically capable but the strategy, structure, or priorities aren't quite right.
   - *Why me?* You've spent a long time in senior data roles, you write about this stuff publicly, and you've seen enough teams from the inside to know what works and what just sounds good in a conference talk.

4. **Recent writing.** Three latest posts from the `posts` collection, rendered as cards with title, date, one-line description. Header: "Recent writing." No "view all" button — the nav handles that.

5. **Recent talks.** Two or three most recent talks from the `talks` collection. Same card treatment. Header: "Recent talks." Mostly social proof, but also a "this person is real and shows up in public" signal.

6. **Reusable CTA block.** "Looking for a fractional data leader? Email me." mailto button.

**CTA.** Primary: email about advisory (`mailto:tomas.peluritis@gmail.com?subject=Advisory inquiry`). Secondary: subscribe to Uncle Data (link out to Substack with a UTM tag so signups can be attributed).

**Voice notes.** The landing page is where the temptation to write generic SaaS copy is strongest. Resist. The headline is allowed to sound like a positioning statement because that's what it is, but the three "what I do" paragraphs need to sound like you, not like a consultancy website. If you read them out loud and they sound like a brochure, rewrite.

## Page 2: Advisory (`/advisory`)

**Purpose.** Convert a warm visitor (someone who clicked through from the landing page or a CTA elsewhere) into an actual emailed inquiry. This is the page that closes the loop.

**Headline.**
> Fractional advisory for small companies that need their data foundations to actually work.

**Body outline.**

1. **What this is (2–3 paragraphs).** Open with the shape of an engagement, in plain language. Async-first, monthly deep-dive sessions in person or on video, occasional dedicated full days when something needs concentrated attention. Length is open-ended because real engagements never fit a clean three-month box. Then say what advisory actually means in practice: review the architecture, the team, the priorities, the things people are quietly worried about, propose changes, and stick around long enough to put the plan into action.

2. **Who this is for (3–4 paragraphs in prose, not a checklist).** This is the filter section, and it should be specific enough that the wrong reader self-disqualifies. Direction:
   - Small companies, not enterprise. The kind of place where the data team is small enough that one good decision changes everything and one bad one breaks for months.
   - Companies that want to do something with AI and are realizing they need to fix the basics first. The data isn't where it should be, the pipelines are fragile, the team is capable but pulled in too many directions.
   - Companies where the existing data lead is good but isolated, and could use someone senior to think alongside them. Not a replacement, a thinking partner.
   - Not for: companies that want a contractor to write production code, companies that want someone to manage a team for them, companies looking for an audit-and-leave engagement (those exist in `/consulting`).

3. **How an engagement works (3 short subsections, prose where possible).**
   - *Cadence.* Mostly async. One monthly deep-dive session, in person or video, where everything important gets discussed at once. Full days available when something specific needs concentrated attention. The async-first shape exists because most data leadership work is thinking and writing, not meetings.
   - *Scope.* Reviews of what exists, recommendations for what to change, and active involvement in putting changes into practice. Architecture, hiring, prioritization, team structure, the boring things that actually decide whether a data team ships.
   - *What I don't do.* Manage the team directly. Write production code as a contractor. Sell anyone on AI before the basics are in place.

4. **How to start.** One short paragraph. The honest version: "Email me with a few sentences about your company, your current data setup, and what's bothering you. If it sounds like a fit, we get on a call. If it doesn't, I'll tell you and probably point you toward someone who's better suited."

5. **Reusable CTA block.** Subject: `Advisory inquiry`.

**CTA.** Email with subject `Advisory inquiry`.

**Voice notes.** This page is doing the most work of any page on the site. It needs to be specific enough that a serious buyer reads it and thinks "this person knows what they're talking about and isn't going to waste my time." Avoid the consultancy pattern of vague capability lists. Name actual things. The "what I don't do" section is non-negotiable — it's the page's biggest credibility signal, because most consultants won't write it.

## Page 3: About (`/about`)

**Purpose.** The long-form bio. This is the page that turns "interesting headline" into "I want to work with this person." It is also where the CV lives.

**Headline.**
Probably no headline in the traditional sense. Open straight into the bio, with your name at the top in heading style and a one-line subtitle like "Head of Data, writer, fractional advisor." Long-form bios that open with a marketing headline always feel off.

**Body outline.**

1. **The bio itself (800–1500 words).** Long-form, narrative, in your voice. Structure to aim for:
   - *Where you are now.* Head of Data at Mediatech, leading a team across data engineering, science, and analytics. Plus the independent advisory practice. Plus Uncle Data. One paragraph that situates the reader.
   - *How you got here.* The path through Wix, kevin., HomeToGo, and into Mediatech. Not a chronological list — a story. What you learned at each place, what made you move, what changed in how you think about data work along the way.
   - *What you actually believe about this work.* The "simple over smart" thesis. The conviction that most data problems are organizational, not technical. The belief that translating technical work into business language is the entire job of a data leader. This is the section that makes people decide they want to work with you.
   - *Uncle Data and why it exists.* One or two paragraphs on the newsletter and podcast. Why you started writing publicly, what you're trying to do with it, who it's for. No subscriber numbers, no listener counts. The work itself is the evidence.
   - *Speaking and community.* Brief — PyCon LT (four times, including the 2026 keynote), Big Data Europe, Data & Donuts. Frame it as an extension of the writing, not a separate thing.
   - *Outside work.* One paragraph. Vilnius, family, Magic: The Gathering, the 3D printer. This section earns the rest of the bio because it makes you a person instead of a LinkedIn profile.
   - *Closing line.* One or two sentences. Either an invitation ("If any of this resonates, I'd love to hear from you") or a quiet statement of what you're trying to do with all of it. Your call which.

2. **Structured CV section.** Below the bio. Rendered from `cv.yaml`. Sections: current role, prior roles (with dates and one-line descriptions), selected speaking engagements (auto-pulled from the `talks` collection), selected writing (a curated handful, not the full list), education if relevant.

3. **Download CV button.** Links to `/cv/tomas-cv.pdf`. Quiet, not flashy.

4. **Reusable CTA block.** Subject: `Advisory inquiry`.

**CTA.** Primary: email about advisory. Secondary: download CV.

**Voice notes.** This is the page where the voice rules matter most. The bio cannot read like every other "About Me" page on the data internet. Self-deprecation is welcome. Specific anecdotes beat capability statements every time. If a paragraph could appear unchanged on someone else's site, it shouldn't appear on yours.

## Page 4: Writing (`/writing`)

**Purpose.** Make existing readers happy by giving them a clean place to find your posts. Convert new visitors into Uncle Data subscribers.

**Headline.**
> Writing on data engineering, leadership, and the parts of the job nobody talks about.
Or shorter: "Writing." If the rest of the page does its job, the index doesn't need to sell itself.

**Body outline.**

1. **One-line intro.** A single sentence: "Posts on data engineering, leadership, and the things they don't put in the docs. Most of these are also on the Uncle Data Substack." Mention that the Substack version is where the comments and discussion live, so readers know which one to go to if they want to engage.

2. **Post list.** All published posts from the `posts` collection, sorted newest first. Each entry: title (linked), date, one-line description, optional tag. No pagination for v2 — once there are 50+ posts, add it.

3. **Subscribe nudge.** At the bottom of the list, not the top. One sentence and a link out to Substack with a UTM tag.

**CTA.** Subscribe to Uncle Data. (This is the one page where the CTA is *not* "email about advisory" — readers here are in reading mode, not buying mode.)

**Voice notes.** Don't oversell the writing. The posts speak for themselves.

## Page 5: Talks (`/talks`)

**Purpose.** Social proof. Show that you've shown up in public, in front of real audiences, more than once. Useful for advisory buyers who want to confirm you're a known quantity in the field.

**Headline.**
> Talks.
Or: "Conferences, meetups, and the occasional keynote." The page doesn't need a hero.

**Body outline.**

1. **One-line intro.** "I've been speaking at PyCon Lithuania for four years now and at a few other places along the way. Slides and recordings where they exist."

2. **Talks list, grouped by year.** Each entry from the `talks` collection: title, event, date, location, type (keynote/talk/panel/workshop), one-line description, links to slides and video where available.

3. **Speaking inquiry CTA.** Quiet line at the bottom: "Conference organizers: I'm always happy to hear about events. Email me." With a `mailto:` link, subject `Speaking inquiry`.

**CTA.** Primary: email about speaking. Secondary: nothing — this is a credibility page, not a conversion page.

**Voice notes.** Resist the urge to add "highlights" or "selected" framing. List everything that's worth listing, in plain order.

## Page 6: Podcast (`/podcast`)

**Purpose.** Make it easy for newsletter readers to find the podcast, and for podcast listeners to find the newsletter. This page exists for reach, not conversion.

**Headline.**
> The Uncle Data podcast.

**Body outline.**

1. **One-line intro.** A sentence about what the podcast is and who it's for. Something like: "Conversations with people who actually do the work of building and running data teams. New episodes irregularly." Keep it honest about cadence.

2. **Spotify show embed.** The full-show iframe from Spotify. This is the only place on the site that loads a third-party script, and it's contained to this one page.

3. **Optional: a short curated list of standout episodes.** Three or four episodes that are good entry points, with one-line descriptions. Skip if it feels like overkill.

4. **Subscribe-elsewhere line.** "Also on Apple Podcasts and wherever you listen." With links.

**CTA.** Listen to the podcast. Secondary: subscribe to Uncle Data.

**Voice notes.** Don't write a podcast manifesto. Embed, list, link, done.

## Page 7: Consulting (`/consulting`)

**Purpose.** Catch the rare visitor who specifically wants project-based consulting (Snowflake audit, dbt review, Airflow stabilization) and convert them, without making the offering look like a primary service.

**Headline.**
> Project-based consulting, when advisory isn't the right shape.

**Body outline.**

1. **What this is and isn't (2 paragraphs).** Honest framing: most of the time, the right shape of engagement is advisory. But occasionally a company has a specific, scoped problem they want someone senior to come in, look at, and fix. Snowflake bills, dbt project health, Airflow stability, things like that. This page is for those cases.

2. **What I'll actually do (one paragraph).** Audit, recommend, and where the engagement allows, implement. Outputs are written and shared with the team so the value doesn't leave when the engagement ends.

3. **What I won't do.** Long-term maintenance. Production code ownership. Anything that looks like a contract development role.

4. **How to inquire.** Email with subject `Consulting inquiry`. One paragraph: tell me the problem, the rough size of the system, and what you've already tried.

5. **Reusable CTA block.** Subject: `Consulting inquiry`.

**CTA.** Email with subject `Consulting inquiry`.

**Voice notes.** This page should be roughly half the length of the advisory page. It exists, but it isn't a hero. The copy should subtly steer ambiguous cases toward advisory.

## Reusable copy assets

A few snippets that get reused across pages. Defining them once here keeps them consistent.

**Mailto subjects.**
- `Advisory inquiry` — landing, advisory, about pages
- `Consulting inquiry` — consulting page only
- `Speaking inquiry` — talks page only

**Newsletter subscribe link.** Always points to the Substack with a UTM tag identifying the source page (e.g. `?utm_source=site&utm_medium=cta&utm_campaign=landing`). This is the only attribution mechanism on the script-free site, and it is how newsletter signups get credited toward the success metric in the product spec.

**Footer tagline.** "Fractional data leadership, written from experience."

## Open questions

- **Newsletter UTM source naming.** Confirm the convention you want to use so it's consistent everywhere.
- **About page bio: first or third person?** Long-form bios usually work better in first person ("I started writing about data because…"), and your existing voice is first-person, so this is a soft recommendation rather than a question. But worth confirming before drafting.
- **Footer tagline.** Pick one of the three above or write your own.
- **Mediatech name on the public site.** I assumed it's fine to name. If not, swap to "a media-tech company" or similar in the proof bar and bio.