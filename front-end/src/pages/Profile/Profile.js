import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EditProfil from '../../components/EditProfil/EditProfil';
import Account from '../../components/Account/Account';











const Login = () => {
  return (
    <main>
      <Header />
      <main className='main bg-dark'>
        <EditProfil/>
        <Account/>
      </main>
      <Footer />
    </main>
  );
};

export default Login;

