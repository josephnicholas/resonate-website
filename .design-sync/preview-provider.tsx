// design-sync support module (see .design-sync/NOTES.md).
//
// `Nav` calls `useRouterState` and renders TanStack Router `<Link>`s, both of
// which throw outside a router. Preview cards mount components standalone, so
// they need router context — but NOT the router's rendered route tree, which is
// what `<RouterProvider>` gives you (it ignores children and renders matches).
// `<RouterContextProvider>` supplies the context and renders children instead.
//
// The route tree here mirrors the site's nine URLs so `<Link to>` resolves real
// hrefs and `activeProps` highlights correctly; the components are stubs because
// nothing here ever renders a route.
//
// Wired via `cfg.extraEntries` + `cfg.provider` in .design-sync/config.json.

import type { ReactNode } from 'react'
import {
  RouterContextProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'

const ROUTES = [
  '/',
  '/music-therapy',
  '/who-we-serve',
  '/services',
  '/services/individual-therapy',
  '/services/group-therapy',
  '/services/adaptive-music-lessons',
  '/about',
  '/contact',
]

const rootRoute = createRootRoute()

const routeTree = rootRoute.addChildren(
  ROUTES.map((path) =>
    createRoute({ getParentRoute: () => rootRoute, path, component: () => null }),
  ),
)

const router = createRouter({
  routeTree,
  history: createMemoryHistory({ initialEntries: ['/'] }),
})

export function PreviewRouterProvider({ children }: { children?: ReactNode }) {
  return <RouterContextProvider router={router}>{children}</RouterContextProvider>
}
