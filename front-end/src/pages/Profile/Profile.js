import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Account from '../../components/Account/Account';

const Login = () => {
  return (
    <main>
      <Header />
      <main className='main bg-dark'>
        <Account/>
      </main>
      <Footer />
    </main>
  );
};

export default Login;

