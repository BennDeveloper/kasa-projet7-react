import React, { useState } from "react";
import "./DescriptionPanel.css";

export function DescriptionPanel(props) {
  const [isOpen, setIsOpen] = useState(false);       //l'etat actuel   //Utilise le hook useState pour créer une variable d'état isOpen et une fonction setIsOpen pour la mettre à jour.

  const toggleContent = () => {                    //changer l'etat
    setIsOpen(!isOpen);                          //si le setOpen est false il passe  true
  };

  return (
    <div className="description__panel">
      <p className="description__header" onClick={toggleContent}>  {/*gestionnaire d'événements onClick pour appeler toggleContent lorsqu'il est cliqué.*/}
        <span>{props.title}</span>
        <span>
          <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>  {/* // Affiche une icône font-awesome qui change en fonction de l'état isOpen. 
                                                                                              // Si isOpen est vrai, utilise la classe 'fa-chevron-down', sinon utilise 'fa-chevron-up'. */}
        </span>
      </p>
      <div className={`description__content ${isOpen ? 'open' : ''}`}>    {/*Si `isOpen` est vrai, alors ajoute aussi la classe 'open', sinon n'ajoute rien d'autre.*/}
        {props.content}
      </div>
    </div>
  );
}