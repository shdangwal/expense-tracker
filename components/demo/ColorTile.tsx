import React from "react";
import { colorTileStyles } from "./colorTile.styles.css";
import { IColorTileProps } from "./colorTile.types";

const ColorTile: React.FC<IColorTileProps> = ({ colorCode = "#fff" }) => {
  return (
    <div
      style={{ backgroundColor: colorCode }}
      className={colorTileStyles}
    ></div>
  );
};

export default ColorTile;
