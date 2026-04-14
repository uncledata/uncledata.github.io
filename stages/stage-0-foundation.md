# Stage 0: Foundation

**Goal:** Scaffold the Astro project with Tailwind, brand tokens, and the reusable layout components that every page will use.

**Branch:** `feature/site-redesign-astro`

## Context

The current site is hand-rolled static HTML with CDN Tailwind. We're migrating to Astro + Tailwind, keeping GitHub Pages as the host. Astro builds to static HTML/CSS, so Pages works without changes.

The specs live in `specs/` (product-spec.md, content-spec.md, tech-spec.md). Read them for full detail. The voice profile is at `/Users/tomaspeluritis/projects/ghost-writter/voice_profiles/en.md`.

## Tasks

### 1. Initialize Astro project

```bash
npm create astro@latest . -- --template minimal --no-install
npm install
npx astro add tailwind
```

Keep the existing `images/`, `talks/pdfs/`, and `specs/` directories. The old HTML files stay until Stage 6 cleanup.

### 2. Brand tokens in `src/styles/global.css`

From tech-spec.md:
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

Wire these into `tailwind.config.mjs` so you can use `bg-bg-light`, `text-accent-coral`, `font-heading`, etc.

### 3. Layout component (`src/layouts/BaseLayout.astro`)

- Accepts `title` and `description` props
- Sets `<meta charset>`, viewport, title, description
- Wraps content with `<Nav />` at top, `<Footer />` at bottom
- Links `global.css`
- Body background: `bg-bg-light` (the warm off-white `#FBF6F3`)
- Uses Georgia for headings, Calibri/system-ui for body

### 4. Nav component (`src/components/Nav.astro`)

**Structure from content-spec:** `Home / Advisory / Writing / Talks / Podcast / About`

**Design decisions:**
- Side-sliding burger menu on mobile (slide-in from the left or right, user preference was "burger menu on the side")
- On desktop: horizontal text links, no icons. Clean and minimal.
- Logo (`images/logo.png`) + "Uncle Data" text on the left
- No social icons in the nav (those go in footer only)
- Active page gets visual indicator (bold or coral underline)
- Consulting is NOT in the nav. It's reachable from the advisory page footer only.

**Pages to link:**
- Home: `/`
- Advisory: `/advisory`
- Writing: `/writing`
- Talks: `/talks`
- Podcast: `/podcast`
- About: `/about`

### 5. Footer component (`src/components/Footer.astro`)

From content-spec:
- Tagline: "Fractional data leadership, written from experience."
- Link to Uncle Data Substack: `https://uncledata.substack.com/`
- Link to LinkedIn: `https://www.linkedin.com/in/tomaspeluritis/`
- Copyright: `2026 Tomas Peluritis`
- No social icons array. No link soup. Just these three things.

### 6. CTA component (`src/components/CTA.astro`)

Reusable block that appears on landing, advisory, about, and consulting pages.

- Accepts a `subject` prop (default: `Advisory inquiry`)
- Text: "Looking for a fractional data leader? Email me."
- Button links to `mailto:tomas.peluritis@gmail.com?subject={subject}`
- Styled with coral accent (`#E8845A`) for the button
- Clean, not flashy. One heading, one button.

### 7. Create a test index page

Create `src/pages/index.astro` with just the layout, a placeholder heading, and the CTA component. This proves the scaffold works.

### 8. Verify

```bash
npm run dev
```

- Site loads at localhost
- Background is warm off-white (#FBF6F3)
- Nav shows all links, burger menu works on mobile
- Footer is clean with tagline + two links + copyright
- CTA block renders with working mailto link
- No JS shipped except the burger menu toggle

## Files created

```
astro.config.mjs
tailwind.config.mjs
package.json
src/
  styles/global.css
  layouts/BaseLayout.astro
  components/Nav.astro
  components/Footer.astro
  components/CTA.astro
  pages/index.astro          # placeholder, replaced in Stage 1
public/
  images/                    # existing, keep as-is
  favicon.svg                # can reuse logo or create simple one
```

## What NOT to do

- Don't delete any existing HTML files yet (Stage 6)
- Don't write page content yet (Stages 1-5)
- Don't set up GitHub Actions yet (Stage 6)
- Don't add any analytics, fonts CDN, or third-party scripts
