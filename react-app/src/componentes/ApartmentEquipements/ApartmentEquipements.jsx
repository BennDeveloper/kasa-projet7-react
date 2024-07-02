
import React from "react";
import "./ApartmentEquipements.css"

export function ApartmentsEquipements(props){
    return (
        <div className="apartment__Equipements">
        <p className="Equipements__header">
             <span>{props.title}</span>
             <span><i class="fa-solid fa-chevron-down"></i></span>
        </p>
          <p className="Equipements__content">{props.content}</p>
        </div>
  );
  }