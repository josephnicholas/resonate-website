import { createRootRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { PageIntro } from '../components/PageIntro'
import { textLinkOnDark } from '../components/prose'
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
      {/* First in tab order: lets keyboard users jump past the nine-link nav. */}
      <a
        href="#content"
        className="fixed top-3 left-3 z-50 -translate-y-[200%] rounded-full bg-accent-600 px-6 py-3 font-heading font-semibold text-white focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700"
      >
        Skip to main content
      </a>
      <Nav />
      <div id="content" tabIndex={-1} className="flex-1 scroll-mt-24 outline-none">
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
        <Link to="/" className={textLinkOnDark}>
          Return to the home page
        </Link>
      </PageIntro>
    </main>
  )
}
