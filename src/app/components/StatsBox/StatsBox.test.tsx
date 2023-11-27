import { StatsBox } from '.'
import { render } from '@testing-library/react'

const mockStats = [
  {
    base_stat: 80,
    effort: 0,
    stat: {
      name: 'hp',
      url: 'https://pokeapi.co/api/v2/stat/1/',
    },
  },
  {
    base_stat: 82,
    effort: 0,
    stat: {
      name: 'attack',
      url: 'https://pokeapi.co/api/v2/stat/2/',
    },
  },
  {
    base_stat: 83,
    effort: 0,
    stat: {
      name: 'defense',
      url: 'https://pokeapi.co/api/v2/stat/3/',
    },
  },
  {
    base_stat: 100,
    effort: 2,
    stat: {
      name: 'special-attack',
      url: 'https://pokeapi.co/api/v2/stat/4/',
    },
  },
  {
    base_stat: 100,
    effort: 1,
    stat: {
      name: 'special-defense',
      url: 'https://pokeapi.co/api/v2/stat/5/',
    },
  },
  {
    base_stat: 80,
    effort: 0,
    stat: {
      name: 'speed',
      url: 'https://pokeapi.co/api/v2/stat/6/',
    },
  },
]

describe('StatsBox component', () => {
  it('should render the component onto the screen', () => {
    const statBoxRender = render(<StatsBox stats={mockStats} />)

    expect(statBoxRender).toBeTruthy()
  })
})
