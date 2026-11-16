import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/about route', () => {
  it('renders the about page', async () => {
    const page = await renderRoute('/about')

    expect(page.getByRole('heading', { name: 'About Us', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Our Mission', level: 2 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Where We Are', level: 2 })).toBeInTheDocument()
    expect(page.getByText(/Dumaguete City, Negros Oriental/)).toBeInTheDocument()
    expect(page.getByText(/only music therapy studio in the Visayas/)).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Contact us' })).toBeInTheDocument()
  })
})
