import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as authService from './auth.service'
import { UserData } from '@/types/user.type'
import { ACCESS_TOKEN_KEY } from '@/utils/constant'
import { RootState } from '@/store'

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
  console.log(response.data)
  return response.data
})

interface AuthState {
  user?: UserData
  isAuthenticated: boolean
  checkAuthentication: boolean
}

const initialState: AuthState = {
  user: undefined,
  isAuthenticated: false,
  checkAuthentication: false
}

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = undefined
      state.isAuthenticated = false
      state.checkAuthentication = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.isAuthenticated = true
      state.checkAuthentication = true
    })
    builder.addCase(getSession.fulfilled, (state, action) => {
      state.isAuthenticated = !!action.payload
      state.checkAuthentication = true
      state.user = action.payload
    })
  }
})

export const { signOut } = authSlice.actions
export default authSlice.reducer

// common get state
export const isAuthenticatedSelector = (store: RootState) => store.auth.isAuthenticated
