


import React from 'react';
import "./ApartmentBanner.css";

export function ApartmentBanner(props) {
  return (
    <div className='apartment__banner'>
        <img src={props.imageUrl} alt="" />
      </div>
  )
}
