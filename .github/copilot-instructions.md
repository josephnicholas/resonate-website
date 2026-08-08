# Copilot Instructions for Resonate Website

This guide helps Copilot work effectively on the Resonate Music Therapy Studio website.

## Quick Start

**No build step needed.** This is a static HTML/CSS site. Edit files directly and preview:

```bash
python3 -m http.server 8000   # Visit http://localhost:8000
```

Always use a local server (not `file://`) when previewing, as Bootstrap CSS/JS load from CDN and require HTTP.

## Build/Test/Lint

- **No build system:** There is no build step, no package manager, no test suite, and no JavaScript.
- **No dependencies:** The `.gitignore` is a stock Node template and does not reflect actual tooling.
- **Manual validation:** Check rendering at multiple viewport widths (mobile: `col-sm-*`, desktop: `col-xl-*`).

## Architecture

### Files and Structure

- **`index.html`** — The only fully implemented page. Contains the entire site structure:
  - Header with navigation and social links
  - Image carousel (therapy photos)
  - "Music Therapy" featurettes section
  - "Our Services" grid
  - Tempo Tunes program section
  - Footer
  
- **`about.html`, `contact.html`** — Empty scaffolds with `<title>` and empty `<body>`. Nav links throughout the site use placeholder `href="#"`; wiring these up is pending work.

- **`css/style.css`** — Only custom classes go here (small file). Everything else uses Bootstrap 5.3.3 utility classes from CDN.

- **`images/`** — Logos, social SVGs, and carousel photos. Two files have spaces in names:
  - `therapy1 (Medium).jpg`
  - `therapy2 (Medium).jpg`
  
  These **must be URL-encoded** in `href` attributes: `therapy1%20(Medium).jpg`

### Custom CSS Classes

- **`.ttk-bg`** — Blurred background for Tempo Tunes section. Uses `::before` pseudo-element with `filter: blur(8px)` and `z-index: -1`. Content inside must stay above the pseudo-element.

- **`.services-bg`** — Background image with `opacity: 0.8` applied to the whole section.

## Key Conventions

### Bootstrap and Styling

- **Bootstrap 5.3.3** is loaded from CDN with SRI `integrity` hashes. If the version changes, update both the CSS `<link>` and JS bundle `<script>` `integrity` attributes, or the assets will be blocked.

- **Prefer Bootstrap utility classes** for spacing, layout, and typography (`m-*`, `p-*`, `d-flex`, `col-*`, `fs-*`, etc.). Add to `css/style.css` **only** for effects Bootstrap cannot express (pseudo-elements, filters, blurs).

- **Font sizing:** Explicit `fs-1` through `fs-5` classes are applied throughout. When adding content to a section, match the surrounding section's font-size class.

### Creating New Pages

Follow the template from `index.html`:

1. Copy the entire `<head>` block (favicon, viewport, meta tags, Open Graph tags, Bootstrap CDN links, style.css reference)
2. Include the header `<nav>` block
3. Include the footer block
4. Add your unique content in `<main>`

There is no templating or partial-include mechanism, so duplication is necessary.

### URL Encoding

Image file paths with spaces **must** be URL-encoded in HTML attributes:

```html
<!-- ✓ Correct -->
<img src="images/therapy1%20(Medium).jpg" alt="...">

<!-- ✗ Wrong -->
<img src="images/therapy1 (Medium).jpg" alt="...">
```

## Deployment

- **Platform:** GitHub Pages from the `main` branch (`josephnicholas/resonate-website`)
- **Domain:** Pinned via `CNAME` file — **do not delete or rename this file**
- **Publish:** Push to `main` to deploy immediately
- **Development:** A `develop` branch exists; changes typically land via pull requests

## Viewport Testing

The layout relies heavily on Bootstrap's breakpoint pairs:

- **Mobile:** `col-sm-*` — test at narrow widths (~320px–576px)
- **Desktop:** `col-xl-*` — test at wide widths (~1200px+)

Always test both before considering a change complete.
