import React from "react";
import {
    ThemeProvider,
    StyledEngineProvider,
    createTheme,
    responsiveFontSizes,
} from "@mui/material";
import { ThemeContext, Themes } from "./utilities";

const AppTheme = (props) => {
    let [theme, setTheme] = React.useState(Themes.default);
    const giveMeTheme = () => {
        let currentThemeJson;
        switch (theme.name) {
            case Themes.dark:
                currentThemeJson = require("./theme/dark.json");
                break;
            default:
                currentThemeJson = require("./theme/default.json");
                break;
        }
        let currentTheme = createTheme(currentThemeJson);
        currentTheme = responsiveFontSizes(currentTheme);
        return currentTheme;
    };

    return (
        <ThemeContext.Provider value={{ ...theme, setTheme }}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={giveMeTheme()}>
                    {props.children}
                </ThemeProvider>
            </StyledEngineProvider>
        </ThemeContext.Provider>
    );
};

export default AppTheme;
