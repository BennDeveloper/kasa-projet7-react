import React from 'react'
import './Card.css'
import { Link } from "react-router-dom"

function Card(props) {   //
  return (
    
    <Link to={`/flat/${props.id}`} >     { /* lien vers  (/flat/  +  la valeur dynamique de .id */}
     <div className='apartment'>
       <img src={props.imageUrl} alt="" />
       <div className='apartment__subtitle'>{props.title}</div>
     </div>
    </Link>
 
    
  )
}

export default Card