import React from "react"
import UserContext from "./UserContext";

const UserContextPronider = ({children})=>{ // it nothing but a method
    const [user, setUser] = React.useState(null)// we can do simple useState() at place of React.useState()- just for that have to import useState from react , dont want to import then use React.useState() 
    return(
        <UserContext.Provider value={{user, setUser}}> {/*Vhere 'value' is called prop i.e proprty In value = {a} , we passed value , but in value ={{a,b}} we passed values as objects a , b*/}
        {children}
        </UserContext.Provider>
    )
}
export default UserContextPronider;