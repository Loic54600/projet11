import React from 'react';
import ReactDOM from 'react-dom/client';

import "../src/styles/index.scss";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


