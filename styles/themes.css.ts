import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { lightColors, darkColors } from "./constants/colors";

export const themeVars = createThemeContract({
  colors: {
    background: null,
    foreground: null,
    text: null,
    selectionBg: null,
    selectionFg: null,
    buttons: null,
    secondBg: null,
    disabled: null,
    contrast: null,
    active: null,
    border: null,
    highlight: null,
    tree: null,
    notifications: null,
    accent: null,
    excludedFiles: null,
    green: null,
    yellow: null,
    blue: null,
    red: null,
    purple: null,
    orange: null,
    cyan: null,
    gray: null,
    white: null,
    black: null,
    error: null,
    comments: null,
    variables: null,
    links: null,
    functions: null,
    keywords: null,
    tags: null,
    strings: null,
    operators: null,
    attributes: null,
    numbers: null,
    parameters: null,
  },
});
export const lightTheme = createTheme(themeVars, {
  colors: lightColors,
});
export const darkTheme = createTheme(themeVars, {
  colors: darkColors,
});
