import { Box, Divider, Grid } from '@mui/material'

import React from 'react'

interface IProps {
  id: string | number
  name: string
}

export const SpriteBox: React.FunctionComponent<IProps> = (props) => {
  const { id, name } = props
  const [itemIndex, setItemIndex] = React.useState(0)

  const normalSpriteFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const normalSpriteBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`

  return (
    <Box
      sx={{
        margin: { xs: '0 1rem', lg: '1rem 1rem 1rem 0' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '1rem',
        width: { xs: 'calc(100% - 2rem)', lg: 'auto' },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            fontSize: '1.5rem',
            display: 'flex',
            alignSelf: { xs: 'center', lg: 'flex-end' },
            fontWeight: 'bold',
            padding: '0.5rem 1rem 0 0 ',
          }}
        >
          Sprites
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingX: '1rem',
          }}
        >
          <Box sx={{ fontSize: '1rem', display: 'flex' }}>Front</Box>
          <Box sx={{ fontSize: '1rem', display: 'flex' }}>Back</Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: 'rgba(0,0,0,.5' }} />

      <Box sx={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-around' }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="img" src={normalSpriteFront} />
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="img" src={normalSpriteBack} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default SpriteBox
