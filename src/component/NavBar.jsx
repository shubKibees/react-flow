import React from 'react'
import '../style/nav-bar.scss'
import logo from "../assets/react.svg"

const NavBar = () => {
  return (
    <div className="nav_bar">
      <div className="logo">
        <img src={logo} alt="loge" />
      </div>
      <div className="nav_bar_links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default NavBar