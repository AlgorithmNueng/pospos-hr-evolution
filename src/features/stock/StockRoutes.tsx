import { Routes, Route } from 'react-router-dom'
import ProductCreate from './containers/ProductCreate'
import ProductList from './containers/ProductList'

const StockRoutes = () => (
  <Routes>
    <Route index element={<ProductList />} />
    <Route path='create' element={<ProductCreate />} />
    <Route path='edit/:productId' element={<ProductCreate />} />
  </Routes>
)

export default StockRoutes
