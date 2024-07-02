import React from 'react'
import './ApartmentHeader.css'


export function ApartmentHeader(props) {
  
const flat = props.flat;
const [firstName, lastName] = flat.host.name.split(" ");

  return (
    <div className='apartment__header'>
    <div className="apartment-title">
          <h1>{flat.title}</h1>            
          <h2>{flat.location}</h2>          
       <div className='Apartment__tag'>
       {flat.tags.map((tag, index) => (
  <span key={index}>{tag}</span>           
          ))}
       </div>
     </div>
     <div className='apartment__owner'>
     <div className='apartment__owner__details'>
          <h3>
            <span>{firstName}</span> 
            <span>{lastName}</span>
          </h3>
          <div className='apartment__owner__badge'>
            <img src={flat.host.picture} alt="" />
          </div>
      </div>
      <div className='apartment__owner__stars'>

      {[1, 2, 3, 4, 5].map((number) => (
  <span key={number} className={props.flat.rating >= number ? "on" : ""}>★</span>
         ))}
      </div>
     </div>
  </div>
  )
}

