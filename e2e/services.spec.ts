import { test, expect } from '@playwright/test'

test('services overview page shows its expected content', async ({ page }) => {
  await page.goto('/services')

  await expect(page.getByRole('heading', { name: 'Our Services', exact: true, level: 1 })).toBeVisible()
  await expect(page.getByText(/first draft/i)).toBeVisible()
  await expect(page.getByRole('heading', { name: 'What We Offer' })).toBeVisible()

  await expect(page.getByRole('link', { name: 'Individual Therapy' })).toHaveAttribute(
    'href',
    '/services/individual-therapy',
  )
  await expect(page.getByRole('link', { name: 'Group Therapy' })).toHaveAttribute(
    'href',
    '/services/group-therapy',
  )
  await expect(page.getByRole('link', { name: 'Adaptive Music Lessons' })).toHaveAttribute(
    'href',
    '/services/adaptive-music-lessons',
  )

  await expect(
    page.getByRole('heading', { name: 'Company Team Building Activities' }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Company Team Building Activities' })).toHaveCount(0)

  await expect(page.getByRole('link', { name: 'See who we serve' })).toBeVisible()
})

test('individual therapy page shows its expected content', async ({ page }) => {
  await page.goto('/services/individual-therapy')

  await expect(
    page.getByRole('heading', { name: 'Individual Therapy', exact: true, level: 1 }),
  ).toBeVisible()
  await expect(page.getByText(/first draft/i)).toBeVisible()
  await expect(page.getByRole('heading', { name: 'What to Expect' })).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Individual Therapy vs. Group Therapy' }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'View our services' })).toBeVisible()
})

test('group therapy page shows its expected content', async ({ page }) => {
  await page.goto('/services/group-therapy')

  await expect(page.getByRole('heading', { name: 'Group Therapy', exact: true, level: 1 })).toBeVisible()
  await expect(page.getByText(/first draft/i)).toBeVisible()
  await expect(page.getByRole('heading', { name: 'What to Expect' })).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Group Therapy vs. Individual Therapy' }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'View our services' })).toBeVisible()
})

test('adaptive music lessons page shows its expected content', async ({ page }) => {
  await page.goto('/services/adaptive-music-lessons')

  await expect(
    page.getByRole('heading', { name: 'Adaptive Music Lessons', exact: true, level: 1 }),
  ).toBeVisible()
  await expect(page.getByText(/first draft/i)).toBeVisible()
  await expect(page.getByRole('heading', { name: 'What to Expect' })).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Adaptive Music Lessons vs. Music Therapy' }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'View our services' })).toBeVisible()
})
