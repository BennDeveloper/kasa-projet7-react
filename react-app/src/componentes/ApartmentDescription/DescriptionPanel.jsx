
import React from "react";
import "./DescriptionPanel.css"

export function DescriptionPanel(props){
    return (
  <div className="description__panel">
      <p className="description__header">
       <span>{props.title}</span>
       <span><i class="fa-solid fa-chevron-down"></i></span>
      </p>
      <p className="description__content">{props.content}</p>
  </div>
  );
  }