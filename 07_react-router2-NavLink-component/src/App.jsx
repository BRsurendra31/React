import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // RouterProvider is for ki kaha mai chahta hu router element(components like Home , Login ) fix ho
// actually this done in main.jsx - remember 
function App() {
  const router = createBrowserRouter([ // arr of obj
    {
      path : "/",
      element :<><Navbar/><Home/></> //when / par aaye then Home wala element dikha do 
    },
    {
      path :"/login",
      element :<><Navbar/><Login/></>
    },
    {
      path : "/about",
      element :<><Navbar/><About/></>
    },
    {
      path : "/user/:username", // for dynamic route
      element :<><Navbar/><User/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
