import '@testing-library/jest-dom/vitest'

if (!window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })
}

if (!window.IntersectionObserver) {
  class MockIntersectionObserver {
    root = null
    rootMargin = ''
    thresholds: ReadonlyArray<number> = []
    disconnect() {}
    observe() {}
    unobserve() {}
    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }

  window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
}

if (!window.ResizeObserver) {
  class MockResizeObserver {
    disconnect() {}
    observe() {}
    unobserve() {}
  }

  window.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver
}
