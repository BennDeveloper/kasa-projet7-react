import React from 'react';
import './ApartmentPage.css'
import { ApartmentDescription } from '../../componentes/ApartmentDescription/ApartmentDescription';
import { ApartmentsEquipements } from '../../componentes/ApartmentEquipements/ApartmentEquipements';
import { ApartmentBanner } from '../../componentes/ApartmentBanner/ApartmentBanner';
import { ApartmentHeader } from '../../componentes/ApartmentHeader/ApartmentHeader';


function ApartmentPage() {
  return (
    <div className='Apartment-Page'>
      <ApartmentBanner />
      <ApartmentHeader />
 
      <div className="apartment__description__area">
         <ApartmentDescription />
         <ApartmentsEquipements />
      </div>
      
    </div>
  )
}

export default ApartmentPage