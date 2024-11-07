import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <section className={`App ${theme === "light" ? "light" : "dark"}`}>
        {children}
      </section>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
