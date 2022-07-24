import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Home } from "./pages/Home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Watch /> */}
      {/* <Register /> */}
      <Login />
    </div>
  );
}

export default App;
