import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Home from './Home'
import TeamSetting from './TeamSetting'
import Team from './Team'
import TeamNew from './TeamNew'
import TeamDefault from './TeamDefault'
import NotFound from './NotFound'
import StockRoutes from './stock/StockRoutes'
import Layout from './common/Layout'
import CustomDiv from '@/components/CustomDiv'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <CustomDiv />
        {/* <Routes>
          <Route path='/' element={<App />} />
          <Route path='stock/*' element={<StockRoutes />} />
        </Routes> */}
      </Layout>
      {/* <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='teams' element={<TeamSetting />}>
            <Route index element={<TeamDefault />} />
            <Route path=':teamId' element={<Team />} />
            <Route path='new' element={<TeamNew />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
