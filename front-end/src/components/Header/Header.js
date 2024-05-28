import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import Logo from '../../../src/assets/argentBankLogo.webp'

import { useSelector, useDispatch } from "react-redux";

function Header() {
  const isLoggedIn = useSelector((state) => state.log.isLoggedIn);
  const userData = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();

  /*Variable qui supprime le token et deconnecte */
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  return (
      <nav className="main-nav">
        <NavLink to="/" >
          <div className="main-nav-logo">
            <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
          </div>
        </NavLink>
        <div>
        <div>
        {isLoggedIn ? (
          <div>
            {/*affiche le nom de la personne username et le logo */} 
            <NavLink to="/profile" className={"main-nav-item"}>
              <i className="fa fa-user-circle"></i> {userData.userName}
            </NavLink>
           {/* === vérification des valeurs et déconnection du compte*/} 
            {location.pathname === "/profile" && (
              <NavLink to="/" onClick={handleLogout} className={"main-nav-item"}>
                <i className="fa fa-sign-out"></i> Sign Out
              </NavLink>
            )}
          </div>
        ) : (
          <NavLink to="/login" className={"main-nav-item"}>
            <i className="fa fa-user-circle"></i> Sign In
          </NavLink>
        )}
      </div>
        </div>
      </nav>

  );
}

  export default Header;