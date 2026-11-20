import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen'

// A new page opens at its top instantly: without `instant`, the stylesheet's
// `scroll-behavior: smooth` (meant for in-page anchors) animates the reset, and
// the visitor watches the whole page scroll past. Back/forward restore where they were.
const router = createRouter({ routeTree, scrollRestoration: true, scrollRestorationBehavior: 'instant' })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
