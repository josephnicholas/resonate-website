import { createRootRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { PageIntro } from '../components/PageIntro'
import { documentTitle } from '../site/routes'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
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

// Shown inside the root layout for any URL that matches no route. GitHub Pages
// serves 404.html (a copy of index.html) for those, so the app boots and lands here.
function NotFoundPage() {
  return (
    <main>
      <PageIntro title="Page Not Found">
        We couldn&rsquo;t find the page you were looking for. It may have moved, or the link may be out of
        date.{' '}
        <Link to="/" className="font-heading font-medium text-primary-600 underline hover:text-accent-600">
          Return to the home page
        </Link>
      </PageIntro>
    </main>
  )
}
