import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import { themeSettings } from './theme'
import { CssBaseline } from '@mui/material'
import { RootState } from './app/store'

function App() {
  const mode = useSelector((state: RootState) => state.theme.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
