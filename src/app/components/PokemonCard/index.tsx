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
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${get(
    pokemon,
    ['id']
  )}.svg`
  const pokemonID = pokemonIDGenerator(get(pokemon, ['id']))
  const height = get(pokemon, ['height']) / 10
  const weight = get(pokemon, ['weight']) / 10
  const types = get(pokemon, ['types'])

  return (
    <Box sx={{ margin: '0.5rem', borderRadius: '1rem' }}>
      <RouterLink to={`/pokemon/${name}/`}>
        <Card sx={{ borderRadius: '1rem' }}>
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingY: '2.5rem',
              display: 'flex',
              height: '140px',
              width: '100%',
            }}
          >
            <Box sx={{ fontFamily: 'Roboto', paddingTop: '1rem' }}>{Number(pokemonID)}</Box>
            <Box sx={{ height: '140px', padding: '1rem' }}>
              <Box
                component="img"
                src={image}
                sx={{ objectFit: 'contain', height: '100%', width: '100%' }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingY: '1rem',
              paddingX: '1.5rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                gap: '0.5rem',
                fontFamily: 'Roboto',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              {capitalize(name)}
            </Box>
            <Box
              sx={{
                paddingTop: '.5rem',
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {types.map((item: object) => {
                const pokemonType = get(item, ['type', 'name'])

                return (
                  <span key={pokemonType} className={pokemonType}>
                    {pokemonType}
                  </span>
                )
              })}
            </Box>
          </Box>

          <Box
            sx={{
              paddingY: '1rem',
              paddingX: { xs: '.5rem', lg: '1.5rem' },
              lineClamp: '1',
              fontFamily: 'Roboto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: { xs: 'center', lg: 'flex-start' },
              flexDirection: { xs: 'column', lg: 'row' },
            }}
          >
            <div>
              {t('common:height')}: {height} m
            </div>

            <div>
              {t('common:weight')}: {weight} kg
            </div>
          </Box>
        </Card>
      </RouterLink>
    </Box>
  )
}

export default PokemonCard
