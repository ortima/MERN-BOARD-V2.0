import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../app/actions/authActions'

interface UserInfo {
  id?: string
  name?: string
  email?: string
}

interface AuthState {
  loading: boolean
  userInfo: UserInfo | null
  userToken: string | null
  error: string | null
  success: boolean
}

const initialState: AuthState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(registerUser.fulfilled, state => {
        state.loading = false
        state.success = true
      })
  },
})

export default authSlice.reducer
