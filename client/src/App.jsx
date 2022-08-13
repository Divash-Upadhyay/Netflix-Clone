import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Home } from "./pages/Home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { AllRoutes } from "./routes/AllRoutes";
import { Image } from "./Components/front/Image";
import { Faq } from "./Components/faqs/Faq";
import { Footer } from "./Components/footer/Footer";
import { Plan } from "./pages/plan/Plan";
import { Payment } from "./pages/payment/Payment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AllRoutes />
      
    </div>
  );
}

export default App;
