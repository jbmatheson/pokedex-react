import { Avatar, Box, Divider } from '@mui/material'

import DataTableBox from '../DataTableBox'
import EvolutionBox from '../EvolutionBox'
import FlavorTextBox from '../FlavorTextBox'
import { Pokemon } from '../../types/pokemon.types'
import React from 'react'
import SpriteBox from '../SpriteBox'
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
  const types = get(pokemon, ['types'])
  const flavorTextEntries = get(pokemon, ['species', 'flavor_text_entries'])
  const blueEntry = find(flavorTextEntries, { language: { name: 'en' } })
  const flavorText = get(blueEntry, ['flavor_text'])
  const stats = get(pokemon, ['stats'])
  const shape = upperCase(get(pokemon, ['species', 'shape', 'name']))
  const isBaby = get(pokemon, ['species', 'is_baby'])
  const isLegendary = get(pokemon, ['species', 'is_legendary'])
  const isMythical = get(pokemon, ['species', 'is_mythical'])

  const evolutionChain = get(pokemon, ['species', 'evolution_chain'])

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  return (
    <>
      {/* <Box margin={1} rounding={2} borderStyle="sm"> */}
      <Box>
        <Box display="flex" alignItems="center" padding={3}>
          <Box paddingX={2}>
            {/* <Avatar name={name} src={frontDefaultSprite} size="md" /> */}
            <Avatar />
          </Box>

          <Box paddingX={2} flex="grow">
            <div>
              {name}{' '}
              {/* {(isBaby || isLegendary || isMythical) && (
                <Badge
                  text={`${isBaby ? t('common:baby') : ''}${
                    isLegendary ? t('common:legendary') : ''
                  }${isMythical ? t('common:mythical') : ''}`}
                  position="top"
                />
              )} */}
            </div>
            <div>#{pokemonID}</div>
          </Box>
        </Box>

        <Divider />

        {/* <Image
          alt={name}
          src={image}
          naturalWidth={475}
          naturalHeight={475}
          color="rgba(0, 0, 0, 0.04)"
        /> */}

        <Divider />

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
      </Box>

      <FlavorTextBox flavorText={flavorText} />

      <SpriteBox id={id} name={name} />

      <DataTableBox height={height} weight={weight} abilities={abilities} shape={shape} />

      <StatsBox stats={stats} />

      <EvolutionBox evolutionChain={evolutionChain} />
    </>
  )
}

export default PokemonDetails