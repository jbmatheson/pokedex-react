import { Box } from '@mui/material'
import React from 'react'

interface IProps {
  flavorText: string
}

const FlavorTextBox: React.FunctionComponent<IProps> = (props) => {
  const { flavorText } = props

  return (
    <Box
      sx={{
        fontSize: '1rem',
        textAlign: 'center',
        display: 'flex',
        alignSelf: 'center',
        fontStyle: 'italic',
        backgroundColor: 'white',
        padding: { xs: '4rem 1rem 1rem', lg: '1rem 1rem 1rem' },
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        flexWrap: 'wrap',
        maxWidth: { lg: '75%' },
      }}
    >
      {flavorText}
    </Box>
  )
}

export default FlavorTextBox
