import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const TeamSetting: React.FC = () => {
  return (
    <>
      <main>
        <h1>Main Team Page</h1>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
        <Link to='new'>TeamNew</Link>
        {/* <Link to='/teams/new'>TeamNew</Link>
        <Link to='/teams/2'>TeamDynamic</Link> */}
      </nav>
      <Outlet />
    </>
  )
}

export default TeamSetting
