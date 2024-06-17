import React from 'react'
import "./Banner.css";

function Banner({image, title}) {
  return (
  <div className='banner'>
    <img src={image} alt="bannière" />
    <h1>{title}</h1>
  </div>
  )
}

export default Banner