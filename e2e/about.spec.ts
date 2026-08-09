import { test, expect } from '@playwright/test'

test('about page shows its expected content', async ({ page }) => {
  await page.goto('/about')

  await expect(page.getByRole('heading', { name: 'About Us', exact: true, level: 1 })).toBeVisible()
  await expect(page.getByText(/first draft/i)).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Our Mission' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Where We Are' })).toBeVisible()
  await expect(page.getByText(/Dumaguete City, Negros Oriental/)).toBeVisible()
  await expect(page.getByRole('link', { name: 'Contact us' })).toBeVisible()
})
