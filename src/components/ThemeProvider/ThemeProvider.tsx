//use client directive from next.js
'use client'

import ThemeContext from "@/context/themeContext";
import {useEffect, useState} from "react";

//props - type of object with children where children are types of react nodes
const ThemeProvider = ({children}: { children: React.ReactNode }) => {
    //use local storage to retrieve theme
    const themeFromLocalStorage: boolean =
        typeof localStorage !== 'undefined' && localStorage.getItem('hotel-theme')
            ? JSON.parse(localStorage.getItem('hotel-theme')!) //exclamation tells TS that we are sure we want this
            : false;

    const [darkTheme, setDarkTheme] = useState<boolean>(themeFromLocalStorage);

    const [renderComponent, setRenderComponent] = useState(false);

    useEffect(() => {
        setRenderComponent(true);
    }, []);

    //if component is not rendered return empty fragment
    if (!renderComponent) {
        return <></>
    }

    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
                <div className={"dark:text-white dark:bg-black text-[#1E1E1E]"}>
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;