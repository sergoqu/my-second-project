import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPageLazy } from "./components/aboutPage/AboutPageLazy";
import { CounterPageLazy } from "./components/mainPage/CounterPageLazy";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<CounterPageLazy />} />
        <Route path="/about" element={<AboutPageLazy />} />
      </Routes>
    </Suspense>
  );
};

export default App;
