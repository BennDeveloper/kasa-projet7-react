import React from "react";
import './Tags.css';

function Tags({ tags }) {
  if (!tags) {
    return null; // التأكد من أن tags معرّف
  }

  return (
    <div className='Apartment__tag'>
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
}

export default Tags;