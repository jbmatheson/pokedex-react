import { Box, Divider, Tooltip } from '@mui/material'
import React, { Fragment } from 'react'

import get from 'lodash/get'
import upperCase from 'lodash/upperCase'

interface IProps {
  stats: object[]
}

const StatsBox: React.FunctionComponent<IProps> = (props) => {
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
                justifyContent: 'between',
                alignItems: 'stretch',
                paddingY: '0.25rem',
              }}
            >
              <Box sx={{ paddingX: '.5rem' }}>
                <div>{statName}</div>
              </Box>

              <Box sx={{ paddingX: '.5rem' }}>
                <Tooltip title={baseStat}>
                  <Fragment>
                    <progress className="progress is-primary" value={baseStat} max="300">
                      {baseStat}%
                    </progress>
                  </Fragment>
                </Tooltip>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default StatsBox
