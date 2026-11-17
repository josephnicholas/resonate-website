import video from '../assets/resonate-video-ad.mp4'
import poster from '../assets/video-poster.jpg'

/**
 * The studio's two-minute introduction film. Nothing is downloaded until the
 * visitor presses play (`preload="none"`), and it never autoplays.
 * Its on-screen text is burned into the picture, so there is no captions track.
 */
export function StudioVideo() {
  return (
    <video
      controls
      playsInline
      preload="none"
      poster={poster}
      aria-label="Resonate Music Therapy Studio introduction film, two minutes"
      className="aspect-video w-full rounded-2xl bg-primary-900 shadow-lg"
    >
      <source src={video} type="video/mp4" />
    </video>
  )
}
