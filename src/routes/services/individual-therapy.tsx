import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/individual-therapy')({
  component: IndividualTherapyPage,
})

function IndividualTherapyPage() {
  return (
    <main>
      <h1>Individual Therapy</h1>
    </main>
  )
}
