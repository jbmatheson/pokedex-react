import { Box, Divider } from '@mui/material'
import React, { Fragment } from 'react'

import { Pokemon } from '../../types/pokemon.types'
import get from 'lodash/get'
import upperCase from 'lodash/upperCase'
import { useTranslation } from 'react-i18next'

interface DataTableBoxProps {
  pokemon: Pokemon
  height: number
  weight: number
  abilities: Object[]
  shape: string
}

const DataTableBox: React.FC<DataTableBoxProps> = (props) => {
  const { pokemon, height, weight, abilities, shape } = props
  const { t } = useTranslation(['common'])
  const types = get(pokemon, ['types'])

  return (
    <Box
      sx={{
        margin: { xs: '1rem 1rem 2.5rem', lg: '0 1rem 0 0' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '1rem',
        width: { xs: 'calc(100% - 2rem)', lg: 'auto' },
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
        <Box sx={{ fontSize: '1.5rem', display: 'flex', fontWeight: 'bold' }}>Data Sheet</Box>
      </Box>
      <Divider sx={{ borderColor: 'rgba(0,0,0,.5' }} />

      <Fragment>
        <Box sx={{ display: 'flex', padding: '1rem', flexDirection: 'row', gap: '3rem' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <Box sx={{ fontSize: '1.125rem', fontWeight: 'bold' }}>{t('common:abilities')}</Box>

            {abilities.map((ability) => {
              const abilityName = upperCase(get(ability, ['ability', 'name']))
              return (
                <Box sx={{ backgroundColor: 'rgba(0,0,0,.5', padding: '0.5rem' }} key={abilityName}>
                  {abilityName}
                </Box>
              )
            })}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <Box sx={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Type</Box>

            {types.map((item: object) => {
              const pokemonType = get(item, ['type', 'name'])

              return (
                <span key={pokemonType} className={pokemonType}>
                  {pokemonType}
                </span>
              )
            })}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
            <Box sx={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Shape</Box>

            <div>{shape}</div>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            padding: '1.95rem 1rem 1rem 1rem',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <Box sx={{ fontSize: '1.125rem', fontWeight: 'bold' }}>{t('common:height')}</Box>
            <Box sx={{ fontSize: '1rem' }}>{height} m</Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <Box sx={{ fontSize: '1.125rem', fontWeight: 'bold' }}>{t('common:weight')}</Box>
            <Box sx={{ fontSize: '1rem' }}>{weight} Kg</Box>
          </Box>
        </Box>
      </Fragment>
    </Box>
  )
}

export default DataTableBox
