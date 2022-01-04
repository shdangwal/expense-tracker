import ColorTile from "components/demo/ColorTile";
import React from "react";
import { themeVars } from "styles/index.css";
import { alignCenter, mainContainer } from "styles/main.css";
import { demoColorContainer } from "components/demo/colorTile.styles.css";
const Demo = () => {
  return (
    <main className={alignCenter}>
      <div className={mainContainer}>
        <h1>Style System</h1>
        <h2>Colors</h2>
        {Object.keys(themeVars.colors).map((color) => (
          <div className={demoColorContainer} key={color}>
            {color} - <ColorTile colorCode={themeVars.colors[color]} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Demo;
