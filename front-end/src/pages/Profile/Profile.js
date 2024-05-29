import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EditProfil from '../../components/EditProfil/EditProfil';
import Account from '../../components/Account/Account';

import AccountDatas from "../../datas/AccountData.json"

const Login = () => {
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

