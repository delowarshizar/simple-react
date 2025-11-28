import "./App.css";
import Delowar from "./toDo";
import Actors from "./Actor";
import Singer from "./Singer";
function App() {
  const nameOfActors = ["Thomas Shelby", "Author Shelby", "Arda Shelby"];
  const Singers = [
    { id: 1, name: "Tahsan", age: 40 },
    { id: 2, name: "Mithila", age: 43 },
    { id: 3, name: "Pritom", age: 45 },
  ];

  return (
    <>
      <h1>Delowar Husain</h1>
      <Info></Info>
      <Person></Person>
      <Coding name="Delowar" stack="Mern"></Coding>
      <Coding name="Shizar" stack="Laravel"></Coding>
      <Coding name="AyanBabu" stack="Java"></Coding>
      <Player name="Mushi" runs="5000"></Player>
      <Delowar task="Study" status={true}></Delowar>
      <Delowar task="Shower" status={false}></Delowar>
      <Delowar task="lunch" status={false}></Delowar>
      {nameOfActors.map((actor) => (
        <Actors Name={actor}></Actors>
      ))}

      {Singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
    </>
  );
}

function Info() {
  const styleInfo = {
    border: "3px solid green",
    borderRadius: "5px",
  };
  return <h3 style={styleInfo}>I am a Aspiring Full Stack developer</h3>;
}

function Person() {
  return (
    <div>
      <p>Department of CSE</p>
      <p>Daffodil International University</p>
      <h1>Skills</h1>
      <ul className="person">
        <li>C programming </li>
        <li>Web Development</li>
      </ul>
    </div>
  );
}

function Coding(obj) {
  return (
    <div
      style={{
        border: "3px solid blue",
        borderRadius: "10px",
        textAlign: "start",
        padding: "10px",
        margin: "10px 0px",
      }}
    >
      <h3>Name: {obj.name}</h3>
      <h3>Stack: {obj.stack} </h3>
    </div>
  );
}

function Player({ name, runs }) {
  return (
    <div
      style={{
        border: "3px solid yellow",
        borderRadius: "10px",
        textAlign: "start",
        padding: "10px",
        margin: "10px 0px",
      }}
    >
      <h3>Name: {name}</h3>
      <h3>Runs: {runs} </h3>
    </div>
  );
}

export default App;
