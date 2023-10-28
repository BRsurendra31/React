import { useState } from 'react' // useState is hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// why do we need hooks

function App() {
  // 15 is th default value passed into hook(useState) , but we can take any values like true, false , obj, 12, 87, etc
  const [counter, setCounter]  = useState(1) // "counter" a variable and "setCounter" is a function responsible for update variable "counter" 
                                              // abhi counter k pas default value 15 hai
  //let counter = 15

  const addValue = () => {
    // console.log("clicked", Math.random()) //it it will generate random values after clicking,   its just  for checking click is reflected here are not 
    //counter = counter + 1
    if(counter < 20){
      //console.log(counter);
    setCounter(counter+1)
    }
      /*
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
      */ // both work as same
    
  }

  const removeValue = () => {
    
    if(counter >0){ 
      setCounter(counter - 1)}
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue} // {addValue} we pass reference so that it execute after clicking 
                        // if we do like {addValue()} then it will directy executed that is not i want  
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App



/*

you can see actual hooks used in react source code which is open sourse 

react Hooks :
    useState() // resposible for propogating change int UI/DOM
    useEffect()
    useReducer()
    useContext()


hooks se hamlog bahut jagah ek hi sath changes (updtes ) la sakte hai
Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

Although Hooks generally replace class components, there are no plans to remove classes from React.

Hooks allow us to "hook" into React features such as state and lifecycle methods.

Here we are using the useState Hook to keep track of the application state.
State generally refers to application data or properties that need to be tracked

# Hook Rules
There are 3 rules for hooks:

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional

Note: Hooks will not work in React class components.

# whay hooks

you can add "state" to your functional components
you share "state" and logic b/w components easier
you write less code
removes a lot of complexity 
better code readability to who are new to js /react


*/