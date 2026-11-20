import { test, expect } from '@playwright/test'
import { routesInGroup, siteRoutes } from '../src/site/routes.ts'

// The rendered nav puts the Services dropdown between the primary and trailing
// links; the links outside it all behave the same way in these specs.
const topLevelRoutes = [...routesInGroup('primary'), ...routesInGroup('trailing')]
const servicesRoutes = routesInGroup('services')

test.describe('desktop nav', () => {
  for (const link of topLevelRoutes) {
    test(`"${link.label}" navigates to ${link.path}`, async ({ page }) => {
      await page.goto('/')
      const nav = page.getByRole('navigation', { name: 'Primary' })
      await nav.getByRole('link', { name: link.label, exact: true }).click()

      await expect(page).toHaveURL(link.path)
      await expect(page.getByRole('heading', { name: link.heading, exact: true, level: 1 })).toBeVisible()
    })
  }

  test('current route is indicated with aria-current', async ({ page }) => {
    await page.goto('/about')
    const nav = page.getByRole('navigation', { name: 'Primary' })

    await expect(nav.getByRole('link', { name: 'About Us', exact: true })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await expect(nav.getByRole('link', { name: 'Home', exact: true })).not.toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  // aria-current alone passes even when the two colour utilities collide and the
  // stylesheet's emission order silently drops the active colour, leaving no
  // visible current-page marker at all.
  test('current route is also indicated visually', async ({ page }) => {
    await page.goto('/about')
    const nav = page.getByRole('navigation', { name: 'Primary' })

    const activeLink = nav.getByRole('link', { name: 'About Us', exact: true })
    const activeColor = await activeLink.evaluate(
      (el) => el.ownerDocument.defaultView!.getComputedStyle(el).color,
    )
    const activeTextDecoration = await activeLink.evaluate(
      (el) => el.ownerDocument.defaultView!.getComputedStyle(el).textDecorationLine,
    )
    const inactiveColor = await nav
      .getByRole('link', { name: 'Home', exact: true })
      .evaluate((el) => el.ownerDocument.defaultView!.getComputedStyle(el).color)

    expect(activeColor).not.toBe(inactiveColor)
    expect(activeTextDecoration).toBe('underline')
  })

  test('Services opens a dropdown', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Primary' })

    await nav.getByText('Services', { exact: true }).click()

    for (const link of servicesRoutes) {
      await expect(nav.getByRole('link', { name: link.label, exact: true })).toBeVisible()
    }
  })

  for (const link of servicesRoutes) {
    test(`Services dropdown "${link.label}" navigates to ${link.path}`, async ({ page }) => {
      await page.goto('/')
      const nav = page.getByRole('navigation', { name: 'Primary' })
      await nav.getByText('Services', { exact: true }).click()
      await nav.getByRole('link', { name: link.label, exact: true }).click()

      await expect(page).toHaveURL(link.path)
      await expect(page.getByRole('heading', { name: link.heading, exact: true, level: 1 })).toBeVisible()
    })
  }

  test('Services dropdown closes after navigating from it', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation', { name: 'Primary' })
    await nav.getByText('Services', { exact: true }).click()
    await nav.getByRole('link', { name: 'Group Therapy', exact: true }).click()

    await expect(page).toHaveURL('/services/group-therapy')
    await expect(nav.getByRole('link', { name: 'Group Therapy', exact: true })).toBeHidden()
  })

  test('Services summary is marked current while on any services route', async ({ page }) => {
    await page.goto('/services/group-therapy')
    const nav = page.getByRole('navigation', { name: 'Primary' })

    await expect(nav.getByText('Services', { exact: true })).toHaveAttribute('aria-current', 'page')
  })
})

test.describe('mobile nav', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('menu is collapsed by default and opens via the toggle button', async ({ page }) => {
    await page.goto('/')

    const menu = page.getByRole('navigation', { name: 'Primary' })
    await expect(menu).toBeHidden()

    await page.getByRole('button', { name: 'Open menu' }).click()
    await expect(menu).toBeVisible()
    await expect(page.getByRole('button', { name: 'Close menu' })).toBeVisible()
  })

  test('menu closes after navigating from it', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Open menu' }).click()
    const menu = page.getByRole('navigation', { name: 'Primary' })
    await menu.getByRole('link', { name: 'About Us', exact: true }).click()

    await expect(page).toHaveURL('/about')
    await expect(menu).toBeHidden()
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible()
  })

  for (const link of siteRoutes) {
    test(`"${link.label}" navigates to ${link.path} from the mobile menu`, async ({ page }) => {
      await page.goto('/')
      await page.getByRole('button', { name: 'Open menu' }).click()
      const nav = page.getByRole('navigation', { name: 'Primary' })

      if (link.group === 'services') {
        await nav.getByText('Services', { exact: true }).click()
      }
      await nav.getByRole('link', { name: link.label, exact: true }).click()

      await expect(page).toHaveURL(link.path)
      await expect(page.getByRole('heading', { name: link.heading, exact: true, level: 1 })).toBeVisible()
    })
  }
})
