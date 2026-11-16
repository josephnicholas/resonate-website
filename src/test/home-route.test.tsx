import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/ route', () => {
  it('renders the home page', async () => {
    const page = await renderRoute('/')

    expect(
      page.getByRole('heading', { name: 'Music Therapy and Child Enrichment Services' }),
    ).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'What is Music Therapy' })).toBeInTheDocument()
    expect(page.getByText(/American Music Therapy Association/)).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Individual Therapy' })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Group Therapy' })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Adaptive Music Lessons' })).toBeInTheDocument()
    expect(page.getByText('Company Team Building Activities')).toBeInTheDocument()
    expect(page.getByAltText('Tempo Tunes')).toBeInTheDocument()
  })
})
