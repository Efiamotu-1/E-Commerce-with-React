import React from "react";
// // import "./bootstrap.min.css";
// import "./https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
// import "./https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
// import "./js/popper.min.js"  
// import "./js/jquery-3.3.1.slim.min.js"
// import "./js/bootstrap.min.js"
import { Routes, Route, Link } from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import Login from "./components/Login";
// import Navigation from "./components/Navigation";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import HomePage from "./pages/HomePage"
import Products from "./pages/Products";
import Category from "./pages/Category";


function App() {
  return (
    <>
 
 <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/" element={< HomePage/>} />
      <Route path="/products" element={< Products/>} />
      <Route path="/category" element={< Category/>} />



    </Routes>

    </>
  );
}

export default App;
