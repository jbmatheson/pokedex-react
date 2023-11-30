import { Box, Divider, LinearProgress } from '@mui/material'

import React from 'react'
import get from 'lodash/get'
import theme from '../../styles/theme'
import upperCase from 'lodash/upperCase'

interface IProps {
  stats: object[]
}

export const StatsBox: React.FunctionComponent<IProps> = (props) => {
  const { stats } = props
  return (
    <Box
      sx={{
        margin: { xs: '0', lg: '0 0 1.5rem 1rem' },
        display: 'flex',
        flexDirection: 'column',
        alignSelf: { xs: 'center', lg: 'flex-start' },
        borderRadius: '1rem',
        backgroundColor: 'white',
        width: { xs: 'calc(100% - 2rem)', lg: 'auto' },
      }}
    >
      <Box sx={{ fontSize: '1.5rem', display: 'flex', fontWeight: 'bold', padding: '0.5rem 1rem' }}>
        Base Stats
      </Box>

      <Divider sx={{ borderColor: 'rgba(0,0,0,.5' }} />

      <Box sx={{ display: 'flex', padding: '0.5rem', flexDirection: 'column' }}>
        {stats.map((stat) => {
          const statName = upperCase(get(stat, ['stat', 'name']))
          const baseStat = get(stat, ['base_stat'])

          return (
            <Box
              key={statName}
              sx={{
                margin: '0 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingY: '0.35rem',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  paddingX: '.5rem',
                  justifyContent: 'flex-end',
                  width: '100%',
                }}
              >
                <Box>{statName}</Box>
              </Box>

              <Box sx={{ position: 'relative', paddingX: '.5rem' }}>
                <LinearProgress
                  className="progress is-primary"
                  value={baseStat}
                  variant="determinate"
                  sx={{ width: '300px', height: '1rem', borderRadius: '1rem' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-5px',
                    bottom: '-7px',
                    left: `calc(${baseStat}% - 10px)`,
                    lineHeight: 'normal',
                    backgroundColor: theme.palette.primary.main,
                    padding: '0.285rem',
                    borderRadius: '1rem',
                    color: 'white',
                  }}
                >
                  {baseStat}
                </Box>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default StatsBox
