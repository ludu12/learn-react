import React from "react";
import "./Counter.css";

function Counter(props) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (count === 10) {
      alert("Secret message...");
    }
  }, [count]);

  return (
    <button
      className="Counter"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <span>Count: {count}</span>
    </button>
  );
}

export default Counter;
