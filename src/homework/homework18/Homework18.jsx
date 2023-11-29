import { useState } from "react";
import Counter from "../../components/Counter/Counter";

function Homework18() {
  const [count, setCount] = useState(0);

  const onMinus = () => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlus = () => {
    setCount((prevValue) => prevValue + 1);
  };
  return <Counter count={count} onMinus={onMinus} onPlus={onPlus} />;
}

export default Homework18;
