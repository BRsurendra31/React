import { useState } from 'react'
import './App.css'
import ChaildA from './ChaildA'

function App() {
  const [add, setAdd] = useState(0)

  return (
    <div>
      <h1>Learning useCallback ...</h1>
        <ChaildA/>{/* we can see in console, first time childA is called(rendered) when app starts that's okay but problem is when i click on additiin button then then again childA is recalled(re-rendered and so on jab ki childA ko button se koi relation nahi h  > we can solve this problem using useMemo by wrapping child component by memo  */}
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add +1)}>Addition</button>
    </div>
  )
}

export default App

/**
  # useCallback() hook :

  > same as useMemo(), useCallback is used for enhance the performance of app.
  >Main diff is that useMemo returns a memorized value whereas useCallback returns a memorized function.
 */