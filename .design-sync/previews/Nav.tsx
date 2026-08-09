import { Nav } from 'resonate-website'

// The site header, exactly as every page mounts it. Nav owns its own routing:
// it reads the active route from context and highlights the matching link, so
// there is nothing to configure — place it once at the top of the page.
export const SiteHeader = () => <Nav />
