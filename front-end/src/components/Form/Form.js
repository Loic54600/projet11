import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import { loginSuccess, loginFailed } from '../../redux/Connexion.auth.valid';
import { ValidEmail, ValidPassword } from '../../redux/Connexion.auth.valid';


const Form = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, SeterrorMessage] = useState('');

  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*Vérification des données Email et Mot de passe */
  const Submit = async (event) => {
    event.preventDefault();
    if (!ValidEmail(email)) {
      SeterrorMessage("Adresse email non valide");
      return;
    }
    if (!ValidPassword(password)) {
      SeterrorMessage("Mot de passe non valide");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });


      if (response.ok) {
        const data = await response.json();

        const token = data.body.token;
        dispatch(loginSuccess(token));
        sessionStorage.setItem("token", token);
        if (remember) {
          localStorage.setItem("token", token);
        }
        navigate('/profile');
      } else {
        const error = "email/mot de passe incorrect"
        dispatch(loginFailed(error));
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={Submit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            id='username'
            type='text'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            id='remember-me'
            type='checkbox'
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <NavLink to="/profil" >
          <div className="sign-in-button">Sign In</div>
        </NavLink>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
      </form>
    </section>
  );
};

export default Form;
