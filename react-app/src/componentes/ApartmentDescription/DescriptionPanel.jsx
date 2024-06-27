
import React from "react";
import "./DescriptionPanel.css"

export function DescriptionPanel(){
    return (
  <div className="description__panel">
      <p className="description__header">
       <span> Description</span>
       <span><i class="fa-solid fa-chevron-down"></i></span>
      </p>
      <p className="description__content">Vous serez à 50m du canal Saint-martin où vous pourrez<br/> 
         pique-niquer l'été et à coté de nombreux bars et<br/> 
         restaurants. Au coeur de Paris avec 5 lignes de métro et de<br/> 
         nombreux bus. Logement parfait pour les voyageurs en <br/> 
         solo et les voyageurs d'affaires. Vous etes à 1 station de la<br/>
          gare de l'est (7 minutes à pied)
      </p>
  </div>
  );
  }