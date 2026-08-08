import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/who-we-serve')({
  component: WhoWeServePage,
})

function WhoWeServePage() {
  return (
    <main>
      <h1>Who We Serve</h1>
    </main>
  )
}
