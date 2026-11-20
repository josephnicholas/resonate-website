import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/getting-started route', () => {
  it('renders the getting started page', async () => {
    const page = await renderRoute('/getting-started')

    expect(page.getByRole('heading', { name: 'Getting Started', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'How a First Session Works', level: 2 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: '1. Get in Touch', level: 3 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: '3. Your First Visit', level: 3 })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Contact page' })).toHaveAttribute('href', '/contact')
    expect(page.getByRole('heading', { name: 'Fees', level: 2 })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Read the FAQ' })).toHaveAttribute('href', '/faq')
  })

  it('states no fee while the owner has not decided whether to show them', async () => {
    const page = await renderRoute('/getting-started')

    expect(page.getByText(/whether fees are shown here/)).toBeInTheDocument()
    expect(page.queryByText(/₱|PHP|\bpesos?\b/i)).not.toBeInTheDocument()
  })
})
