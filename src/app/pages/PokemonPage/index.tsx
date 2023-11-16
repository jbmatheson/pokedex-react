import {
  FETCH_POKEMON_ERROR,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from '../../constants/pokemon.constants'
import React, { Fragment, Suspense, lazy, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box } from '@mui/material'
import { RootState } from '../../reducers'
import Spinner from 'react-spinner'
import { fetchPokemonAction } from '../../actions/pokemon.action'
import isEmpty from 'lodash/isEmpty'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Lazy Load
const PokemonDetails = lazy(() => import('../../components/PokemonDetails'))
const ErrorToast = lazy(() => import('../../components/ErrorToast'))

const PokemonPage: React.FunctionComponent = () => {
  const { t } = useTranslation(['common'])
  const dispatch = useDispatch()
  const { slug } = useParams<{ slug: string }>()

  const { pokemon, error, loading } = useSelector((state: RootState) => ({
    pokemon: state.pokemon.pokemon,
    error: state.pokemon.error,
    loading: state.pokemon.loading,
  }))

  const handleFetch = useCallback(() => {
    if (!slug) return

    dispatch({
      type: FETCH_POKEMON_REQUEST,
    })

    fetchPokemonAction(slug)
      .then((res) => {
        dispatch({
          type: FETCH_POKEMON_SUCCESS,
          payload: res,
        })
      })
      .catch((err) => {
        console.error(err)

        dispatch({
          type: FETCH_POKEMON_ERROR,
          payload: 'Oops! Something went wrong. Please try again later.',
        })
      })
  }, [dispatch, slug])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return (
    <Fragment>
      <Box sx={{ padding: { xs: '0', lg: '1rem' }, display: 'flex', justifyContent: 'center' }}>
        {error && !loading && (
          <Suspense
            fallback={
              <Box
                sx={{
                  position: 'fixed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <Spinner />
              </Box>
            }
          >
            <ErrorToast message={error} />
          </Suspense>
        )}

        {!isEmpty(pokemon) && (
          <Suspense
            fallback={
              <Box
                sx={{
                  position: 'fixed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <Spinner />
              </Box>
            }
          >
            <PokemonDetails pokemon={pokemon} />
          </Suspense>
        )}

        {loading && (
          <Box
            sx={{
              height: '80vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Spinner />
          </Box>
        )}
      </Box>
    </Fragment>
  )
}

export default PokemonPage
