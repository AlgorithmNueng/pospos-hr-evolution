import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import { appTheme } from '@/appTheme'
import AuthRoutes from './features/auth/AuthRoutes'

const App: React.FC = () => {
  // NOTE: handle error via http

  return (
    <React.Suspense fallback={<div>Loading..</div>}>
      <ThemeProvider theme={appTheme}>
        <Routes>
          <Route path='auth/*' element={<AuthRoutes />} />
        </Routes>
      </ThemeProvider>
    </React.Suspense>
  )
}

export default App
