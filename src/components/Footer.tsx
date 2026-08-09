export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-600 px-6 py-8 text-center font-body text-sm text-white">
      <p>
        &copy; {year} Resonate Music Therapy Studio. All rights reserved.
      </p>
    </footer>
  )
}
