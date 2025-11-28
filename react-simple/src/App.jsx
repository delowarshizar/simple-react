import "./App.css";
import State from "./State";
import Bowler from "./Bowler";
import Posts from "./Posts";
import { Suspense } from "react";

const handelPost = async () => {
  const loadPost = await fetch("https://jsonplaceholder.typicode.com/posts");
  return loadPost.json();
};

function App() {
  function handleClick() {
    alert("button 1 clicked");
  }

  function handlePara(num) {
    let total = 5 + num;
    alert(total);
  }

  const postData = handelPost();

  return (
    <>
      <Suspense fallback={<p>Posts are loading ....</p>}>
        <Posts postData={postData}></Posts>
      </Suspense>

      <Bowler name="Malinga" />
      <Bowler name="Bumrah" />
      <h1>Delowar Husain</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("button 2 clicked")}>Click Me</button>
      <button onClick={() => handlePara(10)}>Click Me</button>
      <State></State>
    </>
  );
}

export default App;
