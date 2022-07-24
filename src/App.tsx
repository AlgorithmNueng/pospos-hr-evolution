import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import AuthRoutes from './features/auth/AuthRoutes'

const App: React.FC = () => {
  // NOTE: handle error via http

  return (
    <div className='App'>
      {/* FIXME: add UI for loading lazy */}
      <React.Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path='auth/*' element={<AuthRoutes />} />
        </Routes>
      </React.Suspense>
    </div>
  )
}

export default App
