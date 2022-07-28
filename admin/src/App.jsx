import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import List from "./pages/list/List";
import ListList from "./pages/listlist/ListList";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />

          <Route path="/" element={user ? <Home /> : <Login />} />

          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />

          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<ProductList />} />
          <Route path="/lists" element={<ListList />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/newList" element={<NewList />} />

          <Route path="/movies/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
