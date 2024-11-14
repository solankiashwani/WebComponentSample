import React, { useState } from "react";

const ChildComponent = ({ onDataUpdate }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      onDataUpdate?.(newCount);
      return newCount;
    });
  };

  return (
    <div style={{ padding: "20px", border: "1px solid blue" }}>
      <h2>React 17 Component : Geronimo</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default ChildComponent;
