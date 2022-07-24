import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Welcome to React Router!</h1>
      <div>
        <Link to='stock'>go to stock</Link>
      </div>
    </div>
  )
}

export default App
