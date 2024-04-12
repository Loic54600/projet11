import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Account from '../../components/Account/Account';

const Login = () => {
  return (
    <div>
      <Header />
      <main>
        <Account/>
      </main>
      <Footer />
    </div>
  );
};

export default Login;