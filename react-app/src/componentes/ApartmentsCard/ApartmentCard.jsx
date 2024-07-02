import React from 'react'
import './ApartmentCard.css'
import { Link } from "react-router-dom"

function Apartment(props) {
 
const state = {
    
};

  return (
    
    <Link to="/flat" state={{apartmentId: props.id}}>
     <div className='apartment'>
       <img src={props.imageUrl} alt="" />
       <div className='apartment__subtitle'>{props.title}</div>
     </div>
    </Link>
 
    
  )
}

export default Apartment