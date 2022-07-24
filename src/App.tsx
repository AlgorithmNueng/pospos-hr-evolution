import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Aboutus from './Aboutus'
import './App.css'
import Home from './Home'

function App() {
  return (
    <div className='App'>
      <h1>Welcome to React Router!</h1>
      <div>
        <Link to='stock'>go to stock</Link>
      </div>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<Aboutus />} />
      </Routes> */}
      {/* <Outlet /> */}
    </div>
  )
}

export default App
