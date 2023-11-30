import { createTheme } from '@mui/material'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1140,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
  palette: {
    common: {
      black: '#181818',
      white: '#fff',
    },
    primary: {
      light: '#90caff',
      main: '#58abf6',
      dark: '#085aa5',
      contrastText: '#fff',
    },
    secondary: {
      light: '#36dfb1',
      main: '#04d89e',
      dark: '#02976e',
      contrastText: '#fff',
    },
    success: {
      main: '#62B957',
    },
    error: {
      main: '#d01f12',
    },
    grey: {
      600: '#747476',
    },
  },
})

export default theme
