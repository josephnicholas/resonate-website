// design-sync library entry (see .design-sync/NOTES.md).
//
// This repo is a Vite app, not a published package — there is no `main`/`module`
// /`exports` and no built library `dist/`. The design-sync converter needs one
// module whose exports become `window.ResonateDS.*` in the uploaded bundle, so
// this barrel is it: the site's shared components, re-exported verbatim.
//
// Adding a component to `src/components/` does NOT sync it automatically — add
// it here and to `componentSrcMap` in .design-sync/config.json.

export { AmtaDefinition } from '../src/components/AmtaDefinition'
export { Carousel } from '../src/components/Carousel'
export { DraftNotice } from '../src/components/DraftNotice'
export { Footer } from '../src/components/Footer'
export { ImagePlaceholder } from '../src/components/ImagePlaceholder'
export { Nav } from '../src/components/Nav'
