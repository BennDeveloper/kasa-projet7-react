import React from "react";
import './ApartmentTitle.css'


export function ApartmentTitle(props) {
    const flat = props.flat;
    return (
   <div className="apartment-title">
          <h1>{flat.title}</h1>            
          <h2>{flat.location}</h2>          
       <div className='Apartment__tag'>
          {flat.tags.map((tag, index) => (
          <span key={index}>{tag}</span>           
           ))}
       </div>
   </div>
   );
}
export default ApartmentTitle