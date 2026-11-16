import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { documentTitle } from '../site/routes'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })

  // index.html ships one static title; give each page its own once the app is running.
  useEffect(() => {
    document.title = documentTitle(pathname)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
