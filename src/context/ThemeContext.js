import React, { useEffect, useState } from "react";
import { ThemeContext } from "../hooks/useTheme";
import { useLocalStorgae } from "../hooks/useLocalStorage";
import { LS_THEME_KEY } from "../utils/constants";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const { getItem } = useLocalStorgae();

  useEffect(() => {
    // Detect the night OR light time. (6AM - 6PM is light time(my definition))
    const savedTheme = getItem(LS_THEME_KEY);
    setTheme(savedTheme);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
