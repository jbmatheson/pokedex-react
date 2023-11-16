import { Box } from '@mui/material'
import React from 'react'
import RouterLink from '../RouterLink'
import pokeBall from '../../../assets/images/pokeball.png'
import pokeDex from '../../../assets/images/pokedex.png'

// Lazy Load

const Header: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          color: 'white',
          backgroundColor: 'red',
          padding: '1rem',
          marginBottom: { xs: '0', lg: '0.5rem' },
          border: 'none',
        }}
      >
        <Box
          sx={{
            paddingX: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <RouterLink to="/" alt="home link">
            <Box
              component="img"
              src={pokeDex}
              sx={{ width: 'auto', height: { xs: '60px', lg: '100px' } }}
            />
          </RouterLink>
          <RouterLink to="/" alt="home link">
            <Box
              component="img"
              src={pokeBall}
              sx={{ width: { xs: '80px', lg: '100px' }, height: { xs: '80px', lg: '100px' } }}
            />
          </RouterLink>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
