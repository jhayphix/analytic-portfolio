// ... React modules
import { createContext } from "react";
import useLocalStorage from "use-local-storage";

// ... Context

// ... Components

// ... Assets

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => {},
  switchTheme: () => {},
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ThemeContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Theme config
  |----------------------------------------
  */
  // const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    theme,
    setTheme,
    switchTheme,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
