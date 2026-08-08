import { createFileRoute, Link } from '@tanstack/react-router'
import { Carousel } from '../components/Carousel'
import therapy1 from '../assets/therapy1 (Medium).jpg'
import therapy2 from '../assets/therapy2 (Medium).jpg'
import therapy3 from '../assets/therapy3.jpg'
import therapy4 from '../assets/therapy4.jpg'
import therapy5 from '../assets/therapy5.jpg'
import therapy6 from '../assets/therapy6.jpg'
import therapy7 from '../assets/therapy7.jpg'
import servicesBg from '../assets/services-bg.jpg'
import ttkBg from '../assets/kids-background-ttk.jpg'
import tempoTunesLogo from '../assets/tempokids.png'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const carouselSlides = [
  { src: therapy1, alt: 'A music therapist and a young client each playing a hand drum together' },
  { src: therapy2, alt: 'A music therapist and a child playing piano together' },
  { src: therapy3, alt: 'A music therapist leading a group therapy session with hand percussion instruments' },
  { src: therapy4, alt: 'Participants in a group music therapy session playing shakers and drums together' },
  { src: therapy5, alt: 'A music therapist guiding a group session with tambourines and hand drums' },
  { src: therapy6, alt: 'A music therapist facilitating discussion during a group therapy session' },
  { src: therapy7, alt: 'A music therapist engaging with participants in a group therapy circle' },
]

const services = [
  {
    title: 'Individual Therapy',
    description: "One-on-one music therapy sessions tailored to a single client's specific needs and goals.",
    to: '/services/individual-therapy',
  },
  {
    title: 'Group Therapy',
    description:
      'Music therapy sessions for neurodivergent children focused on improving social skills, run with at least three clients per session.',
    to: '/services/group-therapy',
  },
  {
    title: 'Adaptive Music Lessons',
    description: "Voice, piano, and guitar lessons adapted to an individual's abilities and needs.",
    to: '/services/adaptive-music-lessons',
  },
] as const

const tempoTunesPoints = [
  'Learning and experiencing music boosts the brain and can positively impact a child’s development.',
  'Classes are filled with fun, entertaining activities that are also beneficial to the child.',
  'We provide a clean, safe environment and a loving atmosphere for learning.',
  'A play-based program that uses music to achieve both musical and non-musical goals.',
  'A great way for parents to spend time with their child and for families to bond together.',
  'We use live music in almost all of our classes.',
]

function HomePage() {
  return (
    <main>
      <Carousel slides={carouselSlides} label="Photos from Resonate Music Therapy Studio" />

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="font-heading text-3xl font-semibold sm:text-4xl">
          Music Therapy and Child Enrichment Services
        </h1>
        <p className="mt-4 font-body text-lg leading-relaxed">
          Resonate Music Therapy Studio is the only music therapy studio in the Visayas, located in Dumaguete
          City, Negros Oriental. We offer specialized music therapy services to individuals and groups of all
          ages and abilities, and we&rsquo;re committed to providing inclusive, welcoming support to everyone who
          walks through our doors.
        </p>
      </section>

      <section className="bg-secondary-100 px-4 py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">What is Music Therapy</h2>
          <blockquote className="mt-4 font-body text-lg italic leading-relaxed">
            &ldquo;A clinical and evidence-based application of music interventions to accomplish individualized
            goals within the therapeutic relationship by a credentialed professional who has completed an
            approved music therapy program.&rdquo;
          </blockquote>
          <p className="mt-2 font-body text-sm not-italic text-neutral-600">
            &mdash; American Music Therapy Association
          </p>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center px-4 py-12"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-primary-900/70" />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-2xl font-semibold text-white sm:text-3xl">Our Services</h2>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <li key={service.to} className="rounded-lg bg-neutral-50 p-6 shadow-md">
                <h3 className="font-heading text-lg font-semibold">
                  <Link to={service.to}>{service.title}</Link>
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-neutral-700">{service.description}</p>
              </li>
            ))}

            <li className="rounded-lg bg-neutral-50 p-6 shadow-md">
              <h3 className="font-heading text-lg font-semibold">Company Team Building Activities</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-neutral-700">
                Group activities for corporate clients aimed at improving team communication, collaboration, and
                morale.
              </p>
            </li>
          </ul>

          <p className="mt-8 text-center">
            <Link to="/services" className="font-heading font-medium text-white underline hover:text-accent-200">
              View all services
            </Link>
          </p>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center px-4 py-12"
        style={{ backgroundImage: `url(${ttkBg})` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-primary-900/70" />
        <div className="relative mx-auto max-w-5xl text-center">
          <img src={tempoTunesLogo} alt="Tempo Tunes" className="mx-auto h-40 w-auto rounded-lg bg-neutral-50/90 p-3" />
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg leading-relaxed text-white">
            A 10-day program that offers music enrichment classes to babies, toddlers, and preschoolers.
          </p>

          <ul className="mx-auto mt-8 grid max-w-4xl gap-6 text-left sm:grid-cols-2">
            {tempoTunesPoints.map((point) => (
              <li key={point} className="rounded-lg bg-neutral-50 p-4 font-body text-sm leading-relaxed shadow-md">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
