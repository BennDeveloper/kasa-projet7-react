import React from 'react'
import Banner from '../../layout/Banner/Banner'
import { ApartmentDescription } from '../../componentes/ApartmentDescription/ApartmentDescription'
import  AboutBanner from '../../assets/images/banner2.png'
import './About.css'




function about() {
  return (
    <>
      <Banner image={AboutBanner} />
      <div className='About__container'>
         <ApartmentDescription />
         <ApartmentDescription />
         <ApartmentDescription />
         <ApartmentDescription />
      </div>
    </>
  )
}

export default about