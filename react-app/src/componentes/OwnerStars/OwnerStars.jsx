import React from "react";
import './OwnerStars.css';




    export function OwnerStars(props){ 
        const flat = props.flat;
        return (

           <div className='apartment__owner__stars'>
             {[1, 2, 3, 4, 5].map((number) => (
                <span key={number} className={props.flat.rating >= number ? "on" : ""}>★</span>
             ))}
          </div>
        );
}