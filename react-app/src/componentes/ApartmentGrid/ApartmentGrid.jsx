import React from 'react';
import './ApartmentGrid.css';
import ApartmentCard from '../ApartmentsCard/ApartmentCard';
import { useApartments } from '../../hooks/useApartments';



function ApartmentGrid() {                         

  const apartments = useApartments ();

  return (
    <div className='grid'>
        {apartments.map((apartment)=> (                                                //Parcourir les appartements et rendre une ApartmentCard pour chaque appartement
             <ApartmentCard 
             key={apartment.id} 
             title={apartment.title} 
             imageUrl={apartment.cover} 
             id={apartment.id} />     
      ))}
    </div>
  )
}

export default ApartmentGrid