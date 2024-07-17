import React from "react";
import { Themes } from "./constant";

export let ThemeContext = React.createContext({
    name: Themes.default,
    setTheme: () => null,
  });
  