import React from 'react'
import ChildC from './ChildC'

export default function ChildB({name}) { //Parent of componrnt childC is ChildB
  return (
      < ChildC name ={name} />
  )
}
