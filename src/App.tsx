import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App: React.FC = () => {
  // NOTE: handle error via http

  return (
    <div className='App'>
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </div>
  )
}

export default App
