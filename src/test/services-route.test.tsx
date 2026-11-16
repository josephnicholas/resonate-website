import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/services route', () => {
  it('renders the services overview page', async () => {
    const page = await renderRoute('/services')

    expect(page.getByRole('heading', { name: 'Our Services', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()

    const individualLink = page.getByRole('link', { name: 'Individual Therapy' })
    expect(individualLink).toHaveAttribute('href', '/services/individual-therapy')

    const groupLink = page.getByRole('link', { name: 'Group Therapy' })
    expect(groupLink).toHaveAttribute('href', '/services/group-therapy')

    const adaptiveLink = page.getByRole('link', { name: 'Adaptive Music Lessons' })
    expect(adaptiveLink).toHaveAttribute('href', '/services/adaptive-music-lessons')

    expect(page.getByText('Company Team Building Activities')).toBeInTheDocument()
    expect(
      page.queryByRole('link', { name: 'Company Team Building Activities' }),
    ).not.toBeInTheDocument()

    expect(page.getByRole('link', { name: 'See who we serve' })).toHaveAttribute(
      'href',
      '/who-we-serve',
    )
  })
})
