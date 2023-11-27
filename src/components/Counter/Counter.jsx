import { useState } from "react";
import "./styles.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <button
        type="button"
        onClick={() => setCount((prevValue) => prevValue - 1)}
      >
        -
      </button>
      <div className="count">{count}</div>
      <button
        type="button"
        onClick={() => setCount((prevValue) => prevValue + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
