import { render, screen, within } from '@testing-library/react'
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'
import { routeTree } from '../routeTree.gen'

describe('/ route', () => {
  it('renders the home page', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/'] }),
    })
    render(<RouterProvider router={router} />)

    const main = await screen.findByRole('main')

    expect(
      within(main).getByRole('heading', { name: 'Music Therapy and Child Enrichment Services' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'What is Music Therapy' })).toBeInTheDocument()
    expect(within(main).getByText(/American Music Therapy Association/)).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'Individual Therapy' })).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'Group Therapy' })).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'Adaptive Music Lessons' })).toBeInTheDocument()
    expect(within(main).getByText('Company Team Building Activities')).toBeInTheDocument()
    expect(within(main).getByAltText('Tempo Tunes')).toBeInTheDocument()
  })
})
