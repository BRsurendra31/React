import React from 'react'
import { data, data2 } from './App' // import context jaha use karna h

export default function ChildC() {
  return (
    <data.Consumer>
      {
        (name)=>{
          return (
            <data2.Consumer>
              {
                (gender)=>{
                  return (
                    <h1>My name is {name} and gender : {gender} </h1>
                  )
                }
              }
            </data2.Consumer>
          )
        }
      }
    </data.Consumer>
  )
}

// problem :
  /* 
   when you create multiple contexts and use in same component then code structure become nested and complext like 
   callback hell 

   to ovecome this - useContext hook is used 

   */