import React from 'react';
import logo from './logo.svg';
import HomePage from './pages/home-page/home-page';
import Login from './pages/login-page/login-page';
import Regester from './pages/register/register';

import { Routes, Route } from 'react-router-dom';
import OrderProduct from './layouts/order-modal/product-order-modal';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regester />} />
      </Routes>
    </div>
  );
}

export default App;
