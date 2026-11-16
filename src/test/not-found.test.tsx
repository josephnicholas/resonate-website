import { describe, expect, it } from 'vitest'
import { renderRoute } from './render-route'

describe('an unknown URL', () => {
  it('renders the not-found page inside the shell, with a way home', async () => {
    // Deliberately not a registered path, so step around renderRoute's path typing.
    const page = await renderRoute('/no-such-page' as never)

    expect(page.getByRole('heading', { name: 'Page Not Found', level: 1 })).toBeInTheDocument()
    expect(page.getByRole('link', { name: 'Return to the home page' })).toHaveAttribute('href', '/')
  })
})
