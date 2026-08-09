import { test, expect } from '@playwright/test'

test('music therapy page shows its expected content', async ({ page }) => {
  await page.goto('/music-therapy')

  await expect(page.getByRole('heading', { name: 'Music Therapy', exact: true, level: 1 })).toBeVisible()
  await expect(page.getByText(/first draft/i)).toBeVisible()
  await expect(page.getByRole('heading', { name: 'What is Music Therapy' })).toBeVisible()
  await expect(page.getByText(/American Music Therapy Association/)).toBeVisible()
  await expect(page.getByRole('heading', { name: 'What to Expect in a Session' })).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Music Therapy vs. Adaptive Music Lessons' }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'View our services' })).toBeVisible()
})
