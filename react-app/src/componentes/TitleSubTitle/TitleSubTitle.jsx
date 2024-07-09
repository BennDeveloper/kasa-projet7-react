import React from "react";
import './TitleSubTitle.css'


export function TitleSubTitle({title}, {subtitle}) {
   
    return (
   <div className="apartment-title">
          <h1>{title}</h1>            
          <h2>{subtitle}</h2>          
     { /* <div className='Apartment__tag'>
          {flat.tags.map((tag, index) => (
          <span key={index}>{tag}</span>           
           ))}
       </div>*/}
   </div>
   );
}
export default TitleSubTitle