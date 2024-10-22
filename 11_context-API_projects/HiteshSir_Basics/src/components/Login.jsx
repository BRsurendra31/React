import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
export default function Login() {
    const [username, setUsername] = useState('') // default empty value
    const [password, setPassword] = useState('') // default empty value
    
    const {setUser} = useContext(UserContext) // for using userContex for state management globally 
    
    
    const handleSubmit =(e)=>{ // handleSubmit me ek event milega i.e e
        e.preventDefault() // by default data goes out somewhere throgh url or post meythod - that we dont want 
        setUser({username, password}) // for sending data to userContex for state management globally , that data can be use anywhere we want , in this case we want to access data in profile
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

/**
 
used the userContext by > const {setUser} = useContext(UserContext)
save/set the dta in context which we want to do access globally by > setUser({username, password})

now "userContextProvider" will be imported where data will have to access

 */