import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/services/individual-therapy route', () => {
  it('renders the individual therapy page', async () => {
    const page = await renderRoute('/services/individual-therapy')

    expect(page.getByRole('heading', { name: 'Individual Therapy', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'What to Expect' })).toBeInTheDocument()
    expect(
      page.getByRole('heading', { name: 'Individual Therapy vs. Group Therapy' }),
    ).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'View our services' })).toHaveAttribute(
      'href',
      '/services',
    )
  })
})
