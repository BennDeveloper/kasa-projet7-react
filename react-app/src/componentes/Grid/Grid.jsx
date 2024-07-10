import React from 'react';
import './Grid.css';
import ApartmentCard from '../Card/ApartmentCard';
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