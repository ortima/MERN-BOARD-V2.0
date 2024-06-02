import { configureStore } from '@reduxjs/toolkit'
import themeSlice from '../slices/themeSlice'
import authSlice from '../slices/authSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
