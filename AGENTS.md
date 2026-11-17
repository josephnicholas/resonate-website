# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview
Source for the Resonate Music Therapy Studio website (`resonatemusictherapystudio.com`) — a React + TypeScript + Vite single-page app, routed with [TanStack Router](https://tanstack.com/router) (file-based routing) and package-managed with pnpm. This replaced a static, hand-written HTML/Bootstrap site; see `docs/adr/` for why (SPA-over-multi-page, Tailwind + visual redesign).

The migration was delivered ticket-by-ticket (see `CONTEXT.md` and the `docs/adr/` decisions). All nine routes now carry real content, the Tailwind design system, and the shared Nav/Footer shell.

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

Running a subset:

```bash
pnpm test src/test/about-route.test.tsx    # one Vitest file
pnpm test -t "renders the about page"      # Vitest tests matching a name
pnpm test:e2e e2e/nav.spec.ts              # one Playwright spec
pnpm test:e2e -g "color-contrast"          # Playwright tests matching a title
```

Playwright serves a production build on port 4173 and, outside CI, reuses whatever is already listening there (`reuseExistingServer`). A leftover `pnpm preview` therefore means the specs run against a stale build — stop it before trusting an e2e result.

Validation is manual beyond the automated suites: check rendering at multiple viewport widths before considering a UI change complete.

## Architecture
- `src/routes/` — TanStack Router file-based routes. File path maps directly to URL path (e.g. `routes/services/individual-therapy.tsx` → `/services/individual-therapy`). `src/routes/__root.tsx` is the shared root layout (`<Outlet />`) and also holds the not-found page shown for any unknown URL. Running `pnpm dev` or `pnpm build` regenerates `src/routeTree.gen.ts`, overwriting it in place — it's committed (so a fresh checkout can typecheck before anything has run Vite once) but never hand-edited.
- **Adding, renaming, or removing a page touches two places**: the file in `src/routes/` and its entry in the route registry, `src/site/routes.ts` (path, nav label, heading, nav group). `Nav` renders its links from the registry, each route takes its `h1` from it (`siteRoute('/about').heading`), the root layout sets the tab title from it (`Heading | Resonate Music Therapy Studio`; the studio name alone on Home), and the Playwright specs iterate it — so a page in the registry is in the nav and under test. `.design-sync/preview-provider.tsx` keeps its own list of the nine paths and is updated by hand.
- `src/components/` — the shared pieces: `Nav` and `Footer` (rendered once by `__root.tsx`), plus `AmtaDefinition`, `DraftNotice`, and `ImagePlaceholder`. Each route component renders its own `<main>`. A draft page is `<PageIntro draft>`, and its route test asserts the notice is there, so signing a page off means dropping the `draft` prop and the matching line in its test in `src/test/`. The page skeleton lives here too, as building blocks that take copy as children: `PageIntro` (`h1`, lead paragraph, and the draft notice via its `draft` prop), `Section` (plain ground; `align="left"`, `wide`), `Band` (full-bleed tinted), `SectionHeading` (`h2`), `PointList`, `CardGrid`/`Card`, `Split` (picture beside copy; pair with `<SectionHeading align="left">`), `Comparison` (two offerings side by side, with the ready-made `TherapyVsLessons` and `IndividualVsGroup`), `ButtonLink`/`ButtonRow` (the call-to-action button, in three contrast-safe variants), and `ClosingCta` (every page's last section, which always ends at "Get in touch"). `StudioVideo` is the studio's two-minute film, click-to-play. Build pages from these rather than hand-writing section/heading class strings — they own column width, vertical rhythm, the type scale, and the contrast-safe colour pairs. `Section` and `Band` style their direct `<p>` children as body copy (`prose.ts`), so routes write plain `<p>`. Home's hero and photo bands are the one deliberate exception and stay inline in `src/routes/index.tsx`.
- `src/site/` — site data with no React or asset imports, so Playwright can import it directly. Relative imports between its files carry the `.ts` extension for that reason. `services.ts` is the Services catalogue: the one place each Service's name, one-line description, and page (or none, for Company Team Building Activities) live; `ServiceCards` in `src/components/` renders it on both Home and `/services`. `routes.ts` is the route registry described above; its three Service-page entries take their label and heading from the catalogue. Change a Service or a page heading here, not in a route. `contact.ts` holds the studio's phone, email, address, social links, and tagline; `Footer` and the Contact page render from it.
- `src/assets/` — the logo, social SVGs, the photos the pages use, and the studio film (`resonate-video-ad.mp4`, a 720p encode of about 11 MB), imported as ES modules (not served from `public/`), so a missing/renamed file is a build-time error. Only files something imports belong here; the old carousel photos were removed with the carousel (they are in git history before November 2026 if needed again). The film's full-size source lives in the git-ignored `media-source/`; GitHub rejects files over 100 MB, so only a compressed encode is committed. The `studio-*`, `piano-lesson`, and `video-poster` stills are frames from it.
- `public/` — files served verbatim at the build root: `favicon.ico`, `CNAME` (custom domain pin — do not delete/rename), `tempokids.jpg` (Open Graph preview image; `<meta>` tags aren't processed by Vite's HTML asset pipeline, so it has to be a real static file, and `index.html` points at it by absolute URL on the apex domain).
- `src/test/` — Vitest/RTL setup and tests colocated outside `src/routes/` (the router's file-based generator only expects route files there). `setup.ts` registers Testing Library's `cleanup` after each test (Vitest globals are off, so it isn't automatic). Route tests call `renderRoute('/path')` from `render-route.tsx`, which mounts the real `routeTree` on a memory router (so the Nav/Footer shell renders too) and returns queries scoped to the page's `<main>`. They are the only place per-page content (headings, links) is asserted; a draft page is asserted with `getByRole('note')`, and only `draft-notice.test.tsx` pins the notice's wording.
- `e2e/` — Playwright specs for what needs a real browser across the whole site (`nav`, `deep-links`, `link-hygiene`, `accessibility`). They iterate the route registry in `src/site/routes.ts`; there is no separate e2e route list. Because the nav and its spec read the same labels, a wrong nav label is not caught here — navigation targets, headings, and tab titles are. There are deliberately no per-page content specs — page content belongs to the Vitest route tests, which pin each `h1` as a literal.
- `scripts/copy-404.mjs` — copies the built `index.html` to `dist/404.html` after `vite build`, since GitHub Pages has no native client-side routing and needs this SPA fallback for direct loads of non-root routes.
- `.design-sync/` — inputs for importing the shared components into claude.ai/design; not part of the site build. A new component in `src/components/` is not synced until it is added to `.design-sync/entry.ts` and `config.json`. Read `.design-sync/NOTES.md` before touching it.

## Conventions
- TypeScript strict mode is on in both `tsconfig.app.json` and `tsconfig.node.json`.
- ESLint (flat config, `eslint.config.js`) — not oxlint, despite that being `create-vite`'s current default; this project standardizes on ESLint. `react-refresh/only-export-components` is disabled for `src/routes/**` since route files intentionally export only a `Route` object, not a component.
- Route files follow the TanStack Router convention: `export const Route = createFileRoute('/path')({ component: ... })`, with the actual component function defined (not exported) below it.
- Tailwind v4 is the styling system; brand tokens (`primary`/`secondary`/`accent`/`neutral` scales, `font-heading`/`font-body`) are defined in `src/index.css`. Style with those tokens rather than stock Tailwind palettes or ad hoc CSS — `e2e/accessibility.spec.ts` enforces WCAG AA contrast on every route, and off-palette colours are how that gets broken. The page ground is warm `neutral-50`, not `bg-white`.
- `CLAUDE.md` and `.github/copilot-instructions.md` carry the same guidance as this file for other tools; when a change here alters commands, architecture, or conventions, mirror it there.

## Deployment
`.github/workflows/deploy.yml` runs on push to `main` (and on PRs, build+test only): install → typecheck → lint → Vitest → Playwright → build → upload Pages artifact; a `deploy` job (main-branch pushes only) publishes via GitHub Pages' native Actions deployment. A failing step blocks deploy. `CNAME` pins the custom domain and must not be deleted or renamed.

**Manual step required before this can actually publish**: the repo's GitHub Pages settings must be switched from "Deploy from branch" to "GitHub Actions" (Settings → Pages → Source) — only a repo admin can do this; it can't be done from the workflow itself.
