import React from 'react';

/*Appel des components */
import Feature from '../../components/Feature/Feature';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const Home = () => {
  return (
    <main>
      <Header />
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <main className='main'>
      <Feature />
      </main>
      <Footer />
    </main>
  );
};

export default Home;