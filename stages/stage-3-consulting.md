# Stage 3: Consulting Page Rewrite

**Goal:** Replace the current full-services consulting page with a lighter page that positions consulting as a rare, scoped exception and steers ambiguous cases toward advisory.

**Branch:** `feature/site-redesign-astro`
**Depends on:** Stage 0 (foundation must be complete). Ideally done after Stage 1 (advisory) so the advisory page exists to link to.

## Context

Read `specs/content-spec.md` section "Page 7: Consulting" for full direction.

The current `consulting.html` is a full services marketplace (6 service cards, process steps, "Why Choose Me" section, etc.). The spec says consulting should be roughly **half the length of the advisory page**. It exists, but it's not a hero.

**Email for CTA:** `tomas.peluritis@gmail.com`

## What to salvage from the current page

The current consulting page has useful specifics that can be condensed:
- **Data Infrastructure Assessment** -> rolls into "what I'll actually do" (audit)
- **Data Warehouse Optimization** -> mention Snowflake cost audits specifically
- **Apache Airflow Implementation** -> mention Airflow stabilization
- **Modern ELT Pipeline Development** -> mention dbt review
- **Fractional VP of Data** -> this is advisory, not consulting. Remove from this page.
- **Data Engineering Training** -> drop entirely (not in the spec)
- "Why Choose Me" and "My Process" sections -> drop. The advisory page and bio handle credibility.
- "Free Resources" section -> drop. Nav handles Substack/podcast.

## Consulting page (`src/pages/consulting.astro`)

### Structure

1. **Headline:** "Project-based consulting, when advisory isn't the right shape."

2. **What this is and isn't (2 paragraphs)**
   - Most of the time, the right shape is advisory. But sometimes a company has a specific, scoped problem: Snowflake bills are out of control, the dbt project needs a health check, Airflow keeps falling over.
   - This page is for those cases. Not an ongoing relationship, just a focused engagement with a clear start and end.

3. **What I'll actually do (1 paragraph)**
   - Audit, recommend, and where the engagement allows, implement.
   - Outputs are written and shared with the team so the value doesn't leave when the engagement ends.
   - Specific examples from the current page: Snowflake cost optimization, dbt project review, Airflow stabilization, data infrastructure assessment.

4. **What I won't do (short list or paragraph)**
   - Long-term maintenance
   - Production code ownership
   - Anything that looks like a contract development role

5. **How to inquire (1 paragraph)**
   - "Email me with the problem, the rough size of the system, and what you've already tried."

6. **Nudge toward advisory**
   - "If the problem is bigger than a single project, or you're not sure where to start, [advisory](/advisory) is probably the better fit."

7. **CTA block**
   - `<CTA subject="Consulting inquiry" />`

### Voice notes

Keep it honest and direct. The copy should subtly steer ambiguous cases toward advisory without being pushy about it. Half the length of advisory.

## Files created/modified

```
src/pages/consulting.astro
```

## Verification

- [ ] Page is noticeably shorter than the advisory page
- [ ] No em dashes
- [ ] Links to advisory page for the "bigger than a project" case
- [ ] CTA subject is "Consulting inquiry" (not "Advisory inquiry")
- [ ] No service cards, no process steps, no "Why Choose Me"
- [ ] Mentions specific scoped work: Snowflake, dbt, Airflow
- [ ] Page uses shared Layout/Nav/Footer
