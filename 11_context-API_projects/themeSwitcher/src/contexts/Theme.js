import { createContext , useContext} from "react"


export const ThemeContext = createContext({ 
    themeMode: "light",
    darkTheme:()=>{}, // method 
    lightTheme:()=>{}, // whem someone calls ThemeContext they will get themeMode, darkTheme, and lightTheme
})

// we can also export context,provider from here , no need extra class for provider

export const ThemeProvider = ThemeContext.Provider // we can take ThemeProvider and use it for  wrapping 

// we can also create custom hoo and export - that generally people do

export default function useTheme(){ // hook itself a func
    return useContext(ThemeContext)
}