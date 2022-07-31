import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import { Home } from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Watch from "../pages/watch/Watch";
import { store } from "../redux/Store";

export const AllRoutes = () => {
  const auth = useSelector((store) => store.token.token);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={auth !== null ? <Home /> : <Navigate to="register" />}
      />

      <Route
        path="/register"
        element={auth == null ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/login" element={<Login />} />
      {auth !== null && (
        <>
          <Route path="/movies" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
        </>
      )}
    </Routes>
  );
};
