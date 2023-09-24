import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

/*
function App() {
  const [count, setCount] = useState(0)
  // we cant pass obj/array as props as html attributes , jo ki hum string passs kar sakte hai
  // we have to declare separately both then use it as html attribute for props 

  let myObj = {
    username : "raj",
    age : 21

  }

  let newArr = [1,2,3]
  
  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind test</h1>
    <Card myname="surendra" />
    <Card  someobj = {myObj}/>
    <Card  arr = {newArr}/>

    </>
  )
}

export default App

*/

// for using props directly by destructuring
function App() {
  const [count, setCount] = useState(0)
  // we cant pass obj/array as props as html attributes , jo ki hum string passs kar sakte hai
  // we have to declare separately both then use it as html attribute for props 

  let myObj = {
    username : "raj",
    age : 21

  }

  let newArr = [1,2,3]
  
  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind test</h1>
    <Card myname="surendra" btnText="click me " />
    <Card  myname ="kavita"  btnText="visit me " />
    <Card  myname ="priyam" arr = {newArr}/>

    </>
  )
}

export default App

