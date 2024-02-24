import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
export default function Login() {
    const [username, setUsername] = useState('') // default empty value
    const [password, setPassword] = useState('') // default empty value
    
    const {setUser} = useContext(UserContext)
    
    
    const handleSubmit =(e)=>{ // handleSubmit me ek event milega i.e e
        e.preventDefault() // by default data goes out somewhere throgh url or post meythod - that we dont want 
        setUser({username, password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='username'/>
      <input type="text" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='password'/>
      <button onSubmit={handleSubmit}>Submit</button>


    </div>
  )
}
