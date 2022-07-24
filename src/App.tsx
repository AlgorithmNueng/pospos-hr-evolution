import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { useSelector } from 'react-redux'

import { appTheme } from '@/appTheme'
import PrivateRoute from './components/PrivateRoute'
import AuthRoute from './components/AuthRoute'
import { RootState, useAppDispatch } from './store'
import AuthRoutes from './features/auth/AuthRoutes'
import ArticleRoutes from './features/article/ArticleRoutes'
import { getSession } from './features/auth/auth.slice'
import Layout from './components/Layout'

const App: React.FC = () => {
  const checkAuthentication = useSelector((store: RootState) => store.auth.checkAuthentication)
  const dispatch = useAppDispatch()
  // NOTE: handle error via http

  useEffect(() => {
    dispatch(getSession())
  }, [dispatch])

  // handle case waiting for first time restore session
  if (!checkAuthentication) {
    return <div>Loading..</div>
  }

  return (
    <React.Suspense fallback={<div>Loading..</div>}>
      <Layout>
        <ThemeProvider theme={appTheme}>
          <Routes>
            <Route
              path='auth/*'
              element={
                <AuthRoute>
                  <AuthRoutes />
                </AuthRoute>
              }
            />
            <Route
              path='article/*'
              element={
                <PrivateRoute>
                  <ArticleRoutes />
                </PrivateRoute>
              }
            />
          </Routes>
        </ThemeProvider>
      </Layout>
    </React.Suspense>
  )
}

export default App
