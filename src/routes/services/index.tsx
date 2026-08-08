import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/')({
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <main>
      <h1>Our Services</h1>
    </main>
  )
}
