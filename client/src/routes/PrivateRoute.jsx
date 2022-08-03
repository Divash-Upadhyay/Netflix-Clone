import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { loadData } from "../redux/auth/localStorage";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  // console.time("time");
  const token = loadData("token");

  if (token !== null) {
    return children;
  }
  return <Navigate to="/login" />;
};
