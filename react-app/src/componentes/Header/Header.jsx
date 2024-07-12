import React from 'react'
import './Header.css'
import TitleSubTitle from '../TitleSubTitle/TitleSubTitle';
import { OwnerDetails } from '../OwnerDetails/OwnerDetails';
import { OwnerStars } from '../OwnerStars/OwnerStars';
import Tags from '../Tags/Tags';



export function Header(props) {
  
const flat = props.flat;

  return (

    <div className='apartment__header'>
      
      <div className='titleAndOwner'>
          <TitleSubTitle title={flat.title} subtitle={flat.location} />
          <Tags tags={flat.tags} />
      </div>

      <div className='apartment__owner'>
          <OwnerDetails  flat={flat}  />
          <OwnerStars flat={flat}  />
      </div>
      
       
    </div>
  )
}

