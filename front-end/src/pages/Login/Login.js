import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';

const Login = () => {
  return (
    <main>
      <Header />
      <main className='main bg-dark'>
        <Form />
      </main>
      <Footer />
    </main>
  );
};

export default Login;