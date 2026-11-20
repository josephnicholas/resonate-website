import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ImagePlaceholder } from '../components/ImagePlaceholder'

describe('ImagePlaceholder', () => {
  it('exposes the description as its accessible name', () => {
    render(<ImagePlaceholder description="A therapist playing guitar with a young client" />)

    expect(
      screen.getByRole('img', { name: 'A therapist playing guitar with a young client' }),
    ).toBeInTheDocument()
  })

  it('also renders the description as visible caption text', () => {
    render(<ImagePlaceholder description="Group therapy session in the studio's main room" />)

    expect(screen.getByText("Group therapy session in the studio's main room")).toBeVisible()
  })
})
