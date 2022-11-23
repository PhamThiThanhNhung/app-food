import React, { useState } from 'react';
import HomePage from './pages/home-page/home-page';
import Login from './pages/login-page/login-page';
import Regester from './pages/register/register';
import BlogPage from './pages/blog-page/blog-page';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [currentItem, setCurrentItem] = useState<string>('Home');
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
            />
          }
        />
        <Route
          path="/blog"
          element={
            <BlogPage
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regester />} />
      </Routes>
    </div>
  );
}

export default App;
