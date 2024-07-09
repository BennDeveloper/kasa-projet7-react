import React from 'react'
import './ApartmentHeader.css'
import TitleSubTitle from '../TitleSubTitle/TitleSubTitle';
import { OwnerDetails } from '../OwnerDetails/OwnerDetails';
import { OwnerStars } from '../OwnerStars/OwnerStars';


export function ApartmentHeader(props) {
  
const flat = props.flat;

  return (
    <div className='apartment__header'>

       <TitleSubTitle title={flat.title} subtitle={flat.location} />
     
     <div className='apartment__owner'>

      <OwnerDetails  flat={flat}  />
      
      <OwnerStars flat={flat}  />
     
     </div>
  </div>
  )
}

