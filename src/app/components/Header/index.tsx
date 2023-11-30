import { Box, Button, FormLabel, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { SEARCH_ERROR, SEARCH_SUCCESS } from '../../constants/search.constants'

import RouterLink from '../RouterLink'
import pokeBall from '../../../assets/images/pokeball.png'
import pokeDex from '../../../assets/images/pokedex.png'
import { searchAction } from '../../actions/search.action'
import { searchQueriesState } from '../../recoil/searchQueries'
import theme from '../../styles/theme'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { useTranslation } from 'react-i18next'

// Lazy Load

const Header: React.FC = () => {
  const anchorRef = useRef(null)
  const [query, setQuery] = useState('')
  const [searchError, setSearchError] = useState('')
  const [searching, setSearching] = useState(false)
  const { t } = useTranslation(['common'])
  const navigate = useNavigate()
  const isMobile = theme.breakpoints.down('lg')

  const dispatch = useDispatch()

  const setSearchQueries = useSetRecoilState(searchQueriesState)

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

        setSearchError(t('Error. Please retry!'))
        setSearching(false)
      })
  }

  return (
    <Box>
      <Box
        sx={{
          color: 'white',
          backgroundColor: 'red',
          padding: '1rem',
          marginBottom: { xs: '0', lg: '0.5rem' },
          border: 'none',
        }}
      >
        <Box
          sx={{
            paddingX: '1rem',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            justifyContent: { xs: 'center', lg: 'space-between' },
          }}
        >
          <RouterLink to="/" alt="home link">
            <Box
              component="img"
              src={pokeDex}
              sx={{
                position: { xs: 'absolute', lg: 'relative' },
                top: { xs: '0', lg: 'unset' },
                left: { xs: '0', lg: 'unset' },
                width: 'auto',
                height: { xs: '40px', lg: '100px' },
              }}
            />
          </RouterLink>
          <Box
            sx={{
              display: 'flex',
              paddingX: '1rem',
              gap: '1rem',
              alignItems: 'center',
              marginTop: { xs: '4rem', lg: '0' },
              flexDirection: { xs: 'column', lg: 'row' },
            }}
            ref={anchorRef}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <TextField
                id="searchField"
                placeholder="Search Pokemon"
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
              color="success"
              onClick={search}
              sx={{
                display: 'flex',
                color: 'white',
                fontWeight: 'bold',
                lineHeight: '1rem',
                paddingY: '.75rem',
                filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,.5))',
              }}
            >
              Submit
            </Button>
          </Box>
          <RouterLink to="/" alt="home link">
            <Box
              component="img"
              src={pokeBall}
              sx={{
                position: { xs: 'absolute', lg: 'relative' },
                top: { xs: '0', lg: 'unset' },
                right: { xs: '0', lg: 'unset' },
                width: { xs: '40px', lg: '100px' },
                height: { xs: '40px', lg: '100px' },
              }}
            />
          </RouterLink>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
