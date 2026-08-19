import { test, expect } from '@playwright/test'
import { allRoutes } from './routes.ts'

const knownPaths = new Set(allRoutes.map((route) => route.path))

/**
 * Site-wide link hygiene, checked on every route rather than only the entry
 * points the nav specs click through. The nav is covered by nav.spec.ts; these
 * catch the in-content links — the CTAs at the bottom of each page — which no
 * other spec follows.
 */
for (const route of allRoutes) {
  test(`${route.path} has no placeholder links`, async ({ page }) => {
    await page.goto(route.path)
    await expect(page.getByRole('contentinfo')).toBeAttached()

    await expect(page.locator('a[href="#"], a[href=""]')).toHaveCount(0)
  })

  test(`${route.path} links only to real routes`, async ({ page }) => {
    await page.goto(route.path)
    // The app renders client-side, so wait for the shell before reading the DOM
    // — collecting hrefs straight after `goto` races the first paint.
    await expect(page.getByRole('contentinfo')).toBeAttached()

    const internalHrefs = await page.locator('a[href^="/"]').evaluateAll((links) =>
      links.map((link) => link.getAttribute('href') ?? ''),
    )

    expect(internalHrefs.length).toBeGreaterThan(0)
    expect([...new Set(internalHrefs)].filter((href) => !knownPaths.has(href))).toEqual([])
  })
}
