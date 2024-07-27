import {createContext, useContext} from "react";

//context creater
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

// --------------------------------------------------------

//contest provider
export const ThemeProvider = ThemeContext.Provider;

//---------------------------------------------------------

//export all
export default function useTheme() {
    return useContext(ThemeContext)
}

