import React from 'react'
import { Routes, Route } from 'react-router-dom'

const ArticleList = React.lazy(() => import('./pages/ArticleList'))

const ArticleRoutes = () => {
  return (
    <Routes>
      <Route index element={<ArticleList />} />
    </Routes>
  )
}

export default ArticleRoutes
