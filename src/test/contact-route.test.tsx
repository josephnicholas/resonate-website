import { render, screen, within } from '@testing-library/react'
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'
import { routeTree } from '../routeTree.gen'

describe('/contact route', () => {
  it('renders the contact page', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/contact'] }),
    })
    render(<RouterProvider router={router} />)

    const main = await screen.findByRole('main')

    expect(within(main).getByRole('heading', { name: 'Contact', level: 1 })).toBeInTheDocument()
    expect(within(main).getByText(/first draft/i)).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Get in Touch', level: 2 })).toBeInTheDocument()

    const instagramLink = within(main).getByRole('link', { name: 'Instagram' })
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/resonatemusictherapystudio')

    const facebookLink = within(main).getByRole('link', { name: 'Facebook' })
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/resonatemtstudio')

    expect(within(main).getByRole('heading', { name: 'About Our Contact Form', level: 2 })).toBeInTheDocument()
    expect(within(main).getByText(/don.t have a working contact form/i)).toBeInTheDocument()
  })
})
