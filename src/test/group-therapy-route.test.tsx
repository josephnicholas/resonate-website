import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/services/group-therapy route', () => {
  it('renders the group therapy page', async () => {
    const page = await renderRoute('/services/group-therapy')

    expect(page.getByRole('heading', { name: 'Group Therapy', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'What to Expect' })).toBeInTheDocument()
    expect(
      page.getByRole('heading', { name: 'Group Therapy vs. Individual Therapy' }),
    ).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'View our services' })).toHaveAttribute(
      'href',
      '/services',
    )
  })
})
