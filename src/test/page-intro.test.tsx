import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PageIntro } from '../components/PageIntro'

describe('PageIntro', () => {
  it('renders the title as the h1 and the lead copy', () => {
    render(<PageIntro title="About Us">Lead copy.</PageIntro>)

    expect(screen.getByRole('heading', { name: 'About Us', level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Lead copy.')).toBeInTheDocument()
  })

  it('shows the draft notice only when the page is marked draft', () => {
    const { rerender } = render(<PageIntro title="About Us">Lead copy.</PageIntro>)
    expect(screen.queryByRole('note')).not.toBeInTheDocument()

    rerender(
      <PageIntro title="About Us" draft>
        Lead copy.
      </PageIntro>,
    )
    expect(screen.getByRole('note')).toBeInTheDocument()
  })
})
