import { Box } from '@mui/material'
import { ISearchResult } from '../../types/pokedex.types'
import React from 'react'
import RouterLink from '../RouterLink'
import capitalize from 'lodash/capitalize'
import get from 'lodash/get'
import { pokemonIDGenerator } from '../../../utils'
import { useTranslation } from 'react-i18next'

interface IProps {
  results: ISearchResult[]
  searching: boolean
}

const ResultBox: React.FunctionComponent<IProps> = (props) => {
  const { results, searching } = props
  const { t } = useTranslation(['common'])

  return (
    // <Box padding={3} column={12}>
    <Box>
      {results.length ? (
        <>
          {results.map((pokemon: any) => {
            const pokemonID = pokemonIDGenerator(get(pokemon, ['id']))
            const pokemonName = get(pokemon, ['name'])
            return (
              <Box
                key={pokemonID}
                // borderStyle="sm"
                // rounding={2}
                // margin={1}
                // flex="grow"
              >
                <RouterLink to={`/pokemon/${pokemonName}/`} hoverStyle="none">
                  <Box padding={2} alignItems="center" display="flex">
                    <Box paddingX={2}>
                      {/* <Avatar
                        name={pokemonName}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                        size="xs"
                      /> */}
                    </Box>
                    <Box paddingX={2} flex="grow">
                      {/* <Text color="darkGray" weight="bold"> */}
                      <div>{capitalize(pokemonName)}</div>
                      {/* <Text size="sm" color="gray"> */}
                      <div>{`#${pokemonID}`}</div>
                    </Box>
                  </Box>
                </RouterLink>
              </Box>
            )
          })}
        </>
      ) : (
        !searching && <div>{t('common:errors:no-records-found')}</div>
      )}
      {/* <Spinner accessibilityLabel={t('common:loading')} show={searching} /> */}
    </Box>
  )
}

export default ResultBox
