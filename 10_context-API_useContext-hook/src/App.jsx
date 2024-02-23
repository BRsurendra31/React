import { createContext } from "react"
import ChildA from "./ChildA"

// What is useContext hook?
// create , provider, useContext
      // create context
      // provide values
      // use the Context using useContext hook 

const data1 = createContext();
const data2 = createContext();

function App() {
 const name ="Surendra"
 const gender = "male"
  return (
    <>
    <data1.Provider value={name} >
      <data2.Provider value={gender}>
      <ChildA/>
      </data2.Provider>
    </data1.Provider>
    </>
  )
}

export default App
export {data1, data2};

// Now useContext hook is very simpler than simple context API