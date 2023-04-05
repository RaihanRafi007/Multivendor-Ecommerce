import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "./ThemeContext";

function ThemeToggle() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button size="sm" className={isDarkMode ? "bg-light text-black" : "bg-dark text-"} onClick={toggleTheme}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}

export default ThemeToggle;
