import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/sign-up/Registration";
import Dashboard from "../pages/Dashboard";
import UserPage from "../pages/user/UserPage";
import Product from "../pages/product/Product";
import ProductForm from "../pages/product/ProductForm";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import PrivateProtectedRoute from "../components/PrivateProtectedRoute";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="dashboard" element={<PrivateProtectedRoute />}>
            <Route path="user" element={<UserPage />} />
            <Route path="product" element={<Product />}>
              <Route path="add" element={<ProductForm />} />
              <Route path="edit/:id" element={<ProductForm />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
