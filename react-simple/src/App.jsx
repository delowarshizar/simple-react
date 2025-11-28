import "./App.css";
import State from "./State";
import Bowler from "./Bowler";
function App() {
  function handleClick() {
    alert("button 1 clicked");
  }

  function handlePara(num) {
    let total = 5 + num;
    alert(total);
  }
  
  return (
    <>
      <Bowler name="malinga"></Bowler>
      <Bowler name="Bumrah"></Bowler>
      <h1>Delowar Husain</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("button 2 clicked")}>Click Me</button>
      <button onClick={() => handlePara(10)}>Click Me</button>
      <State></State>
    </>
  );
}

export default App;
