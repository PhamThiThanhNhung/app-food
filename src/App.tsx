import React from 'react';
import logo from './logo.svg';
import HomePage from './pages/home-page/home-page';
import Login from './pages/login-page/login-page';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
