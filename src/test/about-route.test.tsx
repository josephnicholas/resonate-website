import { render, screen, within } from '@testing-library/react'
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'
import { routeTree } from '../routeTree.gen'

describe('/about route', () => {
  it('renders the about page', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/about'] }),
    })
    render(<RouterProvider router={router} />)

    const main = await screen.findByRole('main')

    expect(within(main).getByRole('heading', { name: 'About Us', level: 1 })).toBeInTheDocument()
    expect(within(main).getByText(/first draft/i)).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Mission', level: 2 })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Where We Are', level: 2 })).toBeInTheDocument()
    expect(within(main).getByText(/Dumaguete City, Negros Oriental/)).toBeInTheDocument()
    expect(within(main).getByText(/only music therapy studio in the Visayas/)).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'Contact us' })).toBeInTheDocument()
  })
})
