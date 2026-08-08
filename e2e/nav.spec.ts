import { test, expect } from '@playwright/test'

const topLevelLinks = [
  { name: 'Home', heading: 'Home', path: '/' },
  { name: 'Music Therapy', heading: 'Music Therapy', path: '/music-therapy' },
  { name: 'Who We Serve', heading: 'Who We Serve', path: '/who-we-serve' },
  { name: 'About Us', heading: 'About Us', path: '/about' },
  { name: 'Contact', heading: 'Contact', path: '/contact' },
]

const servicesLinks = [
  { name: 'All Services', heading: 'Our Services', path: '/services' },
  { name: 'Individual Therapy', heading: 'Individual Therapy', path: '/services/individual-therapy' },
  { name: 'Group Therapy', heading: 'Group Therapy', path: '/services/group-therapy' },
  {
    name: 'Adaptive Music Lessons',
    heading: 'Adaptive Music Lessons',
    path: '/services/adaptive-music-lessons',
  },
]

test.describe('desktop nav', () => {
  for (const link of topLevelLinks) {
    test(`"${link.name}" navigates to ${link.path}`, async ({ page }) => {
      await page.goto('/')
      await page.getByRole('link', { name: link.name, exact: true }).click()

      await expect(page).toHaveURL(link.path)
      await expect(page.getByRole('heading', { name: link.heading })).toBeVisible()
    })
  }

  test('current route is indicated with aria-current', async ({ page }) => {
    await page.goto('/about')

    await expect(page.getByRole('link', { name: 'About Us', exact: true })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await expect(page.getByRole('link', { name: 'Home', exact: true })).not.toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  test('Services opens a dropdown', async ({ page }) => {
    await page.goto('/')

    await page.getByText('Services', { exact: true }).click()

    for (const link of servicesLinks) {
      await expect(page.getByRole('link', { name: link.name, exact: true })).toBeVisible()
    }
  })

  for (const link of servicesLinks) {
    test(`Services dropdown "${link.name}" navigates to ${link.path}`, async ({ page }) => {
      await page.goto('/')
      await page.getByText('Services', { exact: true }).click()
      await page.getByRole('link', { name: link.name, exact: true }).click()

      await expect(page).toHaveURL(link.path)
      await expect(page.getByRole('heading', { name: link.heading })).toBeVisible()
    })
  }

  test('Services summary is marked current while on any services route', async ({ page }) => {
    await page.goto('/services/group-therapy')

    await expect(page.getByText('Services', { exact: true })).toHaveAttribute('aria-current', 'page')
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

  for (const link of [...topLevelLinks, ...servicesLinks]) {
    test(`"${link.name}" navigates to ${link.path} from the mobile menu`, async ({ page }) => {
      await page.goto('/')
      await page.getByRole('button', { name: 'Open menu' }).click()

      if (servicesLinks.includes(link)) {
        await page.getByText('Services', { exact: true }).click()
      }
      await page.getByRole('link', { name: link.name, exact: true }).click()

      await expect(page).toHaveURL(link.path)
      await expect(page.getByRole('heading', { name: link.heading })).toBeVisible()
    })
  }
})
