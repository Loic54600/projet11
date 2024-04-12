import React from 'react';


import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';

const Login = () => {
  return (
    <div>
      <Header />
      <main className='bg-dark'>
        <Form/>
      </main>
      <Footer />
    </div>
  );
};

export default Login;