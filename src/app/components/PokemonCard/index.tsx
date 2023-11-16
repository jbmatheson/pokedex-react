import { Box, Card } from '@mui/material'

import { Pokemon } from '../../types/pokemon.types'
import React from 'react'
import RouterLink from '../RouterLink'
import capitalize from 'lodash/capitalize'
import get from 'lodash/get'
import { pokemonIDGenerator } from '../../../utils'
import { useTranslation } from 'react-i18next'

interface IProps {
  pokemon?: Pokemon | any
}

const PokemonCard: React.FC<IProps> = (props) => {
  const { pokemon } = props
  const { t } = useTranslation(['common'])

  const name = get(pokemon, ['name'])
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${get(
    pokemon,
    ['id']
  )}.png`
  const pokemonID = pokemonIDGenerator(get(pokemon, ['id']))
  const height = get(pokemon, ['height']) / 10
  const weight = get(pokemon, ['weight']) / 10
  const types = get(pokemon, ['types'])

  return (
    // <Box margin={1} rounding={2} padding={2} borderStyle="sm">
    <Box>
      <RouterLink to={`/pokemon/${name}/`} hoverStyle="none">
        {/* <Card image={<Avatar name={name} src={image} />}> */}
        <Card>
          <Box paddingX={3} paddingY={2}>
            {/* <Text color="gray">#{pokemonID}</Text> */}
            <div>#{pokemonID}</div>

            {/* <Heading size="md" truncate> */}
            <div>{capitalize(name)}</div>
            {/* </Heading> */}
          </Box>

          <Box paddingX={3} paddingY={2}>
            {/* <Text lineClamp={1}> */}
            <div>
              {t('common:height')}: {height} m
            </div>

            {/* <Text lineClamp={1}> */}
            <div>
              {t('common:weight')}: {weight} kg
            </div>
          </Box>

          <Box paddingX={3} paddingY={2} display="flex" justifyContent="around" alignItems="center">
            {types.map((item: object) => {
              const pokemonType = get(item, ['type', 'name'])

              return (
                <span key={pokemonType} className={pokemonType}>
                  {pokemonType}
                </span>
              )
            })}
          </Box>
        </Card>
      </RouterLink>
    </Box>
  )
}

export default PokemonCard
