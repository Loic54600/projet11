import React from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const Login = () => {

  


  return (
    <main>
      <Header />
      <main className='main bg-dark'>
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
            </div>
            <NavLink to="/profil" >
              <div className="sign-in-button">Sign In</div>
            </NavLink>
          </form>
        </section>
      </main>
      <Footer />
    </main>
  );
};

export default Login;