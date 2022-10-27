import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Todo from "./components/todo/Todo";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="App">
      {open ? <Todo /> : <Card />}

      <button onClick={() => setOpen((prevState) => !prevState)}>{open? 'card' : 'todo'}</button>
    </div>
  );
}

export default App;
