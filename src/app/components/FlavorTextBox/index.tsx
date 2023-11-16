import { Box } from '@mui/material'
import React from 'react'

interface IProps {
  flavorText: string
}

const FlavorTextBox: React.FunctionComponent<IProps> = (props) => {
  const { flavorText } = props

  return (
    <>
      <Box
        sx={{ margin: '0.24rem', borderRadius: '.5rem', paddingX: '0.35rem', paddingY: '0.45rem' }}
      >
        <div>{flavorText}</div>
      </Box>
    </>
  )
}

export default FlavorTextBox
