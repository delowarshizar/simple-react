import { useState } from "react";

export default function ({ name }) {
  const [ball, setBall] = useState(0);
  const correctBall = () => {
    const updateBall = ball + 1;
    setBall(updateBall);
  };
  const noBall = () => {
    const updateBall = ball + 0;
    setBall(updateBall);
  };
  const color = {
    border: "3px solid green",
    margin: "10px 0px",
  };

  return (
    <div style={color}>
      {ball >= 6 && <p> Over Completed</p>}
      <h3>Bowler Name: {name} </h3>
      <h3>Total Bowl: {ball} </h3>
      <button onClick={noBall}>Wide</button>
      <button onClick={noBall}>No Ball</button>
      <button onClick={correctBall}>Correct Ball</button>
    </div>
  );
}
