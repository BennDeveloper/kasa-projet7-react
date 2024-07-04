import React from 'react';
import './ApartmentPage.css'
import { DescriptionPanel } from '../../componentes/ApartmentDescription/DescriptionPanel';
import { ApartmentBanner } from '../../componentes/ApartmentBanner/ApartmentBanner';
import { ApartmentHeader } from '../../componentes/ApartmentHeader/ApartmentHeader';
import { useApartment } from '../../hooks/useApartment';



function ApartmentPage() {
const flat = useApartment();


if (flat == null) return <div>loading...</div>

  return (
    <div className='Apartment-Page'>
      <ApartmentBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat}/>
 
      <div className="apartment__description__area">
         <DescriptionPanel title="Description" content={flat.description} />
         <DescriptionPanel title="Equipements" content={flat.equipments.map((eqpn, i) => <li key={i}>{eqpn}</li>)} />
      </div>
      
    </div>
  )
}

export default ApartmentPage