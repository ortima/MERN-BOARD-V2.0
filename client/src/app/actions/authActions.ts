import axios, { AxiosRequestConfig } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface RegisterUserPayload {
  name: string
  email: string
  password: string
}

export const registerUser = createAsyncThunk<
  void,
  RegisterUserPayload,
  { rejectValue: string }
>('auth/register', async ({ name, email, password }, { rejectWithValue }) => {
  const requestData = {
    name,
    email,
    password,
  }

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    await axios.post(
      'http://localhost:5001/api/auth/signup',
      requestData,
      config,
    )
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message)
    } else {
      return rejectWithValue(error.message)
    }
  }
})
