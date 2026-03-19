import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function Navbar() {
  const dispatch = useDispatch()
  const { isLoggedIn, user } = useSelector((state) => state.auth)

  const handleSignOut = () => {
    dispatch(logout())
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="main-nav-right">
        {isLoggedIn ? (
          <>
            <span className="main-nav-username">
              {user?.userName ?? '...'}
            </span>
            <Link className="main-nav-icon" to="/profile">
              <i className="fa fa-user-circle"></i>
            </Link>
            <Link className="main-nav-icon" to="/settings">
              <i className="fa fa-cog"></i>
            </Link>
            <Link className="main-nav-icon" to="/" onClick={handleSignOut}>
              <i className="fa fa-power-off"></i>
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
