import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import "../src/styles/index.scss";



import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Login/Login';
import Profile from './pages/Profile/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


