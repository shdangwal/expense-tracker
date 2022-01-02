import { ThemeContext } from "components/theme-provider/ThemeProvider";
import type { NextPage } from "next";
import { useContext } from "react";
import { alignCenter, mainContainer } from "../styles/main.css";

const Home: NextPage = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <main className={alignCenter}>
      <div className={mainContainer}>
        Hello World
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </main>
  );
};

export default Home;
