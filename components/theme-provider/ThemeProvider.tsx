import React, { useState, createContext } from "react";
import { darkTheme, lightTheme } from "styles/index.css";
import { themeProviderStyles } from "./themeProvider.styles.css";
const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => console.log(),
});
const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme((prevValue) =>
      prevValue === lightTheme ? darkTheme : lightTheme
    );
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme} ${themeProviderStyles}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
