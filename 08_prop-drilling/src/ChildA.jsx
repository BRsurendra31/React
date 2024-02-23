import React from 'react'
import ChildB from './ChildB'

export default function ChildA({name}) { // Parent of componrnt childB is ChildA 
  // receied name var from parent App to ChildA by parametr {name }
    return (
    < ChildB name ={name} /> /*transferred name var from parent ChildA to ChildB and so on */
    
  )
}
