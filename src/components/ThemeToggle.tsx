import React, { useEffect, useState } from "react";
import { getTheme, onThemeChange, toggleTheme } from "../theme";
import Icon from "./Icon";

const ThemeToggle: React.FC = () => {
  const [theme, setThemeState] = useState(getTheme);

  // Stay in sync when the theme is changed elsewhere (e.g. the command menu).
  useEffect(() => onThemeChange(setThemeState), []);

  const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
      <Icon name={theme === "dark" ? "sun" : "moon"} size={15} />
    </button>
  );
};

export default ThemeToggle;
