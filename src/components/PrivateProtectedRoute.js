import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Dashboard from "../pages/Dashboard";

function PrivateProtectedRoute(props) {
  let { user } = useUserAuth();

  return user ? <Dashboard /> : <Navigate to="/" />;
}

export default PrivateProtectedRoute;
