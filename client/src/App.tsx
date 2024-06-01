import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import { RootState } from './app/store'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Layout from './components/Layout'
import SignUp from './pages/(auth)/SignUp'
import getDesignTokens from './theme/theme'

function App() {
  const mode = useSelector((state: RootState) => state.theme.mode)
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
