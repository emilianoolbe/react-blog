import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
              <NavLink to='/'> Home </NavLink>
            </li>
            <li>
              <NavLink to='/articles'> Articles </NavLink> 
            </li>
            <li>
              <NavLink to='/create'> New Article </NavLink>
            </li>
           
              
        </ul>
    </nav>
  )
}
