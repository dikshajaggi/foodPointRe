import { createContext, useState } from "react";

const ThemeContext = createContext()


const ThemeContextProvider = (props) => {
    const [isLight, setIsLight] = useState(true)
    return (
        <ThemeContext.Provider value={{
            isLight,
            setIsLight
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}
