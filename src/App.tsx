import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPageLazy } from "./components/aboutPage/AboutPageLazy";
import { CounterPageLazy } from "./components/mainPage/CounterPageLazy";
import "./style/index.scss";
import { useTheme } from "./themes/useTheme";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>ChangeTheme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CounterPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
