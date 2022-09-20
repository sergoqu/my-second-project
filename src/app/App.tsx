import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { MainPage } from "pages/mainPage";
import { AboutPage } from "pages/aboutPage";
import { classNames } from "shared/lib/classNames/classNames";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>ChangeTheme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
