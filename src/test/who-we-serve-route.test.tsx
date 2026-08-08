import { render, screen, within } from '@testing-library/react'
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'
import { routeTree } from '../routeTree.gen'

describe('/who-we-serve route', () => {
  it('renders the who we serve page', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/who-we-serve'] }),
    })
    render(<RouterProvider router={router} />)

    const main = await screen.findByRole('main')

    expect(within(main).getByRole('heading', { name: 'Who We Serve', level: 1 })).toBeInTheDocument()
    expect(within(main).getByText(/first draft/i)).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Populations We Serve', level: 2 })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Individuals and Groups of All Ages and Abilities', level: 3 }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Neurodivergent Children', level: 3 })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Companies', level: 3 })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Babies, Toddlers, and Preschoolers', level: 3 }),
    ).toBeInTheDocument()
    expect(within(main).getByText(/Tempo Tunes/)).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'View our services' })).toBeInTheDocument()
  })
})
