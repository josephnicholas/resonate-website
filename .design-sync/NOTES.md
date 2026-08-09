# design-sync notes

Repo-specific gotchas for syncing this repo to claude.ai/design. Read this before
re-running the sync. Config lives in `config.json`; the conventions header the
design agent reads is `conventions.md`.

## What this repo is, from the converter's point of view

- **It is not a published package.** No `main`/`module`/`exports`, no library
  `dist/`. `.design-sync/entry.ts` is a hand-written barrel that re-exports the
  six shared components; `cfg.entry` points at it. Without an explicit `entry`
  the converter looks for `<node-modules>/resonate-website/package.json` and dies
  with ENOENT.
- **Adding a component to `src/components/` does not sync it.** Add it to
  `.design-sync/entry.ts`, to `cfg.componentSrcMap`, and (for a real prop
  contract) to `cfg.dtsPropsFor`. A `.design-sync/docs/<Name>.md` gives it a real
  `.prompt.md` and its group.
- `cfg.srcDir` is `src/components`, deliberately narrow: pointed at `src`, the
  converter picks up every route file's `export const Route` as a component.
- **There is no `.d.ts` tree** (`[DTS] parsed 0 .d.ts files` is expected), so
  prop extraction has nothing to read and every component would ship
  `[key: string]: unknown`. `cfg.dtsPropsFor` supplies the real contracts by
  hand — keep it in step with the component sources.

## Toolchain

- **This machine has no `node` and no `npm` on PATH — only `bun`** (1.3.11,
  reports `process.version v24`). Everything was run through a shim:
  ```sh
  mkdir -p /tmp/ds-bin && printf '#!/bin/sh\nexec bun "$@"\n' > /tmp/ds-bin/node
  chmod +x /tmp/ds-bin/node && export PATH=/tmp/ds-bin:$PATH
  ```
  The converter's deps were installed with `bun install esbuild ts-morph @types/react`
  inside `.ds-sync/` instead of `npm i`. Everything worked unmodified under bun.
- **Playwright:** the repo pins `playwright@1.62.1`, which wants chromium build
  `1234` — already in `~/.cache/ms-playwright/`, so the render check runs with no
  download. pnpm's strict layout means bare `playwright` is not resolvable from
  the repo root, so it is installed into `.ds-sync/` separately
  (`PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 bun install playwright@1.62.1`).

## Styling — the part that needed real work

The site's Tailwind v4 stylesheet only exists compiled, so `cfg.cssEntry` points
at a generated file. **`node .design-sync/prepare-css.mjs` (= `cfg.buildCmd`)
must run before every converter build**, and *again* after previews change.

Two things it exists to solve:

1. **Font URLs.** Vite emits root-absolute `url(/assets/…woff2)`; the converter
   resolves `@font-face` URLs on disk, so they are rewritten relative to
   `compiled.css`. Without this the build reports
   `0 url(s) rewritten … 6 dead @font-face block(s) dropped` and ships no fonts.
2. **Reach.** Tailwind v4 only emits a `@theme` variable or a utility class that
   some scanned file actually names. Compiled from the app alone, the DS would
   ship four brand palettes with most shades missing and ~150 utilities — the
   design agent's own classes would silently resolve to nothing.
   `.design-sync/ds.css` imports `src/index.css` verbatim and adds
   `@source inline(...)` safelists for the full 4x10 brand ramp plus a bounded
   layout vocabulary. Cost: 57 KB -> 74.6 KB. **The site's own CSS is untouched.**

Consequences to keep in mind:

- Arbitrary values (`p-[13px]`, `bg-[#abc]`) can never work — nothing generates
  them. `conventions.md` tells the design agent to use inline `style` instead.
- `bg-white` is deliberately **not** safelisted: the brand ground is warm
  `neutral-50`, and the conventions header says so. If a future design genuinely
  needs it, add it to `ds.css` rather than quietly using it.
- `tokens/` in the bundle is **empty by design**. `copyTokens` only copies from a
  separate tokens *package* under `node_modules`; this repo's `@theme` tokens
  compile into `:root` inside `_ds_bundle.css`, which is in the `styles.css`
  `@import` closure — so designs do get them. `cfg.tokensGlob` does nothing here
  and was removed.

## Previews

- **`Nav` needs router context.** It calls `useRouterState` and renders TanStack
  `<Link>`s, so it throws when mounted standalone. `.design-sync/preview-provider.tsx`
  exports `PreviewRouterProvider`, wired via `cfg.extraEntries` + `cfg.provider`.
  It uses `RouterContextProvider`, **not** `RouterProvider` — the latter ignores
  children and renders the router's own matched routes instead.
- **Carousel photos are inlined data URIs.** The converter's esbuild has a
  `.png` loader but **no `.jpg` loader**, and the studio photos are ~700 KB each.
  `.design-sync/previews/carousel-slides.ts` holds three of them downscaled to
  720px / JPEG q0.72 (~200 KB total), generated once via a headless-chromium
  canvas resize. To refresh or add slides, redo that downscale — do not import
  the `.jpg` files directly, the preview build will fail to compile.
- All six components are full-width or page-level, so every one carries
  `cfg.overrides.<Name>.cardMode = "column"`. Without it the multi-export grid
  squeezes them into narrow cells and clips the text.
- Preview cell order is alphabetical by export name, so the canonical story is
  not necessarily first (e.g. `ImagePlaceholder` shows Banner, Default, Gallery).
  Cosmetic; not worth renaming exports around.

## Repo changes this sync made

- `eslint.config.js` — added `.design-sync`, `.ds-sync`, `ds-bundle` to
  `globalIgnores`. `eslint .` would otherwise lint the preview `.tsx` files and
  the staged converter as app code and fail CI.
- `.gitignore` — added the generated/staged design-sync paths.
- `tsconfig.app.json` only includes `src`, so nothing under `.design-sync/` is
  typechecked by `pnpm typecheck`. Preview and provider `.tsx` files are compiled
  by esbuild with types erased — a type error there shows up as a render failure,
  not a build failure.

## Known render warns

None. As of the first sync, `package-validate.mjs` exits 0 with no warn lines and
all 6 components render cleanly (0 floor cards). A warn line on a future run is
therefore new — investigate it rather than assuming it is pre-existing.

## Re-sync risks — what can silently go stale

- **`dtsPropsFor` is hand-written.** Change `CarouselProps` or
  `ImagePlaceholderProps` in `src/components/` and nothing will fail; the design
  agent just gets a stale contract. Re-read both components' props on every sync.
- **`.design-sync/entry.ts` and `componentSrcMap` are hand-maintained.** A new
  component in `src/components/` is invisible to the sync until added to both.
  A renamed or deleted one leaves an orphan in the uploaded project — the
  re-sync diff's `upload.deletePaths` handles it only if the anchor is intact.
- **`.design-sync/docs/*.md` describe behaviour prose-style** (autoplay delay,
  reduced-motion, the `<details>` dropdown, `role="note"`). These were read off
  the component sources on 2026-08-09; they will not fail loudly if the
  implementation changes.
- **The safelist in `ds.css` is a guess at what the design agent will reach for.**
  If designs come back with unstyled gaps, the fix is almost always a missing
  utility family there, not a component bug.
- **The Carousel slide data URIs are a frozen copy** of three photos in
  `src/assets/`. If the studio's photography is replaced, these do not update.
- **Fonts are pinned to hashed filenames** (`inter-latin-400-normal-C38fXH4l.woff2`)
  produced by the Vite build. A `@fontsource` version bump rehashes them; the
  converter re-copies automatically, but old files linger in the uploaded project
  until a reconciliation delete removes them.
- **Only the `latin` subsets, 3 Quicksand weights (500/600/700) and 3 Inter
  weights (400/500/600) ship** — whatever `src/index.css` imports. `font-bold`
  on Quicksand has no 800/900 face and will synthesise.
