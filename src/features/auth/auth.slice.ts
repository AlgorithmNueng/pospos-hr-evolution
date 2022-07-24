import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  authenticating: boolean
  authenticated: boolean
}

const initialState: AuthState = { authenticating: false, authenticated: false }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, payload: PayloadAction) => {}
  }
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer
