import { useCallback, useState } from 'react'
import './App.css'
import ChaildA from './ChaildA'

function App() {
  const [add, setAdd] = useState(0)
  const [count, setCount] = useState(0);
  // const learning = ()=>{ // without useCallback- re-renders childA
  //   // some operation
  // }

  /** 
  const learning =useCallback(()=>{ // no re-rendering childA
    // some operations
  }, []) // empty arr says learning func runs once
  */
  const learning =useCallback(()=>{   }, [count])  // learning func runs as changes happen to count
  
  return (
    <div>
      <h1>Learning useCallback ...</h1>
        <ChaildA learning={learning}/>{/* passing func learning as prop in childA component > now we can see childA re-renders when clicking on button despite using memo >bcz of react have referencial equality concept this problem will be solved using useCallback */}
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add +1)}>Addition</button>

      <h1>{count}</h1>
      <button onClick={()=>setCount(count +1)}>count</button>
    </div>
  )
}

export default App

/*
# referencial equality concept :

> when anything re-render in the page, fuction is re-created that's why childA finds "lerning func" as new or some changes happen to learnig and that's why childA re-rendered again again as button clicking
*/
/**
  # useCallback() hook :

  > same as useMemo(), useCallback is used for enhance the performance of app.
  >Main diff is that useMemo returns a memorized value whereas useCallback returns a memorized function.
 */