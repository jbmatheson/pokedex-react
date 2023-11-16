import { Box } from '@mui/material'

import React from 'react'
import get from 'lodash/get'
import upperCase from 'lodash/upperCase'

interface IProps {
  stats: object[]
}

const StatsBox: React.FunctionComponent<IProps> = (props) => {
  const { stats } = props
  return (
    // <Box margin={1} rounding={2} borderStyle="sm">
    <Box>
      {stats.map((stat) => {
        const statName = upperCase(get(stat, ['stat', 'name']))
        const baseStat = get(stat, ['base_stat'])

        return (
          <Box
            key={statName}
            margin={2}
            padding={2}
            display="flex"
            justifyContent="between"
            alignItems="stretch"
          >
            <Box paddingX={3}>
              <div>{statName}</div>
            </Box>

            <Box paddingX={3}>
              {/* <Tooltip inline text={baseStat}>
                <progress
                  className="progress is-primary"
                  value={baseStat}
                  max="300"
                >
                  {baseStat}%
                </progress>
              </Tooltip> */}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default StatsBox
