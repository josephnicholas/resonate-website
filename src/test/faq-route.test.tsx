import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/faq route', () => {
  it('renders the FAQ page', async () => {
    const page = await renderRoute('/faq')

    expect(page.getByRole('heading', { name: 'Frequently Asked Questions', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'About Music Therapy', level: 2 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Practical Questions', level: 2 })).toBeInTheDocument()
    expect(page.getByText('What is music therapy?')).toBeInTheDocument()
    expect(page.getByText(/American Music Therapy Association/)).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Getting Started page' })).toHaveAttribute('href', '/getting-started')
    expect(page.getByRole('link', { name: 'Tempo Tunes' })).toHaveAttribute('href', '/tempo-tunes')
    expect(page.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '/contact')
  })

  it('pairs every question with an answer', async () => {
    const page = await renderRoute('/faq')

    const questions = page.getAllByRole('term')
    expect(questions).toHaveLength(12)
    expect(page.getAllByRole('definition')).toHaveLength(questions.length)
  })
})
