import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlinks() {
  return (
    <>
    <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/parent'>Parent</NavLink>
        </li>
        <li>
          <NavLink to='/todolist'>TodoList</NavLink>
        </li>
    </ul>
    </>
  )
}

export default Navlinks