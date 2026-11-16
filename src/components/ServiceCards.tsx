import { services } from '../site/services'
import { Card, CardGrid } from './CardGrid'

/**
 * The studio's four Services as a card grid, straight from the Services
 * catalogue. A Service with a page of its own gets a linked title.
 * Needs a wide container to go four-across.
 */
export function ServiceCards() {
  return (
    <CardGrid columns={4}>
      {services.map((service) => (
        <Card key={service.name} title={service.name} to={service.path}>
          {service.description}
        </Card>
      ))}
    </CardGrid>
  )
}
