import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/sign-up/Registration";
import Dashboard from "../pages/Dashboard";
import UserPage from "../pages/user/UserPage";
import Product from "../pages/product/Product";
import ProductForm from "../pages/product/ProductForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="user" element={<UserPage />} />
          <Route path="product" element={<Product />}>
            <Route path="add" element={<ProductForm />} />
            <Route path="edit/:id" element={<ProductForm />} />
          </Route>
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
