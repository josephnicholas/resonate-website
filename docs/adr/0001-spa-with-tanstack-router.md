# Single-page app with TanStack Router, not a static multi-page site

The site is being converted from static HTML/Bootstrap to React/TypeScript/Vite. We chose a client-rendered SPA with TanStack Router (file-based routing) over a Vite multi-page build mirroring today's separate `index`/`about`/`contact` HTML files, on the user's explicit direction. This means GitHub Pages needs a `404.html`-based SPA fallback for direct-URL loads of any route other than `/`, since GitHub Pages has no native client-side routing support.

## Considered Options

A Vite multi-page build (one entry point per HTML page, no routing library) was recommended instead, since this is a small content-only brochure site where a SPA's main benefits — client-side navigation, shared app shell state — don't clearly outweigh the added deployment complexity. Rejected in favor of the SPA.
