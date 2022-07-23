import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Home } from "./Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
      <img
        width="100%"
        src="https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80"
        alt=""
      />
    </div>
  );
}

export default App;
