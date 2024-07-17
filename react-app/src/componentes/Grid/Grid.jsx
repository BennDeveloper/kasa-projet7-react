import React from 'react';
import './Grid.css';
import Card from '../Card/Card';
import { useApartments } from '../../hooks/useApartments';



function Grid() {                         

  const apartments = useApartments ();         //  déclare une constante apps qui contient les appartements récup par le hook useApartments.

  return (
    <div className='grid'>
        {apartments.map((apartment)=> (       //maper sur apartments (arry) pour chaque apartment retourner une <cart + les props/>
             <Card      //     /     //  /   // une <cart + les props/>
             key={apartment.id} 
             title={apartment.title} 
             imageUrl={apartment.cover} 
             id={apartment.id} />     
      ))}
    </div>
  )
}

export default Grid