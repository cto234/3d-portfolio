import React from 'react';
import Head from '../Head/Head';
import About from '../About/About';
import './home.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <Head />
      <div className="content">
        <About id='aboutSection' />
      </div>
    </div>
  );
}


export default Home;
