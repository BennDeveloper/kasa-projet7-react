import React from 'react'
import Banner from '../componentes/Banner/Banner';

import Navbar from '../componentes/Navbar/Navbar';
import Main from '../componentes/Main/Main';
import Footer from '../componentes/Footer/Footer';


import AboutBanner from "../assets/images/banner2.png";



function About() {
  return (
 
    <div>
      <Main>
       <Navbar />
       <Banner image={AboutBanner} />
     </Main>
     <Footer />
    </div>

  );
}

export default About;
