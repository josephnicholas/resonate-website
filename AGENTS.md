# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview
Source for the Resonate Music Therapy Studio website (`resonatemusictherapystudio.com`) — a React + TypeScript + Vite single-page app, routed with [TanStack Router](https://tanstack.com/router) (file-based routing) and package-managed with pnpm. This replaced a static, hand-written HTML/Bootstrap site; see `docs/adr/` for why (SPA-over-multi-page, Tailwind + visual redesign).

The migration is being delivered ticket-by-ticket (see `CONTEXT.md` and the `docs/adr/` decisions) — content, styling, and the design system land in later tickets. As of the pipeline tracer-bullet ticket, all nine routes exist but render placeholder headings only.

## Working on the site
```bash
pnpm install       # install dependencies
pnpm dev           # dev server at http://localhost:5173
pnpm test          # Vitest + React Testing Library
pnpm test:e2e      # Playwright (builds and serves the app itself — no separate dev server needed)
pnpm typecheck     # tsc project references
pnpm lint          # ESLint
pnpm build         # production build to dist/ (typecheck + vite build + 404.html SPA fallback copy)
```

Validation is manual beyond the automated suites: check rendering at multiple viewport widths before considering a UI change complete.

## Architecture
- `src/routes/` — TanStack Router file-based routes. File path maps directly to URL path (e.g. `routes/services/individual-therapy.tsx` → `/services/individual-therapy`). `src/routes/__root.tsx` is the shared root layout (`<Outlet />`). Running `pnpm dev` or `pnpm build` regenerates `src/routeTree.gen.ts` — it's gitignored, never edit it by hand.
- `src/assets/` — logos, social SVGs, and content photos, imported as ES modules (not served from `public/`), so a missing/renamed file is a build-time error. Two filenames contain spaces (`therapy1 (Medium).jpg`, `therapy2 (Medium).jpg`) — importing them as modules removes the need for URL-encoding that the old static site required.
- `public/` — files served verbatim at the build root: `favicon.ico`, `CNAME` (custom domain pin — do not delete/rename), `tempokids.jpg` (Open Graph preview image; `<meta>` tags aren't processed by Vite's HTML asset pipeline, so this needs a real static file, duplicated from `src/assets/tempokids.jpg`).
- `src/test/` — Vitest/RTL setup and tests colocated outside `src/routes/` (the router's file-based generator only expects route files there).
- `e2e/` — Playwright specs.
- `scripts/copy-404.mjs` — copies the built `index.html` to `dist/404.html` after `vite build`, since GitHub Pages has no native client-side routing and needs this SPA fallback for direct loads of non-root routes.

## Conventions
- TypeScript strict mode is on in both `tsconfig.app.json` and `tsconfig.node.json`.
- ESLint (flat config, `eslint.config.js`) — not oxlint, despite that being `create-vite`'s current default; this project standardizes on ESLint. `react-refresh/only-export-components` is disabled for `src/routes/**` since route files intentionally export only a `Route` object, not a component.
- Route files follow the TanStack Router convention: `export const Route = createFileRoute('/path')({ component: ... })`, with the actual component function defined (not exported) below it.
- No Tailwind yet — that lands with the design system ticket. Keep new UI unstyled/minimal until then rather than reaching for ad hoc CSS.

## Deployment
`.github/workflows/deploy.yml` runs on push to `main` (and on PRs, build+test only): install → typecheck → lint → Vitest → Playwright → build → upload Pages artifact; a `deploy` job (main-branch pushes only) publishes via GitHub Pages' native Actions deployment. A failing step blocks deploy. `CNAME` pins the custom domain and must not be deleted or renamed.

**Manual step required before this can actually publish**: the repo's GitHub Pages settings must be switched from "Deploy from branch" to "GitHub Actions" (Settings → Pages → Source) — only a repo admin can do this; it can't be done from the workflow itself.
