import { isLogged } from '../helpers/AuthHandler'
import { Navigate } from 'react-router-dom'

export default ({ children }) => {
  const isAuth = isLogged()

  if (isAuth === true) {
    return children
  } else {
    return <Navigate to="/signin" />
  }
}
