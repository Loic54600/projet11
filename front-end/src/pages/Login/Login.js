import React from 'react';
import Footer from '../../components/Footer/Footer';
import Form  from '../../components/Form/Form';
import Header from '../../components/Header/Header';


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