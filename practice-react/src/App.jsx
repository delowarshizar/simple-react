import { useState } from "react";
import "./App.css";

function App() {
  const [ini, setIni] = useState(0);

  function Increase() {
    const neValue = ini + 1;
    setIni(neValue);
  }
  function Decrease() {
    const neValue = ini - 1;
    setIni(neValue);
  }
  function Reset() {
    const neValue = 0;
    setIni(neValue);
  }
  const style = {
    border: "3px solid yellow",
    padding: "10px",
    borderRadius: "15px",
  };
  return (
    <>
      <h1>Practice Task Here: </h1>
      <div style={style}>
        <h3>Count: {ini}</h3>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
