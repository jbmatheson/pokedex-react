import { Box, Button } from '@mui/material'

import DataTableBox from '../DataTableBox'
import EvolutionBox from '../EvolutionBox'
import FlavorTextBox from '../FlavorTextBox'
import { Pokemon } from '../../types/pokemon.types'
import React from 'react'
import RouterLink from '../RouterLink'
import { SpriteBox } from '../SpriteBox'
import StatsBox from '../StatsBox'
import capitalize from 'lodash/capitalize'
import find from 'lodash/find'
import get from 'lodash/get'
import { pokemonIDGenerator } from '../../../utils'
import upperCase from 'lodash/upperCase'
import { useTranslation } from 'react-i18next'

interface IProps {
  pokemon: Pokemon
}

const PokemonDetails: React.FC<IProps> = (props) => {
  const { pokemon } = props
  const { t } = useTranslation(['common'])

  const name = capitalize(get(pokemon, ['name']))
  const frontDefaultSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${get(
    pokemon,
    ['id']
  )}.png`
  const image =
    get(pokemon, ['sprites', 'other', 'official-artwork', 'front_default']) || frontDefaultSprite
  const id = get(pokemon, ['id'])
  const pokemonID = pokemonIDGenerator(id)
  const height = get(pokemon, ['height']) / 10
  const weight = get(pokemon, ['weight']) / 10
  const abilities = get(pokemon, ['abilities'])
  const flavorTextEntries = get(pokemon, ['species', 'flavor_text_entries'])
  const blueEntry = find(flavorTextEntries, { language: { name: 'en' } })
  const flavorText = get(blueEntry, ['flavor_text'])
  const stats = get(pokemon, ['stats'])
  const shape = upperCase(get(pokemon, ['species', 'shape', 'name']))
  const isBaby = get(pokemon, ['species', 'is_baby'])
  const isLegendary = get(pokemon, ['species', 'is_legendary'])
  const isMythical = get(pokemon, ['species', 'is_mythical'])

  const evolutionChain = get(pokemon, ['species', 'evolution_chain'])

  return (
    <Box
      sx={{
        width: { xs: '100%', lg: 'auto' },
        maxWidth: '80rem',
        alignItems: 'center',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          width: '100%',
        }}
      >
        <Box
          sx={{
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            padding: '0 0 2rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: '1rem',
              borderBottomLeftRadius: 0,
              minWidth: '5.3rem',
              boxShadow: 'none',
              height: '3rem',
            }}
          >
            <RouterLink to={`/`}>
              <Box sx={{ color: 'white' }}>Back</Box>
            </RouterLink>
          </Button>

          <FlavorTextBox flavorText={flavorText} />

          {(isBaby || isLegendary || isMythical) && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: 'red',
                borderBottomLeftRadius: '1rem',
                color: 'white',
                padding: '0.75rem',
              }}
            >
              {isBaby ? t('common:baby') : ''}
              {isLegendary ? t('common:legendary') : ''}
              {isMythical ? t('common:mythical') : ''}
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'space-between',
            alighItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: { xs: '100%', lg: 'auto' },
            }}
          >
            <Box sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
              {name} #{Number(pokemonID)}
            </Box>
            <Box sx={{ height: '425px', padding: '0 1.5rem 1.5rem 1rem' }}>
              <Box
                component="img"
                alt={name}
                src={image}
                sx={{ objectFit: 'contain', height: '100%', width: '100%' }}
              />
            </Box>

            <StatsBox stats={stats} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', lg: 'flex-end' },
            }}
          >
            <EvolutionBox evolutionChain={evolutionChain} />
            <SpriteBox id={id} name={name} />

            <DataTableBox
              height={height}
              weight={weight}
              abilities={abilities}
              shape={shape}
              pokemon={pokemon}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PokemonDetails
