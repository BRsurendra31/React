import { useState, useRef } from 'react'
import './App.css'

function App() {
  const refElement = useRef("")
  console.log(refElement) // onj. i.e useRef returns an object with a single property 'current'
  const [name, setName] = useState("Surendra")


  function reset(){

    setName("")
    // Directly access the DOM element and focus on the input
    refElement.current.focus()
  }

  function inputHandler(){

    refElement.current.style.color="yellow"
    refElement.current.value="Priyam"
  }
  return (
    
  <div class="input-container">
    <h1>Learning useRef Hook :</h1>

      <input type="text" ref={refElement} value = {name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={reset}>reset</button>
      <button onClick={inputHandler}>Input Handler</button>

      <h6>reset karne ke bad mera focus was aa gaya, means mane focus ko manupulate kiya h from dom using useRef</h6>
  </div>
  )
}

export default App

/*
#useRef() hook :

>createRef  in class compo. 
>The useRef hook in React provides a way to create a mutable object that persists between re-renders. It can be used to store a value that doesn’t trigger a re-render when it changes.

> When you use useRef, it returns an object with a current property, which can hold any value (e.g., DOM elements, numbers, objects, etc.).

syntax :
  const inputRef = useRef(initialValue);

    > Here, inputRef will persist throughout the lifecycle of the component, and the value of inputRef.current can be updated without causing a re-render.


> useRef is a React Hook that lets you reference DOM elements that’s not needed for rendering.
> reference DOM elements, it means they allow us to directly access and interact with the actual HTML elements (like <input>, <button>, etc.) rendered in the browser.

>In React, when you use regular props or state to update a component, the updates go through React's rendering process, and the component is re-rendered based on changes in state or props. However, with refs (useRef or createRef), you can directly access a DOM element that was rendered by a component without triggering a re-render of the component itself.


# why we use useRef :

> Accessing DOM Elements
>Storing Mutable Values
> Avoiding Re-Renders


# how useRef is different from simple refs(createRef in class compo.) ?

>useRef Remains the same between renders (i.e., it’s persistent across re-renders).

> In case of createRef (simple refs) , A new ref object is created on every render, which means it does not persist across re-renders in class components. That can also effect performance 
*/