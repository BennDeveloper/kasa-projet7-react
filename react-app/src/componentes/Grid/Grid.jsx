import React from 'react';
import './Grid.css';
import Card from '../Card/Card';
import { useApartments } from '../../hooks/useApartments';



function Grid() {                         

  const apartments = useApartments ();

  return (
    <div className='grid'>
        {apartments.map((apartment)=> (       //Parcourir les appartements et rendre une ApartmentCard pour chaque appartement
             <Card 
             key={apartment.id} 
             title={apartment.title} 
             imageUrl={apartment.cover} 
             id={apartment.id} />     
      ))}
    </div>
  )
}

export default Grid