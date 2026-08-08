interface ImagePlaceholderProps {
  description: string
  className?: string
}

export function ImagePlaceholder({ description, className }: ImagePlaceholderProps) {
  return (
    <figure
      role="img"
      aria-label={description}
      className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-secondary-400 bg-secondary-100 p-6 text-center ${className ?? ''}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-10 w-10 text-secondary-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <figcaption className="font-body text-sm text-primary-700">{description}</figcaption>
    </figure>
  )
}
