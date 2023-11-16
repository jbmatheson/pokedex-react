import {
  FETCH_POKEMON_ERROR,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from '../../constants/pokemon.constants'
import React, { Suspense, lazy, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Box } from '@mui/material'
import { RootState } from '../../reducers'
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
  // @ts-ignore
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
    <>
      <Box paddingY={1}>
        {error && !loading && (
          <Suspense
            fallback={
              <Box
              // position="fixed"
              // display="flex"
              // alignItems="center"
              // justifyContent="center"
              // top
              // left
              // right
              // bottom
              >
                {/* <Spinner accessibilityLabel={t('common:loading')} show /> */}
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
              // position="fixed"
              // display="flex"
              // alignItems="center"
              // justifyContent="center"
              // top
              // left
              // right
              // bottom
              >
                {/* <Spinner accessibilityLabel={t('common:loading')} show /> */}
              </Box>
            }
          >
            <PokemonDetails pokemon={pokemon} />
          </Suspense>
        )}

        {loading && (
          <Box
          // height="80vh"
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
          // direction="column"
          >
            {/* <Spinner accessibilityLabel={t('common:loading')} show={loading} /> */}
          </Box>
        )}
      </Box>
    </>
  )
}

export default PokemonPage
