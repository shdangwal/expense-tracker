import { style } from "@vanilla-extract/css";

export const colorTileStyles = style({
  height: "35px",
  width: "35px",
  border: "1px solid black",
});

export const demoColorContainer = style({
  display: "flex",
  justifyContent: "space-between",
  margin: "12px 0",
});
