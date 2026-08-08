# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview
Source for the Resonate Music Therapy Studio website (`resonatemusictherapystudio.com`) — a static, hand-written HTML/CSS site with **no build step, no package manager, no test suite, and no JavaScript of its own**. The `.gitignore` is a stock Node template and does not imply any Node tooling exists.

## Working on the site
There is nothing to build or compile. Edit the HTML/CSS directly and open the file or serve the directory:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

Use a server rather than `file://` when checking anything Bootstrap-related, since the CSS/JS come from the jsDelivr CDN.

Validation is manual: check rendering at multiple viewport widths (the layout leans heavily on Bootstrap's `col-xl-*` / `col-sm-*` breakpoint pairs, so mobile and desktop diverge significantly).

## Architecture
- `index.html` — the only implemented page; contains the entire site (header/nav, image carousel, "Music Therapy" featurettes, "Our Services" grid, Tempo Tunes program section, footer). All page structure and copy live inline here.
- `about.html`, `contact.html` — empty scaffolds (`<title>Title</title>`, empty `<body>`). Nav links across the site are placeholder `href="#"`; wiring them up is pending work, not a bug to "fix" in isolation.
- `css/style.css` — small set of custom classes only. Everything else is stock Bootstrap utility classes. Notable custom classes:
  - `.ttk-bg` uses a `::before` pseudo-element with `filter: blur(8px)` and `z-index: -1` for the blurred Tempo Tunes background; content must stay above it.
  - `.services-bg` applies a background image plus `opacity: 0.8` to the whole section.
- `images/` — logos, social SVGs, and `therapyN.jpg` carousel photos. Two files contain spaces in their names (`therapy1 (Medium).jpg`, `therapy2 (Medium).jpg`) and are referenced URL-encoded (`therapy1%20(Medium).jpg`); preserve that encoding.

## Conventions
- Bootstrap 5.3.3 is loaded from CDN with SRI `integrity` hashes in `index.html`. If the version changes, the `integrity` attribute for both the CSS `<link>` and the JS bundle `<script>` must be updated to match, or the assets will be blocked.
- Prefer Bootstrap utility classes for spacing/layout/typography; add to `css/style.css` only for effects Bootstrap cannot express (backgrounds, filters, pseudo-elements).
- Explicit `fs-1`…`fs-5` font-size classes are applied throughout to enlarge text; match the surrounding section's sizing when adding content.
- New pages should copy the `<head>` block from `index.html` (favicon, viewport, description, Open Graph tags) plus the header `<nav>` and `<footer>`, since there is no templating or partial-include mechanism.

## Deployment
Deployed via GitHub Pages from the `main` branch of `josephnicholas/resonate-website`; `CNAME` pins the custom domain and must not be deleted or renamed. Pushing to `main` publishes the site. A `develop` branch exists on the remote and recent history shows changes landing through pull requests.
