import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/tempo-tune route', () => {
  it('renders the Tempo Tunes page', async () => {
    const page = await renderRoute('/tempo-tune')

    expect(page.getByRole('heading', { name: 'Tempo Tune', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByAltText('Tempo Tunes logo')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'What Happens in Class', level: 2 })).toBeInTheDocument()
    expect(page.getByText(/live music in almost all of our classes/)).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Ages, Schedule, and Enrolment', level: 2 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Who It Is For', level: 3 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Schedule', level: 3 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'How to Enrol', level: 3 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Enrichment, Not Therapy', level: 2 })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'music therapy at Resonate' })).toHaveAttribute('href', '/music-therapy')
    expect(page.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '/contact')
  })

  it('marks the schedule and enrolment details as still to be confirmed', async () => {
    const page = await renderRoute('/tempo-tune')

    expect(page.getAllByText(/To confirm:/)).toHaveLength(4)
  })
})
