import { render, screen, within } from '@testing-library/react'
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'
import { routeTree } from '../routeTree.gen'

describe('/music-therapy route', () => {
  it('renders the music therapy page', async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ['/music-therapy'] }),
    })
    render(<RouterProvider router={router} />)

    const main = await screen.findByRole('main')

    expect(within(main).getByRole('heading', { name: 'Music Therapy', level: 1 })).toBeInTheDocument()
    expect(within(main).getByText(/first draft/i)).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'What is Music Therapy' })).toBeInTheDocument()
    expect(within(main).getByText(/American Music Therapy Association/)).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'What to Expect in a Session' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Music Therapy vs. Adaptive Music Lessons' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'View our services' })).toBeInTheDocument()
  })
})
