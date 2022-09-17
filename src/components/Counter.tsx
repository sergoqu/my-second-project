import { useState } from "react";
import "./style.scss";
const Counter = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState((prev) => prev + 1);
  };
  return (
    <div>
      <span>{state}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
