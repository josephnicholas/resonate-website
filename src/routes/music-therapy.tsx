import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/music-therapy')({
  component: MusicTherapyPage,
})

function MusicTherapyPage() {
  return (
    <main>
      <h1>Music Therapy</h1>
    </main>
  )
}
