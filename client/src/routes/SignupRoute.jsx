import React from "react";
import { Navigate, useNavigate } from "react-router";
import { loadData } from "../redux/auth/localStorage";

export const SignupRoute = ({ children }) => {
  const navigate = useNavigate();
  const signup = loadData("isSignup");

  console.log(signup);

  if (signup) {
    return children;
  }
  return <Navigate to="/register" />;
};
