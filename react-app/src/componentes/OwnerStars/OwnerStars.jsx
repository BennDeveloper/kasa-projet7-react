import React from "react";
import './OwnerStars.css';




    export function OwnerStars(props){     
        
        return (                   

           <div className='apartment__owner__stars'>        
             {[1, 2, 3, 4, 5].map((number) => (             //array [1 ...5 ]    // pour chaque valeur => fais moi un span (par defaut grise mais si le ratting tu utilise la class on c non rien  > = )
                <span key={number} className={props.flat.rating >= number ? "on" : ""}>★</span>
             ))}
          </div>
        );
}