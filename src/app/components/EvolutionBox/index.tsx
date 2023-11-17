import { Box, Divider } from '@mui/material'

import React from 'react'
import RouterLink from '../RouterLink'
import capitalize from 'lodash/capitalize'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import { useTranslation } from 'react-i18next'

interface IProps {
  evolutionChain: Object
}

const EvolutionBox: React.FunctionComponent<IProps> = (props) => {
  const { evolutionChain } = props
  const { t } = useTranslation(['common'])

  const idRegEx = /[0-9]+/g

  const species = get(evolutionChain, ['chain', 'species', 'name'])
  const speciesURL = get(evolutionChain, ['chain', 'species', 'url'])

  const speciesID = speciesURL.match(idRegEx)

  const speciesImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${speciesID[1]}.png`

  const evolvesToList = get(evolutionChain, ['chain', 'evolves_to'], [])

  const evolvesToEvolvesToList = evolvesToList.map((evolutions: any) =>
    get(evolutions, ['evolves_to'])
  )

  return (
    <Box
      sx={{
        margin: { xs: '1rem 0', lg: '0 1rem' },
        borderRadius: '1rem',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: { xs: 'center', lg: 'flex-end' },
        width: { xs: 'calc(100% - 2rem)', lg: 'auto' },
        flex: { xs: 1, lg: 0 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0.5rem 1rem',
          alignItems: { xs: 'center', lg: 'flex-end' },
        }}
      >
        <Box sx={{ fontSize: '1.5rem', display: 'flex', fontWeight: 'bold' }}>
          {t('common:evolution-chain')}
        </Box>

        <Box sx={{ fontSize: '1rem', display: 'flex' }}>{t('common:click-evolution-chain')}</Box>
      </Box>
      <Divider sx={{ borderColor: 'rgba(0,0,0,.5' }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingY: '0.5rem',
          paddingX: '1rem',
          alignItems: 'center',
        }}
      >
        <RouterLink to={`/pokedex-react/pokemon/${species}/`}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              margin: '0.5rem',
              borderRadius: '1rem',
              border: '1px solid #555',
              ':hover': { backgroundColor: 'rgba(0,0,0,.2)' },
            }}
          >
            <Box sx={{ padding: { xs: '0.25rem', lg: '1rem' } }}>
              <Box component="img" src={speciesImage} />
              <div>{capitalize(species)}</div>
            </Box>
          </Box>
        </RouterLink>
        {!isEmpty(evolvesToList) && (
          <div>
            {evolvesToList.map((evolution: any) => {
              const evolutionName = get(evolution, ['species', 'name'])
              const evolutionURL = get(evolution, ['species', 'url'])
              const evolutionID = evolutionURL.match(idRegEx)
              const evolutionImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionID[1]}.png`

              return (
                <RouterLink key={evolutionName} to={`/pokedex-react/pokemon/${evolutionName}/`}>
                  <Box
                    sx={{
                      margin: '0.5rem',
                      borderRadius: '1rem',
                      border: '1px solid #555',
                      ':hover': { backgroundColor: 'rgba(0,0,0,.2)' },
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{ padding: { xs: '0.25rem', lg: '1rem' } }}>
                      <Box component="img" src={evolutionImage} />
                      <div>{capitalize(evolutionName)}</div>
                    </Box>
                  </Box>
                </RouterLink>
              )
            })}
          </div>
        )}
        {!isEmpty(evolvesToEvolvesToList[0]) && (
          <div>
            {evolvesToEvolvesToList.map((evolutions: any) => {
              return evolutions.map((evolution: any) => {
                const evolutionName = get(evolution, ['species', 'name'])
                const evolutionURL = get(evolution, ['species', 'url'])
                const evolutionID = evolutionURL.match(idRegEx)
                const evolutionImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionID[1]}.png`

                return (
                  <RouterLink key={evolutionName} to={`/pokedex-react/pokemon/${evolutionName}/`}>
                    <Box
                      sx={{
                        margin: '0.5rem',
                        borderRadius: '1rem',
                        border: '1px solid #555',
                        ':hover': { backgroundColor: 'rgba(0,0,0,.2)' },
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ padding: { xs: '0.25rem', lg: '1rem' } }}>
                        <Box component="img" src={evolutionImage} />
                        <div>{capitalize(evolutionName)}</div>
                      </Box>
                    </Box>
                  </RouterLink>
                )
              })
            })}
          </div>
        )}
      </Box>
    </Box>
  )
}

export default EvolutionBox
