import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/sign-up/Registration";
import Dashboard from "../pages/Dashboard";
import UserPage from "../pages/user/UserPage";
import Product from "../pages/product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
