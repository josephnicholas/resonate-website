import { render, screen, within } from '@testing-library/react'
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'
import { routeTree } from '../routeTree.gen'

describe('/services/individual-therapy route', () => {
  it('renders the individual therapy page', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/services/individual-therapy'] }),
    })
    render(<RouterProvider router={router} />)

    const main = await screen.findByRole('main')

    expect(within(main).getByRole('heading', { name: 'Individual Therapy', level: 1 })).toBeInTheDocument()
    expect(within(main).getByText(/first draft/i)).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'What to Expect' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Individual Therapy vs. Group Therapy' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'View our services' })).toHaveAttribute(
      'href',
      '/services',
    )
  })
})
