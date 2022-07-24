import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { isAuthenticatedSelector } from '@/features/auth/auth.slice'

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const authenticated = useSelector(isAuthenticatedSelector)
  const location = useLocation()

  if (!authenticated) {
    return <Navigate to='/auth/signin' state={{ from: location }} replace />
  }

  return children
}

export default PrivateRoute
