

import React from "react";
import './TitleSubTitle.css';


function TitleSubTitle({ title, subtitle }) {
  return (
    <div className="apartment-title">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
       
    </div>
   
  );
}

export default TitleSubTitle;