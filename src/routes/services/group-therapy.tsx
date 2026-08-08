import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/group-therapy')({
  component: GroupTherapyPage,
})

function GroupTherapyPage() {
  return (
    <main>
      <h1>Group Therapy</h1>
    </main>
  )
}
