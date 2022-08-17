import React from 'react'
import Carousel from '../../components/Carousel';
import CardGroup from '../../components/Card/index.js';
import Logo from '../../components/Logo/index.js';
import './style.css';


function index()  {
  return (
    <div className='linha'>
      <main>
      <header>
      <Carousel />
      <Logo  />
      </header>
      <CardGroup />
      </main>
    </div>
  ) 
}

export default index

