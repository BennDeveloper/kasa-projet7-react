import React, { useState } from 'react';
import './ApartmentPage.css'
import { DescriptionPanel } from '../../componentes/ApartmentDescription/DescriptionPanel';
import { ApartmentBanner } from '../../componentes/ApartmentBanner/ApartmentBanner';
import { ApartmentHeader } from '../../componentes/ApartmentHeader/ApartmentHeader';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';



function ApartmentPage() {

const location = useLocation();
const [flat, setFlat] = useState(null);
useEffect(fetchApartmentData, []);

function fetchApartmentData() {
  fetch("Back-end.json")                 
      .then((res) => res.json())            
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setFlat(flat);
      })  
      .catch(console.error);
}

if (flat == null) return <div>loading...</div>

  return (
    <div className='Apartment-Page'>
      <ApartmentBanner imageUrl={flat.cover} />
      <ApartmentHeader flat={flat}/>
 
      <div className="apartment__description__area">
         <DescriptionPanel title="Description" content={flat.description} />
         <DescriptionPanel title="Equipements" content={flat.equipments.map((eqpn, index) => <li key={index}>{eqpn}</li>)} />
      </div>
      
    </div>
  )
}

export default ApartmentPage