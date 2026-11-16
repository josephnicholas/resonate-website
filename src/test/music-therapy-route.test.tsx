import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/music-therapy route', () => {
  it('renders the music therapy page', async () => {
    const page = await renderRoute('/music-therapy')

    expect(page.getByRole('heading', { name: 'Music Therapy', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'What is Music Therapy' })).toBeInTheDocument()
    expect(page.getByText(/American Music Therapy Association/)).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'What to Expect in a Session' })).toBeInTheDocument()
    expect(
      page.getByRole('heading', { name: 'Music Therapy vs. Adaptive Music Lessons' }),
    ).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'View our services' })).toBeInTheDocument()
  })
})
