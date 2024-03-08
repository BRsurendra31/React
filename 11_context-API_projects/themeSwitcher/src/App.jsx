import {useState, useEffect} from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/Theme'



function App() {

  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  // Actual change in theme - its done classic js not by react
useEffect(()=>{
  document.querySelector('html').classList.remove("light", "dark") // why document ? - bcz app runs on client right now not on server , remove is for remove pre-existing modes if any
  document.querySelector('html').classList.add(themeMode)

}, [themeMode]) 
  
  return (
    
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}> {/* we know themeMode, lightTheme, darkTheme are the methods bu kya karta h malun nahi h i.e we dont no their functionalitis - So in this situation we can simply make methods with its name - functionality automatiocally comes into it  - you can see above    */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>   
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
