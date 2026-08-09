import { test, expect } from '@playwright/test'

test('contact page shows its expected content', async ({ page }) => {
  await page.goto('/contact')

  await expect(page.getByRole('heading', { name: 'Contact', exact: true, level: 1 })).toBeVisible()
  await expect(page.getByText(/first draft/i)).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Get in Touch' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
    'href',
    'https://www.instagram.com/resonatemusictherapystudio',
  )
  await expect(page.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
    'href',
    'https://www.facebook.com/resonatemtstudio',
  )
  await expect(page.getByRole('heading', { name: 'About Our Contact Form' })).toBeVisible()
  await expect(page.getByText(/don.t have a working contact form/i)).toBeVisible()
})
