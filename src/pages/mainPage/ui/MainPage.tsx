import { useState } from "react";

const Counter: React.FC = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState((prev) => prev + 1);
  };
  return (
    <div>
      <span>asd{state}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
