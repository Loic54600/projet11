import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

useRef
function FormSignin() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /*le hook useRef se distingue comme un outil précieux pour gérer les valeurs et accéder aux éléments du modèle d’objet du document (DOM). */
  const loginButton = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  /* permet de mettre à jour l'état en fonction de deux conditions : si l'utilisateur est connecté ou non. 
  Cela explique également pourquo il'état initial est défini sur false, ce qui signifie que l'utilisateur n'est pas connecté. */
  const [rememberMe, setRememberMe] = useState(false);


  /* isLoggedIn est une technique courante utilisée dans React. js pour faire varier l'interface utilisateur (UI) en fonction 
  du statut de connexion de l'utilisateur. */
  const isLoggedIn = useSelector((state) => state.log.isLoggedIn);


  async function loginRequest() {
    /*Creation de la variable du formulaire
    - on récupére la valeur email et password */
    let Formlogin = {
      "email": emailInput.current.value,
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
    emailInput.current.classList.add("Failed");
    navigate("/");
    ;
  }

  /* useEffect est un Hook React qui vous permet de synchroniser un composant avec un système externe.*/
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  },
    [isLoggedIn, navigate]);


 

  /*### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456` 
*/

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username"  required ref={emailInput} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required ref={passwordInput}  />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" id="sign-in-button"
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