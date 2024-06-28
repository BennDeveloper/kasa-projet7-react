import React from 'react'
import './ApartmentCard.css'
import { Link } from "react-router-dom"

function Apartment(props) {
  console.log("props dans l'apartment card", props);
  return (
    
    <Link to="/flat">
     <div className='apartment'>
       <img src={props.imageUrl} alt="" />
       <div className='apartment__subtitle'>{props.title}</div>
     </div>
    </Link>
 
    
  )
}

export default Apartment