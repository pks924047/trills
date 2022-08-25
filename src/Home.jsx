import React from 'react';
import { NavLink } from 'react-router-dom';
import  web from '../src/images/home2.webp';
import Common from './Common';

const Home =() => {
   return(
    <>
       <Common
          name='Grow Your Company with'
          name1='Good Ideas'
          imgsrc={web}
          visit='/about'
          btname='Get Started'
       />
    </>
	);

};

export default Home;
