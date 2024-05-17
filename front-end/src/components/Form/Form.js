import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

function FormSignin () {
  const navigate = useNavigate ();
  const dispatch = useDispatch();
  const loginButton = useRef();

  const [rememberMe, setRememberMe] = useState(false);


  async function loginRequest() {
    /*Creation de la variable du formulaire
    - on récupére la valeur email et password */
    let Formlogin = {
      "email": usernameInput.current.value,
      "password": passwordInput.current.value,
    };

    let FormComplete = JSON.stringify(Formlogin);

    return await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: FormComplete,
    }).then((resp) => resp.json());
  }

/*Creation de la variable de connexion*/
const handleLogin = async (event) => {
  event.preventDefault();
  try {
    /*variable reponse  */
    const response = await loginRequest();
    /*si reponse est une erreur renvoie Echec  */
    if (response.error) {
      Echec();
      /*sinon la connexion s'effectue */
    } else {
      const token = response.body.token;
      sessionStorage.setItem("token", token);
      if (rememberMe) {
        localStorage.setItem("token", token);
      }
      dispatch({ type: "LOGIN_SUCCESS" });
      navigate("/profile");
    }
  } catch (error) {
    Echec();
  }
};
/* 1- Tout d’abord, le code dans try {...} est exécuté
   2- S’il n’y a pas eu d’erreur, alors catch(error) est ignoré : l’exécution arrive à la fin de try et continue en ignorant catch.
   3- Si une erreur survient, alors l’exécution de try est arrêtée et le contrôle se place au début de catch(error).
*/

/*Fonction Echec de connexion */
  function Echec() {
    /*active la classe en echec */
    passwordInput.current.classList.add("Failed");
    usernameInput.current.classList.add("Failed");
    window.setTimeout(function () {
      /*Annule la classe */
      passwordInput.current.classList.remove("Failed");
      usernameInput.current.classList.remove("Failed");
    }, 500);
  }


  return (
    <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value="tony@stark.com" required ref={usernameInput} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value="password123" required ref={passwordInput} />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button"id="sign-in-button"
          ref={loginButton}
          onClick={handleLogin}>
          Sign In
        </button>
      </form>
    </section>
  </main>
  )
}
export default FormSignin;