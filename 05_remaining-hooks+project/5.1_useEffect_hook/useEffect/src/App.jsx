import { useState, useEffect } from 'react'
import './App.css'
import Todo from './Todo'

function App() {
  
  const [state, setState] = useState(true);
 
  return (
    <div>
      <button onClick={(e)=>setState(!state)}>Touggle</button>

      {state ? <Todo/> : ""} 
    </div>
  )
}

export default App
