import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <React.Fragment>
      <span className="text-yellow-400 text-xl py-2 px-4">{counter}</span>
      <button className="border px-4 py-2 text-xl" onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <button className="border px-4 py-2 text-xl" onClick={() => setCounter((counter) => counter - 1)}>-</button>
    </React.Fragment>
  );
};

export default Counter;
