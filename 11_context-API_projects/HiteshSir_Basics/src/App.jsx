import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextPronider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextPronider>
      <h1>Context API</h1>
      <Login/>
      <Profile/>

    </UserContextPronider>
  )
}

export default App
