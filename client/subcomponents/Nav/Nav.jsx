import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import {
  IfAuthenticated,
  IfNotAuthenticated,
} from '../Authenticated/Authenticated'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../../auth-utils'

// React-Icons Import
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)
  const gardenId = useSelector((globalState) => globalState.user?.gardenId)

  function handleRegister(event) {
    event.preventDefault()
    register()
  }

  function handleLogin(event) {
    event.preventDefault()
    login()
  }

  function handleLogoff(event) {
    event.preventDefault()
    logout({
      returnTo: window.location.origin,
    })
  }

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <nav className="w-full block lg:flex lg:items-center lg:w-auto">
      {open && (
        <div className="nav-menu-toggle" onClick={toggleMenu}>
          <Link to="/" className="nav-link home-nav-link">
            Home
          </Link>

          <IfAuthenticated>
            <Link to={`/gardens/${gardenId}`} className="nav-link">
              My Garden
            </Link>
            <Link to={`/gardens/${gardenId}/news`} className="nav-link">
              News
            </Link>
            <Link to="/profile" className="nav-link">
              My Profile
            </Link>
            <a href="/" onClick={handleLogoff} className="nav-link">
              Log out
            </a>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <a href="/" onClick={handleLogin} className="nav-link">
              Sign in
            </a>
            <a href="/" onClick={handleRegister} className="nav-link">
              Register
            </a>
          </IfNotAuthenticated>

          <div className="close-btn" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>
      )}
      {!open && (
        <div className="nav-menu">
          <Link to="/" className="nav-link home-nav-link">
            Home
          </Link>

          <IfAuthenticated>
            <Link to={`/gardens/${gardenId}`} className="nav-link">
              My Garden
            </Link>
            <Link to={`/gardens/${gardenId}/news`} className="nav-link">
              News
            </Link>
            <Link to="/profile" className="nav-link">
              My Profile
            </Link>
            <a href="/" onClick={handleLogoff} className="nav-link">
              Log out
            </a>
          </IfAuthenticated>

          <IfNotAuthenticated>
            <a
              href="/"
              onClick={handleLogin}
              className="nav-link home-nav-link"
            >
              Sign in
            </a>
            <a
              href="/"
              onClick={handleRegister}
              className="nav-link home-nav-link register-button"
            >
              Register
            </a>
          </IfNotAuthenticated>

          <div className="hamburger" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
        </div>
      )}
    </nav>
  )
}
