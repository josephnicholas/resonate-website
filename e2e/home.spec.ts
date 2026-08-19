import { test, expect } from '@playwright/test'

test('home page shows the studio content sections', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'Music Therapy and Child Enrichment Services' }),
  ).toBeVisible()
  await expect(page.getByRole('heading', { name: 'What is Music Therapy' })).toBeVisible()
  await expect(page.getByText(/American Music Therapy Association/)).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Our Services' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Individual Therapy' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Group Therapy' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Adaptive Music Lessons' })).toBeVisible()
  await expect(page.getByText('Company Team Building Activities')).toBeVisible()
  await expect(page.getByAltText('Tempo Tunes')).toBeVisible()
})
