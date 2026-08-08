import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/adaptive-music-lessons')({
  component: AdaptiveMusicLessonsPage,
})

function AdaptiveMusicLessonsPage() {
  return (
    <main>
      <h1>Adaptive Music Lessons</h1>
    </main>
  )
}
