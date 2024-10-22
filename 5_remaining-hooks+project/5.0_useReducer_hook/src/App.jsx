import { act, useReducer, useState } from 'react'
import './App.css'


const initialstate = 0;
  const reducer = (state, action)=>{

    switch(action){

      case "INC":
        return state + 1;

      case "DEC" :
        return state -1;

      default :
      return state;
    }

  }

function App() {
  const [count, dispatch] = useReducer(reducer, initialstate)

  

  return (

    <div>
      <h3>value :{count} </h3>
      <button onClick={()=>dispatch("INC")} >INC</button>
      <button onClick={()=>dispatch("DEC")} >DEC</button>
    </div>
  )
}

export default App

/**
 
# useReducer() :

> useReducer hook is used for state management.
>this is alternative of useState() hook
> Preferable for complex state management logic

syntax :

const [state, dispatch] = useReducer(reducer, initialstate)
       
and , reducer(currentState, action)

- reducer is a function accepts two parameters
  newState = reducer(currentState, action)


#why useReducer over useState :

> 1. Complex State Logic :
    >useState is simple and great when your state is a single value or has simple updates (like toggling a value or updating a number).

    >useReducer is better when you have complex state logic or when multiple state variables need to be updated based on various actions.

For example, if you have a form with multiple fields, you might need more structured logic to manage updates. useReducer allows you to centralize and organize this logic in a single function.

>2. Multiple Related State Updates :

    > If updating your state depends on the previous state or involves multiple related values, useReducer is more efficient. It lets you define all the possible actions that can affect the state in one place (the reducer function).

    > With useState, you'd have to call the state setter multiple times and manually manage interdependencies between them. useReducer simplifies this by combining updates into one action.

    > In large apps, using useState can make it harder to trace how and where state changes happen.
    > useReducer gives you a structured approach: actions and how they modify the state are all defined in a single reducer function.

> 4. Better for Complex Component Structures :

    > If your component has nested or deep state (like managing multiple levels of objects or arrays), useReducer provides a cleaner solution. You can use actions to modify only parts of the state without directly mutating it, ensuring consistency.
 */