import { within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/about route', () => {
  it('renders the about page', async () => {
    const page = await renderRoute('/about')

    expect(page.getByRole('heading', { name: 'About Us', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Our Mission', level: 2 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Our Team', level: 2 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Where We Are', level: 2 })).toBeInTheDocument()
    expect(page.getByText(/Dumaguete City, Negros Oriental/)).toBeInTheDocument()
    expect(page.getByText(/only music therapy studio in the Visayas/)).toBeInTheDocument()
    expect(page.getByLabelText(/introduction film/)).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '/contact')
  })

  it('introduces both music therapists, with every unsupplied detail marked', async () => {
    const page = await renderRoute('/about')

    const team = page.getByRole('heading', { name: 'Our Team', level: 2 }).closest('section')!
    const members = within(team).getAllByRole('listitem')
    expect(members).toHaveLength(2)

    const [founder, therapist] = members
    expect(within(founder).getByRole('heading', { name: 'Founder and Director', level: 3 })).toBeInTheDocument()
    expect(within(therapist).getByRole('heading', { name: 'Music Therapist', level: 3 })).toBeInTheDocument()

    const founderPortrait = within(founder).getByRole('img', { name: 'Portrait of the studio’s founder and director' })
    expect(founderPortrait.tagName).toBe('IMG')
    expect(
      within(therapist).getByRole('img', { name: /Portrait of the studio’s music therapist \(awaiting/ }),
    ).toBeInTheDocument()

    for (const member of members) {
      expect(within(member).getByText(/their name, if they are willing to be named/)).toBeInTheDocument()
      expect(within(member).getByText(/qualifications, certification/)).toBeInTheDocument()
      expect(within(member).getByText(/a short bio/)).toBeInTheDocument()
    }
  })
})
