import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/contact route', () => {
  it('renders the contact page', async () => {
    const page = await renderRoute('/contact')

    expect(page.getByRole('heading', { name: 'Contact', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Get in Touch', level: 2 })).toBeInTheDocument()

    const instagramLink = page.getByRole('link', { name: 'Instagram' })
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/resonatemusictherapystudio')

    const facebookLink = page.getByRole('link', { name: 'Facebook' })
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/resonatemtstudio')

    expect(page.getByRole('heading', { name: 'About Our Contact Form', level: 2 })).toBeInTheDocument()
    expect(page.getByText(/don.t have a working contact form/i)).toBeInTheDocument()
  })
})
