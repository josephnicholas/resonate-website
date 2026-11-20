import { waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { siteRoutes } from '../site/routes'
import { renderRoute } from './render-route'

describe('document title', () => {
  it('is the studio name alone on Home', async () => {
    await renderRoute('/')

    await waitFor(() => expect(document.title).toBe('Resonate Music Therapy Studio'))
  })

  it('leads with the page heading on an inner page', async () => {
    await renderRoute('/about')

    await waitFor(() => expect(document.title).toBe('About Us | Resonate Music Therapy Studio'))
  })

  it.each(siteRoutes.filter((route) => route.path !== '/'))(
    '$path is titled with its own h1',
    async ({ path }) => {
      const page = await renderRoute(path)

      const h1 = page.getByRole('heading', { level: 1 }).textContent
      await waitFor(() => expect(document.title).toBe(`${h1} | Resonate Music Therapy Studio`))
    },
  )
})
