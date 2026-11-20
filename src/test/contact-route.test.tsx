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

    expect(page.getByRole('link', { name: 'Message us on Messenger' })).toHaveAttribute(
      'href',
      'https://m.me/resonatemtstudio',
    )
    expect(page.getByRole('link', { name: '0917 507 0990' })).toHaveAttribute('href', 'tel:+639175070990')
    expect(page.getByRole('link', { name: 'resonatemusictherapystudio2024@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:resonatemusictherapystudio2024@gmail.com',
    )
    expect(page.getByText(/D & I Tinagan Building/)).toBeInTheDocument()
  })
})
