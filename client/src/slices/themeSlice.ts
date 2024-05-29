import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  mode: 'dark' | 'light'
}

const initialState: ThemeState = {
  mode: 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state: ThemeState) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
  },
})

export const { setMode } = themeSlice.actions
export default themeSlice.reducer
