import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/services/adaptive-music-lessons route', () => {
  it('renders the adaptive music lessons page', async () => {
    const page = await renderRoute('/services/adaptive-music-lessons')

    expect(
      page.getByRole('heading', { name: 'Adaptive Music Lessons', level: 1 }),
    ).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'What to Expect' })).toBeInTheDocument()
    expect(
      page.getByRole('heading', { name: 'Adaptive Music Lessons vs. Music Therapy' }),
    ).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'View our services' })).toHaveAttribute(
      'href',
      '/services',
    )
  })
})
