import React from 'react'
import { Link } from 'react-router-dom'

const TeamNew: React.FC = () => {
  return (
    <>
      <main>
        <h1>Theme New Page</h1>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  )
}

export default TeamNew
