import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  
  return (
    <div className='navbar'>
      <Link to='/'><li>Home</li></Link>
      <Link to='/about'><li>About</li></Link>
      <Link to='/login'><li>Login</li></Link>  {/*finally link converted into anchor tag at run time */}
      
    </div>
  )
}
