import React from 'react'
import Banner from '../../layout/Banner/Banner'
import { DescriptionPanel } from '../../componentes/ApartmentDescription/DescriptionPanel'
import  AboutBanner from '../../assets/images/banner2.png'
import './About.css'
import { ApartmentsEquipements } from '../../componentes/ApartmentEquipements/ApartmentEquipements'




function about() {
  return (
    <>
      <Banner image={AboutBanner} />
      <div className='About__container'>
         <DescriptionPanel />
         <ApartmentsEquipements />
         
      </div>
    </>
  )
}

export default about