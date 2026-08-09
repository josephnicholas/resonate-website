import { render, screen, within } from '@testing-library/react'
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'
import { routeTree } from '../routeTree.gen'

describe('/services route', () => {
  it('renders the services overview page', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/services'] }),
    })
    render(<RouterProvider router={router} />)

    const main = await screen.findByRole('main')

    expect(within(main).getByRole('heading', { name: 'Our Services', level: 1 })).toBeInTheDocument()
    expect(within(main).getByText(/first draft/i)).toBeInTheDocument()

    const individualLink = within(main).getByRole('link', { name: 'Individual Therapy' })
    expect(individualLink).toHaveAttribute('href', '/services/individual-therapy')

    const groupLink = within(main).getByRole('link', { name: 'Group Therapy' })
    expect(groupLink).toHaveAttribute('href', '/services/group-therapy')

    const adaptiveLink = within(main).getByRole('link', { name: 'Adaptive Music Lessons' })
    expect(adaptiveLink).toHaveAttribute('href', '/services/adaptive-music-lessons')

    expect(within(main).getByText('Company Team Building Activities')).toBeInTheDocument()
    expect(
      within(main).queryByRole('link', { name: 'Company Team Building Activities' }),
    ).not.toBeInTheDocument()

    expect(within(main).getByRole('link', { name: 'See who we serve' })).toHaveAttribute(
      'href',
      '/who-we-serve',
    )
  })
})
