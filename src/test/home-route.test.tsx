import { within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/ route', () => {
  it('renders the home page', async () => {
    const page = await renderRoute('/')

    expect(
      page.getByRole('heading', { name: 'Music Therapy and Child Enrichment Services' }),
    ).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'What Is Music Therapy?' })).toBeInTheDocument()
    expect(page.getByText(/American Music Therapy Association/)).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Individual Therapy' })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Group Therapy' })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Adaptive Music Lessons' })).toBeInTheDocument()
    expect(page.getByText('Company Team Building Activities')).toBeInTheDocument()
    expect(page.getByAltText('Tempo Tune')).toBeInTheDocument()
    expect(page.getByLabelText(/introduction film/)).toBeInTheDocument()
    expect(page.getAllByRole('link', { name: 'Get in touch' })[0]).toHaveAttribute('href', '/contact')
    expect(page.getByRole('link', { name: 'Watch our story (2 min)' })).toHaveAttribute('href', '#our-story')
    expect(page.getByRole('link', { name: 'About Tempo Tune' })).toHaveAttribute('href', '/tempo-tune')
    expect(page.getByRole('heading', { name: 'Meet Our Team', level: 2 })).toBeInTheDocument()
    expect(page.getByText(/our two music therapists/)).toBeInTheDocument()
    expect(page.getByRole('img', { name: /Portrait of the studio’s two music therapists/ })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Meet the team' })).toHaveAttribute('href', '/about')
    expect(page.getByRole('heading', { name: 'What Families Say', level: 2 })).toBeInTheDocument()
  })

  it('shows marked placeholders, not invented quotes, while no testimonial has been supplied', async () => {
    const page = await renderRoute('/')

    const section = page.getByRole('heading', { name: 'What Families Say' }).closest('section')!
    const quotes = within(section).getAllByRole('figure')
    expect(quotes).toHaveLength(3)
    for (const quote of quotes) {
      expect(quote).toHaveTextContent(/To confirm: a family’s own words/)
    }
  })
})
