import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)

  /*
  function multiply(){
    console.log("multiply func called ..")
    return add * 10;
  } // There is no relation of Minus button with multiply func , but when we click on minus button then mulltiply func also get called taht we can see in console which was not needed.Think if we have more and more such funcs,then it degrades the app performance.

  To remove this problem, we can use useMemo hook and dependencies like kis case me a particular func will run

  see below ..
  */

  const multiplication = useMemo(function multiply(){
    console.log("multiply func is called ..")
    return add * 10;
  }, [add]) // NOW multiplication is dependent on add dependebcy, only add button click will call the multiply func, thre is no function calling(multiply func) on minus button clicking - we can clearly see it in console
  return (
    
    <div>
      
      {/* {multiply()} <br />  thisnwas in case of without useMemo*/} 

      {multiplication} <br />
      <button onClick={()=>setAdd(add + 1)}>Add</button>
      <span>{add}</span><br />

      <button onClick={()=>setMinus(minus - 1)}>Minus</button>
      <span>{minus}</span>
    </div>
  )
}

export default App

/**
 
# useMemo() hook :

> The useMemo hook in React is used for performance optimization. It allows you to memoize the result of a function so that React only re-calculates that result when its dependencies change, rather than on every render. This is particularly useful when you have expensive computations that you don't want to run on every render unless absolutely necessary.
> Memoization is an optimization technique where the result of a function is stored (or "cached") so that the function doesn't need to re-run unless its inputs (dependencies) change.
  syntax- 

      const cachedValue = useMemo(calculateValue, [dependency1, dependency2, ...])

        > It takes a function as its first argument (which contains the computation logic).
        >The second argument is an array of dependencies. The function is re-executed only if one of the dependencies changes.

>In lemon words- In a react component, lots of functions are used to perform some tasks. sometimes these functions are called again and again without any nedd that degrade the performance of the application. so to overcome this issue useMemo i.e memorization is used.

> used to inhance the performance of application
 */