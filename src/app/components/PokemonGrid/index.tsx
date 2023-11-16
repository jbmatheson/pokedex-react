import { Box, Grid } from '@mui/material'
import React, { Fragment, createRef } from 'react'

import { Pokemon } from '../../types/pokemon.types'
import PokemonCard from '../PokemonCard'

interface IProps {
  pokemons: Pokemon[]
  loadItems: () => void
  loading: boolean
}

const PokemonGrid: React.FunctionComponent<IProps> = (props) => {
  const { pokemons, loadItems, loading } = props
  const scrollContainerRef = createRef<HTMLDivElement>()

  return (
    <Fragment>
      {loading ? (
        <Box paddingY={6}>{/* <Spinner ={loading} /> */}</Box>
      ) : (
        <Box maxHeight="80vh" ref={scrollContainerRef} overflow="auto">
          <Grid container spacing={2}>
            {pokemons.map((pokemon, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Fragment>
  )
}

export default PokemonGrid
