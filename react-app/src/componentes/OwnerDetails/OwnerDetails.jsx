import React from "react";
import './OwnerDetails.css';



export function OwnerDetails(props){
    const flat = props.flat;
    const [firstName, lastName] = flat.host.name.split(" ");


    return(
        <div className='apartment__owner__details'>
          <h3>
            <span>{firstName}</span> 
            <span>{lastName}</span>
          </h3>
          <div className='apartment__owner__badge'>
            <img src={flat.host.picture} alt="" />
          </div>
      </div>
    )
}