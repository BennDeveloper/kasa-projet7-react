
import React from "react";
import "./ApartmentEquipements.css"

export function ApartmentsEquipements(){
    return (
        <div className="apartment__Equipements">
        <p className="Equipements__header">
             <span>Équipements</span>
             <span><i class="fa-solid fa-chevron-down"></i></span>
        </p>
          <p className="Equipements__content">
                Climatisation<br/>
                Wi-Fi<br/>Cuisine<br/>Espace de travail<br/>
                Fer à repasser<br/>Sèche-cheveux<br/>Cintres</p>
        </div>
  );
  }