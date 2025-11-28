import { useState } from "react";
import "./App.css";
import { Suspense } from "react";
import Comments from "./Comments";

const handleComment = async () => {
  const loadComments = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return loadComments.json();
};

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

  const fetchComments = handleComment();
  return (
    <>
      <h1>Practice Task Here: </h1>
      <div style={style}>
        <h3>Count: {ini}</h3>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
        <button onClick={Reset}>Reset</button>
      </div>
      <Suspense fallback={<h1>Comments are loading .....</h1>}>
        <Comments fetchComments={fetchComments}></Comments>
      </Suspense>
    </>
  );
}

export default App;
