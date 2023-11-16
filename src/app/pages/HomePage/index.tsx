import { Box, Button, FormLabel, TextField } from '@mui/material'
import {
  FETCH_POKEDEX_ERROR,
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
} from '../../constants/pokedex.constants'
import React, { Fragment, Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
import { SEARCH_ERROR, SEARCH_SUCCESS } from '../../constants/search.constants'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../reducers'
import Spinner from 'react-spinner'
import { fetchPokemonsAction } from '../../actions/pokedex.action'
import isEmpty from 'lodash/isEmpty'
import { searchAction } from '../../actions/search.action'
import { searchQueriesState } from '../../recoil/searchQueries'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { useTranslation } from 'react-i18next'

// Lazy Load
const PokemonGrid = lazy(() => import('../../components/PokemonGrid'))
const ErrorToast = lazy(() => import('../../components/ErrorToast'))

const HomePage: React.FunctionComponent = () => {
  const { t } = useTranslation(['common'])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const anchorRef = useRef(null)
  const [query, setQuery] = useState('')
  const [searchError, setSearchError] = useState('')
  const [searching, setSearching] = useState(false)

  const [searchQueries, setSearchQueries] = useRecoilState(searchQueriesState)

  const search = () => {
    setSearching(true)
    const url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`

    searchAction(url)
      .then((res) => {
        dispatch({
          type: SEARCH_SUCCESS,
          payload: res,
        })

        setSearching(false)

        setSearchQueries((prev: any) => ({ ...prev, [query.toLowerCase()]: query }))
        navigate(`/pokemon/${query.toLowerCase()}`)
      })
      .catch((err) => {
        dispatch({
          type: SEARCH_ERROR,
          payload: 'Oops! Something went wrong. Please try again later.',
        })

        setSearchError(t('common:errors.search-error'))
        setSearching(false)
      })
  }

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
              fontSize: { xs: '1.85rem', lg: '2.5rem' },
              maxWidth: '24ch',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Enter a Pokemon name to view in detail
          </Box>
          <Box
            sx={{
              display: 'flex',
              paddingX: '1rem',
              gap: '1rem',
              alignItems: 'center',
              flexDirection: { xs: 'column', lg: 'row' },
            }}
            ref={anchorRef}
          >
            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', position: 'relative' }}>
              <TextField
                id="searchField"
                placeholder="Search"
                variant="outlined"
                sx={{ backgroundColor: 'white', borderRadius: '5px', width: '20rem' }}
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    e.stopPropagation()
                    search()
                  }
                }}
                value={query}
                error={!!searchError}
              />
              {searchError && (
                <FormLabel sx={{ color: 'red', position: 'absolute', bottom: '-24px' }}>
                  {searchError}
                </FormLabel>
              )}
            </Box>
            <Button
              disabled={searching || !query}
              type="submit"
              variant="contained"
              color="primary"
              onClick={search}
              sx={{ display: 'flex' }}
            >
              Submit
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              padding: '1rem',
              gap: '1rem',
              alignItems: 'center',
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
                    maxWidth: { xs: '24ch', lg: '28ch' },
                    textAlign: 'center',
                    fontSize: { xs: '1rem', lg: '1.25rem' },
                  }}
                >
                  Click on of the previous searches to view it again in detail
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
                        alignItems: 'center',
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
            fontWeight: 'semibold',
            marginTop: '2.5rem',
            maxWidth: { xs: '24ch', lg: '36ch' },
            textAlign: 'center',
            fontSize: { xs: '1.25rem', lg: '1.75rem' },
          }}
        >
          Or, scroll down to view all the Pokemons. Click any card to view it in detail.
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
