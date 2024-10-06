import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import ChildA from './ChildA'


//What is context API ?
// create, provider, consumer

const data =createContext() // Context Created 
const data2 =createContext() //2nd Context Created for 2nd data
function App() {
  const name ="surendra" // we want this data in ChildC 
  const gender ="male" // we want this data in ChildC 
  return (
    <>
      <data.Provider value={name}>
      <data2.Provider value={gender}>
      <ChildA/>
      </data2.Provider>
      </data.Provider>
    </>
  )
}

export default App
//export {data}; // export context
export {data,data2} ;