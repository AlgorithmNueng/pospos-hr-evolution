import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as authService from './auth.service'
import { UserData } from '@/types/user.type'
import { ACCESS_TOKEN_KEY } from '@/utils/constant'

const sliceName = 'auth'

interface SignInAction {
  username: string
  password: string
}

export const signIn = createAsyncThunk(`${sliceName}/signin`, async (credential: SignInAction) => {
  const response = await authService.signIn(credential)
  localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access_token)
  return response.data
})

export const getSession = createAsyncThunk(`${sliceName}/fetchSession`, async () => {
  const response = await authService.getSession()
  return response.data
})

interface AuthState {
  user?: UserData
  accessToken: string
  isAuthenticated: boolean
  isAuthenticating: boolean
}

const initialState: AuthState = {
  user: undefined,
  accessToken: '',
  isAuthenticated: false,
  isAuthenticating: true
}

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    signOut: (state) => {
      state.accessToken = ''
      state.user = undefined
      state.isAuthenticated = false
      state.isAuthenticating = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_token
      state.user = action.payload.user
      state.isAuthenticated = true
      state.isAuthenticating = false
    })
    builder.addCase(getSession.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.isAuthenticating = false
      if (action.payload.isAuthenticated && action.payload.access_token) {
        state.accessToken = action.payload.access_token
        state.user = action.payload.user
      }
    })
  }
})

export const { signOut } = authSlice.actions
export default authSlice.reducer
