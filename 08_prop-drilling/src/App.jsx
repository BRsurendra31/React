import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './ChildA'

// concept of prop drilling 
// How to avoid it ?

function App() { // Parent of componrnt childA is APP 
  
const name= "surendra"
  return (
    <>
    <ChildA name={name} /> { /*transferred name var from parent App to ChildA  */}
    </>
  )
}

export default App
