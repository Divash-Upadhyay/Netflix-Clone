import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import { Home } from "../pages/Home/Home";
import Login from "../pages/login/Login";
import { Payment } from "../pages/payment/Payment";
import { Plan } from "../pages/plan/Plan";
import Register from "../pages/register/Register";
import Watch from "../pages/watch/Watch";

import { PrivateRoute } from "./PrivateRoute";
import { SignupRoute } from "./SignupRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SignupRoute>
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          </SignupRoute>
        }
      />
      <Route path="/plan" element={<Plan />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/movies"
        element={
          <PrivateRoute>
            <Home type="movie" />
          </PrivateRoute>
        }
      />
      <Route
        path="/series"
        element={
          <PrivateRoute>
            <Home type="series" />
          </PrivateRoute>
        }
      />
      <Route
        path="/watch"
        element={
          <PrivateRoute>
            <Watch />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
