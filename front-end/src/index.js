import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import "../src/styles/index.scss";

import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Login/Login';
import User from './pages/Profile/User';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../src/redux/Root.redux";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<User />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);


