import { render, screen, within } from '@testing-library/react'
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router'
import { routeTree, type FileRouteTypes } from '../routeTree.gen'

/**
 * Mounts the real route tree at `path` (Nav/Footer shell included) and returns
 * queries scoped to the page's `<main>`, so assertions can't accidentally match
 * the shell.
 */
export async function renderRoute(path: FileRouteTypes['to']) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [path] }),
  })
  render(<RouterProvider router={router} />)

  return within(await screen.findByRole('main'))
}
