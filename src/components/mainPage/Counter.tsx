import { useState } from "react";
import classes from "./Counter.module.scss";
import "../../index.scss";
import { Link } from "react-router-dom";

const Counter: React.FC = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState((prev) => prev + 1);
  };
  return (
    <div className={classes.div_cont}>
      <span className="app">asd{state}</span>
      <button onClick={increment}>Increment</button>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Counter;
