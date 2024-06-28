import React, {useEffect, useState} from 'react';
import './ApartmentGrid.css';
import ApartmentCard from '../ApartmentsCard/ApartmentCard';




function ApartmentGrid() {
  
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);


  function fetchApartments(){

    fetch("Back-end.json")      // 1. Récupère le fichier "Back-end.json".
      .then((res) => res.json())  // 2. Convertit la réponse textuelle en un objet JSON.
      .then((res) => setApartments (res))
      .catch(console.error);      // 4. Si une erreur se produit, imprime le message d'erreur dans la console.
  }

  
  

  return (
    <div className='grid'>
        {apartments.map((apartment)=> (
             <ApartmentCard title={apartment.title} imageUrl={apartment.cover} />
      ))}
    </div>
  )
}

export default ApartmentGrid