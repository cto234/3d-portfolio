import React from 'react';
import Head from '../Head/Head';
import About from '../About/About';
import Contact from '../Contact/Contact';
import './home.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <Head />
      <div className="content">
        <About id='aboutSection' />
        <Contact id='contactSection' />
      </div>
    </div>
  );
}


export default Home;
