import React from 'react'
import { Link } from 'react-router-dom'

const Aboutus: React.FC = () => {
  return (
    <>
      <main>
        <h1>Aboutus Page</h1>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  )
}

export default Aboutus
