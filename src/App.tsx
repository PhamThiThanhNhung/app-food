import React from 'react';
import HomePage from './pages/home-page/home-page';
import Login from './pages/login-page/login-page';
import Regester from './pages/register/register';

import { Routes, Route } from 'react-router-dom';
import Admin from './pages/admin-page/admin-page';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regester />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
