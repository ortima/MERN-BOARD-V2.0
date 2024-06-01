import { PaletteMode } from '@mui/material'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          // palette values for dark mode
          primary: {
            main: '#FFFFFF',
          },
          secondary: {
            main: '#232323',
            secondary: '#0F0E0E',
          },
          action: {
            active: '#FFFFFF',
            selected: '#1900D5',
          },

          background: {
            default: '#000000',
            paper: '#0F0E0E',
          },
          divider: '#3C3C3C',
          text: {
            primary: '#FFFFFF',
            secondary: '#7C7C7C',
          },
        }
      : {
          // palette values for light mode
          primary: {
            main: '#000000',
          },
          secondary: {
            main: '#232323',
            secondary: '#0F0E0E',
          },
          action: {
            active: '#FFFFFF',
            selected: '#1900D5',
          },

          background: {
            default: '#FFFFFF',
            paper: '#F7F7F7',
          },
          divider: '#D1D1D1',
          text: {
            primary: '#000000',
            secondary: '#7C7C7C',
          },
        }),
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 14,
    h1: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 40,
      fontWeight: 600,
    },
    h2: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 35,
      fontWeight: 600,
    },
    h3: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 30,
      fontWeight: 500,
    },
    h4: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 25,
      fontWeight: 500,
    },
    p: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 20,
    },
  },
})

export default getDesignTokens
