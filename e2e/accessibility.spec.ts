import { AxeBuilder } from '@axe-core/playwright'
import { test, expect } from '@playwright/test'

const routes = [
  '/',
  '/music-therapy',
  '/who-we-serve',
  '/services',
  '/services/individual-therapy',
  '/services/group-therapy',
  '/services/adaptive-music-lessons',
  '/about',
  '/contact',
]

for (const route of routes) {
  test(`${route} has no WCAG AA color-contrast violations`, async ({ page }) => {
    await page.goto(route)

    const results = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze()

    expect(results.violations).toEqual([])
  })
}

test('open desktop services dropdown has no WCAG AA color-contrast violations', async ({ page }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Primary' })
  await nav.getByText('Services', { exact: true }).click()
  await expect(nav.getByRole('link', { name: 'Individual Therapy', exact: true })).toBeVisible()

  const results = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze()

  expect(results.violations).toEqual([])
})

test('open mobile nav menu has no WCAG AA color-contrast violations', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByRole('button', { name: 'Open menu' }).click()
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible()

  const results = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze()

  expect(results.violations).toEqual([])
})
