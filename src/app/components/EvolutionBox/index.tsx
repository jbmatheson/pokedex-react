import { Avatar, Box } from '@mui/material'

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
    // <Box margin={1} rounding={2} borderStyle="sm">
    <Box>
      <Box padding={3}>
        <div>{t('common:evolution-chain')}</div>
      </Box>
      <Box
      // display="flex"
      // direction="row"
      // paddingX={1}
      // paddingY={2}
      // justifyContent="around"
      // alignItems="center"
      >
        <div>
          <RouterLink to={`/pokemon/${species}/`}>
            <Box
            // margin={1}
            // rounding={2}
            // borderStyle="sm"
            // display="flex"
            // alignItems="center"
            >
              <Box padding={2}>
                <Avatar />
                {/* <Avatar name={species} src={speciesImage} size="sm" /> */}
              </Box>
              <Box flex="grow" padding={2}>
                <div>{capitalize(species)}</div>
              </Box>
            </Box>
          </RouterLink>
        </div>
        {!isEmpty(evolvesToList) && (
          <div>
            {evolvesToList.map((evolution: any) => {
              const evolutionName = get(evolution, ['species', 'name'])
              const evolutionURL = get(evolution, ['species', 'url'])
              const evolutionID = evolutionURL.match(idRegEx)
              const evolutionImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionID[1]}.png`

              return (
                <RouterLink key={evolutionName} to={`/pokemon/${evolutionName}/`}>
                  <Box
                  // margin={1}
                  // key={evolutionName}
                  // rounding={2}
                  // borderStyle="sm"
                  // display="flex"
                  // alignItems="center"
                  >
                    <Box padding={2}>
                      <Avatar
                      // name={evolutionName}
                      // src={evolutionImage}
                      // size="sm"
                      />
                      <Avatar />
                    </Box>
                    <Box flex="grow" padding={2}>
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
                  <RouterLink key={evolutionName} to={`/pokemon/${evolutionName}/`}>
                    <Box
                    // margin={1}
                    // rounding={2}
                    // borderStyle="sm"
                    // display="flex"
                    // alignItems="center"
                    >
                      <Box padding={2}>
                        <Avatar
                        // name={evolutionName}
                        // src={evolutionImage}
                        // size="sm"
                        />
                        <Avatar />
                      </Box>
                      <Box flex="grow" padding={2}>
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
