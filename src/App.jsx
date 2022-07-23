import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Home } from "./Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
