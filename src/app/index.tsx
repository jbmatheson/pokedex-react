import { Box, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'

import Header from './components/Header'
import { Provider } from 'react-redux'
import { RecoilRoot } from 'recoil'
import Spinner from 'react-spinner'
import store from './store'
import theme from './styles/theme'

// Pages
const HomePage = lazy(() => import('./pages/HomePage'))
const PokemonPage = lazy(() => import('./pages/PokemonPage'))
const PageNotFound = lazy(() => import('./pages/404'))

const App: React.FunctionComponent = () => {
  return (
<<<<<<< HEAD
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Box color="white" minHeight="100vh">
              <Header />
              <Suspense
                fallback={
                  <Box
                    sx={{
                      position: 'fixed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <Spinner />
                  </Box>
                }
              >
                <Routes>
                  <Route element={<HomePage />} path="/" />
                  <Route element={<HomePage />} path="/pokedex-react" />
                  <Route element={<PokemonPage />} path="/pokemon/:slug" />
                  <Route element={<PageNotFound />} />
                </Routes>
              </Suspense>
            </Box>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </RecoilRoot>
=======
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <Box color="white" minHeight="100vh">
                <Header />
                <Suspense
                  fallback={
                    <Box
                      sx={{
                        position: 'fixed',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      <Spinner />
                    </Box>
                  }
                >
                  <Routes>
                    <Route element={<HomePage />} path="/pokedex-react/" />
                    <Route element={<PokemonPage />} path="/pokedex-react/pokemon/:slug" />
                    <Route element={<PageNotFound />} />
                  </Routes>
                </Suspense>
              </Box>
            </BrowserRouter>
          </Provider>
        </ThemeProvider>
      </RecoilRoot>
    </>
>>>>>>> 0894a9a (github page push)
  )
}

export default App
