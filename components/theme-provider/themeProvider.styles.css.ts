import { style } from "@vanilla-extract/css";
import { fonts, themeVars } from "styles/index.css";

export const themeProviderStyles = style({
  fontFamily: fonts.primary,
  color: themeVars.colors.text,
  backgroundColor: themeVars.colors.background,
});
