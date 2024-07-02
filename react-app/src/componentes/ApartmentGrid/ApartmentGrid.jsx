import React, {useEffect, useState} from 'react';
import './ApartmentGrid.css';
import ApartmentCard from '../ApartmentsCard/ApartmentCard';




function ApartmentGrid() {                           // Définir le composant fonctionnel ApartmentGrid
  const [apartments, setApartments] = useState([]);  // Définir l'état apartments avec useState, initialisé à un tableau vide

  useEffect(fetchApartments, []);                    // Utiliser useEffect pour exécuter fetchApartments une fois que le composant est monté


  function fetchApartments(){    
                   // Définir la fonction fetchApartments pour récupérer les données

    fetch("Back-end.json")                  // 1. Récupère le fichier "Back-end.json".
      .then((res) => res.json())            // 2. Convertit la réponse textuelle en un objet JSON.
      .then((res) => setApartments (res))   // 3. Convertir la réponse en un objet JSON
      .catch(console.error);                // 4. Si une erreur se produit, imprime le message d'erreur dans la console.
  }

  
  

  return (
    <div className='grid'>
        {apartments.map((apartment)=> (                                                //Parcourir les appartements et rendre une ApartmentCard pour chaque appartement
             <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id} />      //Passer les propriétés title et imageUrl au composant ApartmentCard
      ))}
    </div>
  )
}

export default ApartmentGrid