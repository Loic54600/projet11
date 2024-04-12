import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../src/assets/argentBankLogo.png'

const Header = () => {
  return (
    <div>
      <nav className="main-nav">
      <NavLink to="/home" >
        <div className="main-nav-logo">
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </div>
        </NavLink>
        <div>
        <NavLink to="/login" >
          <div className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </div>
          </NavLink>
        </div>
      </nav>

    </div>
  );
};

export default Header;