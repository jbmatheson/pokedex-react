import { Box, Divider } from '@mui/material'
import {
  FETCH_POKEDEX_ERROR,
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
  SORT_POKEMONS,
} from '../../constants/pokedex.constants'
import React, { Fragment, Suspense, lazy, useCallback, useEffect, useState } from 'react'
import { fetchPokemonsAction, sortPokemonsAction } from '../../actions/pokedex.action'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../reducers'
import isEmpty from 'lodash/isEmpty'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// Lazy Load
const PokemonGrid = lazy(() => import('../../components/PokemonGrid'))
const ErrorToast = lazy(() => import('../../components/ErrorToast'))

const HomePage: React.FunctionComponent = () => {
  const { t } = useTranslation(['common'])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [order, setOrder] = useState('lowest_number_first')

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

    console.log('URL', url)

    fetchPokemonsAction(url)
      .then((res) => {
        dispatch({
          type: FETCH_POKEDEX_SUCCESS,
          payload: res,
        })
      })
      .catch((err) => {
        console.error(FETCH_POKEDEX_ERROR, err)
        dispatch({
          type: FETCH_POKEDEX_ERROR,
          payload: 'Oops! Something went wrong. Please try again later.',
        })
      })
  }, [dispatch, url])

  const sortOptions = [
    {
      value: 'lowest_number_first',
      label: t('common:sortOptions.lowest-number-first'),
    },
    {
      value: 'highest_number_first',
      label: t('common:sortOptions.highest-number-first'),
    },
    {
      value: 'z_a',
      label: t('common:sortOptions.z-a'),
    },
    {
      value: 'a_z',
      label: t('common:sortOptions.a-z'),
    },
  ]

  const handleSort = (option: { value: string; label: string }) => {
    setOrder(option.value)

    const payload = sortPokemonsAction(pokemonList, option.value)

    dispatch({
      type: SORT_POKEMONS,
      payload,
    })
  }

  useEffect(() => {
    if (isEmpty(pokemonList)) {
      console.log('pokemonList', pokemonList)
      handleFetch()
    }
  }, [handleFetch])

  return (
    <Fragment>
      <Box paddingY={1}>
        <Divider />

        <PokemonGrid pokemons={pokemonList} loadItems={handleFetch} loading={loading} />

        {error && !loading && (
          <Suspense fallback={<Box paddingY={6}>{/* <Spinner show /> */}</Box>}>
            <ErrorToast message={error} />
          </Suspense>
        )}
      </Box>
    </Fragment>
  )
}

export default HomePage
