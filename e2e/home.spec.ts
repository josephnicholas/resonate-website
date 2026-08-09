import { test, expect, type Page } from '@playwright/test'
import { AUTOPLAY_DELAY_MS } from '../src/components/carousel-constants.ts'

const WAIT_MS = AUTOPLAY_DELAY_MS + 1500

function activeSlideImage(page: Page) {
  return page.locator('[role="group"][aria-current="true"] img')
}

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

test.describe('home page carousel', () => {
  test('autoplays from load', async ({ page }) => {
    await page.goto('/')

    const before = await activeSlideImage(page).getAttribute('alt')
    await page.waitForTimeout(WAIT_MS)
    const after = await activeSlideImage(page).getAttribute('alt')

    expect(after).not.toBe(before)
  })

  test('has a pause/play control that stops and resumes autoplay', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('button', { name: 'Pause slideshow' }).click()
    await expect(page.getByRole('button', { name: 'Play slideshow' })).toBeVisible()

    const paused = await activeSlideImage(page).getAttribute('alt')
    await page.waitForTimeout(WAIT_MS)
    expect(await activeSlideImage(page).getAttribute('alt')).toBe(paused)

    await page.getByRole('button', { name: 'Play slideshow' }).click()
    await expect(page.getByRole('button', { name: 'Pause slideshow' })).toBeVisible()

    // Move the mouse and focus fully outside the carousel so hover/focus-based
    // pausing doesn't mask the resumed autoplay.
    await page.getByRole('heading', { name: 'What is Music Therapy' }).click()

    const resumed = await activeSlideImage(page).getAttribute('alt')
    await page.waitForTimeout(WAIT_MS)
    expect(await activeSlideImage(page).getAttribute('alt')).not.toBe(resumed)
  })

  test('pauses automatically on hover and resumes on mouse leave', async ({ page }) => {
    await page.goto('/')

    const region = page.getByRole('region', { name: 'Photos from Resonate Music Therapy Studio' })
    await region.hover()

    const hovered = await activeSlideImage(page).getAttribute('alt')
    await page.waitForTimeout(WAIT_MS)
    expect(await activeSlideImage(page).getAttribute('alt')).toBe(hovered)

    await page.mouse.move(0, 0)
    const afterLeave = await activeSlideImage(page).getAttribute('alt')
    await page.waitForTimeout(WAIT_MS)
    expect(await activeSlideImage(page).getAttribute('alt')).not.toBe(afterLeave)
  })

  test('pauses automatically on touch and resumes once touch ends', async ({ page }) => {
    await page.goto('/')
    const region = page.getByRole('region', { name: 'Photos from Resonate Music Therapy Studio' })

    await region.dispatchEvent('touchstart')
    const touched = await activeSlideImage(page).getAttribute('alt')
    await page.waitForTimeout(WAIT_MS)
    expect(await activeSlideImage(page).getAttribute('alt')).toBe(touched)

    await region.dispatchEvent('touchend')
    const afterTouch = await activeSlideImage(page).getAttribute('alt')
    await page.waitForTimeout(WAIT_MS)
    expect(await activeSlideImage(page).getAttribute('alt')).not.toBe(afterTouch)
  })

  test('pauses automatically on focus', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('button', { name: 'Next slide' }).focus()

    const focused = await activeSlideImage(page).getAttribute('alt')
    await page.waitForTimeout(WAIT_MS)
    expect(await activeSlideImage(page).getAttribute('alt')).toBe(focused)
  })

  test('does not autoplay when prefers-reduced-motion is set', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/')

    const before = await activeSlideImage(page).getAttribute('alt')
    await page.waitForTimeout(WAIT_MS)
    expect(await activeSlideImage(page).getAttribute('alt')).toBe(before)
  })

  test('prev/next controls are keyboard-operable', async ({ page }) => {
    await page.goto('/')

    const before = await activeSlideImage(page).getAttribute('alt')
    await page.getByRole('button', { name: 'Next slide' }).focus()
    await page.keyboard.press('Enter')

    expect(await activeSlideImage(page).getAttribute('alt')).not.toBe(before)
  })
})
