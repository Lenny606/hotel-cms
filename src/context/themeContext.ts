import { Dispatch, SetStateAction, createContext } from "react";

//set Object type fot ThemeContext
type ThemeContextType = {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

//define variable with defaults
const ThemeContext = createContext(<ThemeContextType>{
    darkTheme: false,
    setDarkTheme: () => null
})

export default ThemeContext;