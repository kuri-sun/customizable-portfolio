import React, { useState } from "react";
import { ThemeContext } from "../hooks/useTheme";
import { LS_THEME_KEY } from "../utils/constants";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem(LS_THEME_KEY) === "dark" ? "dark" : "light"
  );

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem(LS_THEME_KEY, theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
