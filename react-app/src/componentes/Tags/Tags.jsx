import React from "react";
import './Tags.css';

function Tags({ tags }) {     // Vérifie si la prop `tags` est définie
  if (!tags) {              // Si `tags` n'est pas défini, ne rend rien
    return null; 
  }

  return (                                 //// Rend les tags dans une div avec la classe 'Apartment__tag'
    <div className='Apartment__tag'>
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>       ///// Affiche chaque tag dans un élément span
      ))}
    </div>
  );
}

export default Tags;