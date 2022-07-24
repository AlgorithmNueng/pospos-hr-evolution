import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Team: React.FC = () => {
  const params = useParams()
  const navigate = useNavigate()
  console.log(params)
  return (
    <>
      <main>
        <h1>Theme Dynamic Page {params.teamId}</h1>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
        <button onClick={() => navigate('/')}>Go to Index</button>
      </nav>
    </>
  )
}

export default Team
