import React from 'react';
import ReactDOM from 'react-dom/client';

import "../src/styles/index.scss";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Login/Login';
import Profil from '../src/pages/Profile/Profil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


