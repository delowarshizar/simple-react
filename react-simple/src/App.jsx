import "./App.css";
import State from "./State";
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
      <h1>Delowar Husain</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("button 2 clicked")}>Click Me</button>
      <button onClick={() => handlePara(10)}>Click Me</button>
      <State></State>
    </>
  );
}

export default App;
