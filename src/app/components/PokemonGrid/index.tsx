import { Box, Button, Container, Grid, Stack } from '@mui/material'
import React, { createRef } from 'react'

import { Pokemon } from '../../types/pokemon.types'
import PokemonCard from '../PokemonCard'
import Spinner from 'react-spinner'

interface IProps {
  pokemons: Pokemon[]
  loadItems: () => void
  loading: boolean
}

const PokemonGrid: React.FunctionComponent<IProps> = (props) => {
  const { pokemons, loadItems, loading } = props
  const scrollContainerRef = createRef<HTMLDivElement>()

  return (
    <Container sx={{ paddingX: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
      {loading ? (
        <Box sx={{ paddingY: '3rem' }}>
          <Spinner />
        </Box>
      ) : (
        <Stack sx={{ flexDirection: 'column', gap: '1rem', marginTop: '2.5rem' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '80rem',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
            ref={scrollContainerRef}
          >
            <Grid container spacing={2}>
              {pokemons.map((pokemon, index) => (
                <Grid key={index} item xs={6} lg={4} xl={3}>
                  <PokemonCard pokemon={pokemon} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Button
            variant="contained"
            color="error"
            onClick={loadItems}
            sx={{ alignSelf: 'center', marginTop: '1rem', marginBottom: '8rem' }}
          >
            Load More
          </Button>
        </Stack>
      )}
    </Container>
  )
}

export default PokemonGrid
