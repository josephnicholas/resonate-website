# resonate-website

Source for the Resonate Music Therapy Studio website (`resonatemusictherapystudio.com`) — a React + TypeScript + Vite single-page app, routed with [TanStack Router](https://tanstack.com/router) and deployed to GitHub Pages.

## Requirements

- Node.js 20.19+ (or 22.12+)
- [pnpm](https://pnpm.io/) — enable via `corepack enable` or see the [standalone install script](https://pnpm.io/installation)

## Local development

```bash
pnpm install       # install dependencies
pnpm dev           # start the dev server at http://localhost:5173
```

## Testing

```bash
pnpm test          # run the Vitest + React Testing Library suite
pnpm test:watch    # Vitest in watch mode
pnpm test:e2e      # run the Playwright suite (builds and serves the app itself — no dev server needed)
```

## Other checks

```bash
pnpm typecheck     # tsc project references, no emit
pnpm lint          # ESLint
pnpm build         # production build to dist/ (includes typecheck + 404.html SPA fallback)
pnpm preview       # serve the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs dependencies, typechecks, lints, runs both test suites, builds, and deploys to GitHub Pages via its native Actions deployment. A failing step blocks the deploy.
