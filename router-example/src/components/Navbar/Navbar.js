import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <NavLink exact to="/" activeStyle={{ color: "red"}}>Home</NavLink>
      <NavLink to="/experience" activeStyle={{ color: "red"}}>Experience</NavLink>
      <NavLink to="/education" activeStyle={{ color: "red"}}>Education</NavLink>
    </nav>
  )
}
