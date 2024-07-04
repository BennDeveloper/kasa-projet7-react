import React from 'react'
import './ApartmentHeader.css'
import ApartmentTitle from '../ApartmentTitle/ApartmentTitle';
import { OwnerDetails } from '../OwnerDetails/OwnerDetails';
import { OwnerStars } from '../OwnerStars/OwnerStars';


export function ApartmentHeader(props) {
  
const flat = props.flat;

  return (
    <div className='apartment__header'>

       <ApartmentTitle flat={flat} />
     
     <div className='apartment__owner'>

      <OwnerDetails  flat={flat}  />
      
      <OwnerStars flat={flat}  />
     
     </div>
  </div>
  )
}

