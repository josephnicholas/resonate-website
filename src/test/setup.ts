import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Vitest globals are off, so Testing Library can't register its own cleanup;
// without this, a second render in the same file stacks on top of the first.
afterEach(cleanup)
