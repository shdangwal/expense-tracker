import { style } from "@vanilla-extract/css";
import { themeVars } from "./themes.css";

export const mainContainer = style({
  maxWidth: "1100px",
  minWidth: "320px",
});

export const alignCenter = style({
  display: "flex",
  justifyContent: "center",
});
