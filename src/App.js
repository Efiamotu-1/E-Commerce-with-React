import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route} from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import Login from "./components/Login";
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
