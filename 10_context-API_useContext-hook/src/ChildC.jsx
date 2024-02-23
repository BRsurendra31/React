import React, { useContext } from 'react'
import { data1, data2 } from './App' // import waha kiya jata h jagha use karna rahta h



export default function ChildC() {
   const firstName = useContext(data1); 
   const gender = useContext(data2); 
  return (
    <h1>Hi My name is {firstName} and my gender is {gender}</h1>
  )
}
