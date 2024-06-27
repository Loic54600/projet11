
import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EditProfil from '../../components/EditProfil/EditProfil';
import Account from '../../components/Account/Account';

import AccountDatas from "../../datas/AccountData.json"


function Login() {

  const isLoggedIn = useSelector((state) => state.log.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  async function getUser() {
    let token = "";
    const getToken = () => {
      token = window.sessionStorage.getItem("token");
      if (!token) {
        token = window.localStorage.getItem("token");
      }
      return token;
    };
    getToken();

  }
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      getUser()
        .then((userData) => {
          dispatch(setUser(userData));
        })
        .catch((error) =>
          console.error( error)
        );
    }
  });
  return (
    <main>
      <Header />
      <main className='main bg-dark'>
        <EditProfil />
        {AccountDatas.map((AccountData) => {
          return (
            <Account
              key={AccountData.id}
              title={AccountData.title}
              amount={AccountData.amount}
            />
          );
        })}
      </main>
      <Footer />
    </main>
  );
};

export default Login;

