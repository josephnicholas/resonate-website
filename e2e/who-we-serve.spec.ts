import { test, expect } from '@playwright/test'

test('who we serve page shows its expected content', async ({ page }) => {
  await page.goto('/who-we-serve')

  await expect(page.getByRole('heading', { name: 'Who We Serve', exact: true, level: 1 })).toBeVisible()
  await expect(page.getByText(/first draft/i)).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Individuals and Groups of All Ages and Abilities' }),
  ).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Neurodivergent Children' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Companies' })).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Babies, Toddlers, and Preschoolers' }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'View our services' })).toBeVisible()
})
