import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('Footer', () => {
  it('renders the current year in the copyright line', async () => {
    await renderRoute('/')
    const footer = within(screen.getByRole('contentinfo'))

    const currentYear = new Date().getFullYear().toString()
    expect(footer.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })

  it('links to every page and carries the studio contact details', async () => {
    await renderRoute('/')
    const footer = within(screen.getByRole('contentinfo'))

    expect(footer.getByRole('link', { name: 'Who We Serve' })).toHaveAttribute('href', '/who-we-serve')
    expect(footer.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
    expect(footer.getByRole('link', { name: '0917 507 0990' })).toHaveAttribute('href', 'tel:+639175070990')
    expect(footer.getByText(/D & I Tinagan Building/)).toBeInTheDocument()
  })
})
