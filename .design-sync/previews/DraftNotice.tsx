import { DraftNotice } from 'resonate-website'

// Standalone, as it appears on every unfinished page.
export const Notice = () => <DraftNotice />

// How the site actually places it: directly under the page's h1, above the
// first body section, so a reviewer meets the caveat before the content.
export const AbovePageContent = () => (
  <div className="bg-neutral-50 px-4 py-8">
    <h1 className="text-center font-heading text-3xl font-semibold text-primary-700">Individual Therapy</h1>
    <DraftNotice />
    <p className="mx-auto mt-6 max-w-2xl text-center font-body text-neutral-700">
      One-on-one music therapy sessions tailored to a single client&rsquo;s specific needs and goals.
    </p>
  </div>
)
