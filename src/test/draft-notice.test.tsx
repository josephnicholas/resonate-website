import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DraftNotice } from '../components/DraftNotice'

describe('DraftNotice', () => {
  // The one place the notice's wording is pinned. Route tests only check that
  // a draft page carries a note, so rewording the notice touches this test alone.
  it('tells the reader the page is a first draft awaiting review', () => {
    render(<DraftNotice />)

    expect(screen.getByRole('note')).toHaveTextContent(/first draft for the studio owner.s review/i)
  })
})
