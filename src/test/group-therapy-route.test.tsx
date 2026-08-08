import { render, screen, within } from '@testing-library/react'
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'
import { routeTree } from '../routeTree.gen'

describe('/services/group-therapy route', () => {
  it('renders the group therapy page', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/services/group-therapy'] }),
    })
    render(<RouterProvider router={router} />)

    const main = await screen.findByRole('main')

    expect(within(main).getByRole('heading', { name: 'Group Therapy', level: 1 })).toBeInTheDocument()
    expect(within(main).getByText(/first draft/i)).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'What to Expect' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Group Therapy vs. Individual Therapy' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'View our services' })).toHaveAttribute(
      'href',
      '/services',
    )
  })
})
