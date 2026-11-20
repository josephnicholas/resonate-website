import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test, expect } from '@playwright/test'
import { documentTitle, siteRoutes } from '../src/site/routes.ts'

/**
 * The other entry point into the site: loading a URL directly rather than
 * clicking through the nav (see nav.spec.ts). Every route has to boot the app
 * and render its own page plus the shared shell, not just redirect to `/`.
 */
for (const route of siteRoutes) {
  test(`${route.path} renders when loaded directly`, async ({ page }) => {
    await page.goto(route.path)

    await expect(page).toHaveURL(route.path)
    await expect(page).toHaveTitle(documentTitle(route.path))
    await expect(page.getByRole('heading', { name: route.heading, exact: true, level: 1 })).toBeVisible()
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeAttached()
    await expect(page.getByRole('contentinfo')).toBeAttached()
  })
}

/**
 * GitHub Pages has no client-side routing, so a direct load of anything other
 * than `/` is served the 404 page — `scripts/copy-404.mjs` makes that a copy of
 * `index.html` so the SPA boots and routes itself (see docs/adr/0001). The
 * deep-link tests above pass under `vite preview`, which falls back to
 * `index.html` on its own and so cannot catch a missing 404.html.
 *
 * This reads the build output rather than the served site, so it only means
 * something after a real `pnpm build`. CI always builds; locally,
 * `reuseExistingServer` can skip the build in `webServer.command` and leave
 * this asserting on a stale `dist/`.
 */
test('the build emits a 404.html SPA fallback identical to index.html', () => {
  const distFile = (name: string) => fileURLToPath(new URL(`../dist/${name}`, import.meta.url))

  const index = readFileSync(distFile('index.html'), 'utf8')
  const fallback = readFileSync(distFile('404.html'), 'utf8')

  expect(fallback).toBe(index)
})
