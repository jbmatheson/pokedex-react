import { Box, Grid, TextField } from '@mui/material'
import React, { Fragment, Suspense, lazy, useCallback, useRef, useState } from 'react'
import { SEARCH_ERROR, SEARCH_REQUEST, SEARCH_SUCCESS } from '../../constants/search.constants'
import { useDispatch, useSelector } from 'react-redux'

import { PokeballSvgPath } from '../../../assets/images/svg'
import { RootState } from '../../reducers'
import RouterLink from '../RouterLink'
import Spinner from 'react-spinner'
import debounce from 'lodash/debounce'
import { searchAction } from '../../actions/search.action'
import { useTranslation } from 'react-i18next'

// Lazy Load
const ResultBox = lazy(() => import('../ResultBox'))

const Header: React.FC = () => {
  const { t } = useTranslation(['common'])
  const dispatch = useDispatch()

  const anchorRef = useRef(null)

  const [query, setQuery] = useState('')

  const { results, searching } = useSelector((state: RootState) => ({
    results: state.search.results,
    searching: state.search.loading,
  }))

  const search = useCallback(
    (value: any) => {
      dispatch({
        type: SEARCH_REQUEST,
      })

      const url = `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`

      searchAction(url)
        .then((res) => {
          dispatch({
            type: SEARCH_SUCCESS,
            payload: res,
          })
        })
        .catch((err) => {
          console.error(SEARCH_ERROR, err)

          dispatch({
            type: SEARCH_ERROR,
            payload: 'Oops! Something went wrong. Please try again later.',
          })
        })
    },
    [dispatch]
  )

  const debouncedSearch = debounce(search, 1500)

  return (
    <Fragment>
      <Box
        sx={{
          color: 'white',
          rounded: 1,
          margin: 1,
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          borderStyle: 'sm',
        }}
      >
        <Box padding={2}>
          <RouterLink to="/" hoverStyle="none" accessibilityLabel={t('common:home')}>
            <PokeballSvgPath />
          </RouterLink>
        </Box>

        <Box flex="grow" paddingX={1} ref={anchorRef}>
          <TextField
            id="searchField"
            label="Search"
            variant="outlined"
            onChange={(e) => {
              setQuery(e.target.value)
              if (e.target.value.length) debouncedSearch(e.target.value)
            }}
            placeholder={t('common:search')}
            value={query}
          />
        </Box>

        <Suspense
          fallback={
            <Grid container padding={3} columns={12}>
              <Spinner />
            </Grid>
          }
        >
          <ResultBox results={results} searching={searching} />
        </Suspense>
      </Box>
    </Fragment>
  )
}

export default Header
