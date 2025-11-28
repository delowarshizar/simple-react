import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const handleValue = () => {
    const newValue = count + 1;
    setCount(newValue);
  };

  const style = {
    border: "2px solid yellow",
    margin: "10px 0px",
  };

  return (
    <div style={style}>
      <h3>count : {count} </h3>
      <button onClick={handleValue}>add: {setCount}</button>
    </div>
  );
}
