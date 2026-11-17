import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('/who-we-serve route', () => {
  it('renders the who we serve page', async () => {
    const page = await renderRoute('/who-we-serve')

    expect(page.getByRole('heading', { name: 'Who We Serve', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('note')).toBeInTheDocument()

    expect(page.getByRole('heading', { name: 'Needs We Work On', level: 2 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Communication', level: 3 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Social Skills', level: 3 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Emotional Regulation', level: 3 })).toBeInTheDocument()
    expect(page.getByRole('heading', { name: 'Motor Skills', level: 3 })).toBeInTheDocument()

    expect(page.getByRole('heading', { name: 'Conditions We Support', level: 2 })).toBeInTheDocument()
    expect(page.getByText(/conditions and diagnoses/)).toHaveTextContent(/^To confirm:/)

    expect(page.getByRole('heading', { name: 'Who Comes to Us', level: 2 })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Neurodivergent Children' })).toHaveAttribute(
      'href',
      '/services/group-therapy',
    )
    expect(page.getByRole('link', { name: 'Babies, Toddlers, and Preschoolers' })).toHaveAttribute(
      'href',
      '/tempo-tunes',
    )
    expect(page.getByRole('heading', { name: 'Companies', level: 3 })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'View our services' })).toBeInTheDocument()
  })
})
