import React from 'react'
import { Routes, Route } from 'react-router-dom'

const SignIn = React.lazy(() => import('./pages/SignIn'))

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='signin' element={<SignIn />} />
    </Routes>
  )
}

export default AuthRoutes
