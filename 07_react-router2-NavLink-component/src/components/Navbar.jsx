import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  
  // 07_react-router2 - just for style like jis navbar par  click kare vo red ho jaye 
  return (
    <div className='navbar'>
      <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to='/'><li>Home</li></NavLink>
      <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to='/about'><li>About</li></NavLink>
      <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to='/login'><li>Login</li></NavLink>  {/*finally link converted into anchor tag at run time */}
      {/* at place of className value i pass func that returns className red if element is active else return nothing-
       now css me essi red className par style karna h */}
    </div>
  )
}

// Almost concept done 
// more from Docs
