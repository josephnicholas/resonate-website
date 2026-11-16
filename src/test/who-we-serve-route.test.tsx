import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/who-we-serve route', () => {
  it('renders the who we serve page', async () => {
    const page = await renderRoute('/who-we-serve')

    expect(page.getByRole('heading', { name: 'Who We Serve', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Populations We Serve', level: 2 })).toBeInTheDocument()
    expect(
      page.getByRole('heading', { name: 'Individuals and Groups of All Ages and Abilities', level: 3 }),
    ).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Neurodivergent Children', level: 3 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Companies', level: 3 })).toBeInTheDocument()
    expect(
      page.getByRole('heading', { name: 'Babies, Toddlers, and Preschoolers', level: 3 }),
    ).toBeInTheDocument()
    expect(page.getByText(/Tempo Tunes/)).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'View our services' })).toBeInTheDocument()
  })
})
