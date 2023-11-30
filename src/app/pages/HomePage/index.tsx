import { Box, Button } from '@mui/material'
import {
  FETCH_POKEDEX_ERROR,
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
} from '../../constants/pokedex.constants'
import React, { Fragment, Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../reducers'
import Spinner from 'react-spinner'
import { fetchPokemonsAction } from '../../actions/pokedex.action'
import isEmpty from 'lodash/isEmpty'
import { searchQueriesState } from '../../recoil/searchQueries'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

// Lazy Load
const PokemonGrid = lazy(() => import('../../components/PokemonGrid'))
const ErrorToast = lazy(() => import('../../components/ErrorToast'))

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const anchorRef = useRef(null)
  const [query, setQuery] = useState('')
  const [searchError, setSearchError] = useState('')
  const [searching, setSearching] = useState(false)

  const searchQueries = useRecoilValue(searchQueriesState)

  const { pokemonList, url, error, loading } = useSelector((state: RootState) => ({
    pokemonList: state.pokedex.pokemonList,
    url: state.pokedex.url,
    error: state.pokedex.error,
    loading: state.pokedex.loading,
  }))

  const handleFetch = useCallback(() => {
    dispatch({
      type: FETCH_POKEDEX_REQUEST,
    })

    fetchPokemonsAction(url)
      .then((res) => {
        dispatch({
          type: FETCH_POKEDEX_SUCCESS,
          payload: res,
        })
      })
      .catch((err) => {
        dispatch({
          type: FETCH_POKEDEX_ERROR,
          payload: 'Oops! Something went wrong. Please try again later.',
        })
      })
  }, [url])

  useEffect(() => {
    if (isEmpty(pokemonList)) {
      handleFetch()
    }
  }, [])

  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              padding: '1rem',
              gap: '1rem',
              fontStyle: 'italic',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {searchQueries && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',

                  flexDirection: 'column',
                  gap: '1rem',
                  maxWidth: { xs: 'calc(100% - 2rem)', lg: '80rem' },
                }}
              >
                <Box
                  sx={{
                    fontWeight: 'semibold',
                    maxWidth: { xs: 'unset', lg: '40ch' },
                    textAlign: 'center',
                    fontSize: { xs: '1rem', lg: '1.25rem' },
                  }}
                >
                  Click a previous search to view it again in detail.
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '.5rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}
                >
                  {Object.keys(searchQueries).map((name, index) => (
                    <Button
                      key={`${name}-${index}`}
                      variant="contained"
                      color="success"
                      onClick={() => {
                        navigate(`/pokemon/${name}`)
                      }}
                      sx={{
                        display: 'flex',
                        maxWidth: 'fit-content',
                        padding: '.5rem 1rem .25rem 1rem',
                        color: 'white',
                        borderRadius: '.5rem',
                        fontWeight: 'bold',
                        alignItems: 'center',
                        filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,.5))',
                      }}
                    >
                      {name}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            fontWeight: 'bold',
            marginTop: { xs: '1rem', lg: '1.5rem' },
            maxWidth: { xs: '24ch', lg: '36ch' },
            textAlign: 'center',
            fontSize: { xs: '1.25rem', lg: '1.75rem' },
          }}
        >
          Click a card to view it in detail.
        </Box>

        <PokemonGrid pokemons={pokemonList} loadItems={handleFetch} loading={loading} />

        {error && !loading && (
          <Suspense
            fallback={
              <Box paddingY={6}>
                <Spinner />
              </Box>
            }
          >
            <ErrorToast message={error} />
          </Suspense>
        )}
      </Box>
    </Fragment>
  )
}

export default HomePage
