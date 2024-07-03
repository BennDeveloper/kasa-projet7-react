import React, { useState } from "react";
import "./DescriptionPanel.css";

export function DescriptionPanel(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="description__panel">
      <p className="description__header" onClick={toggleContent}>
        <span>{props.title}</span>
        <span>
          <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </span>
      </p>
      <div className={`description__content ${isOpen ? 'open' : ''}`}>
        {props.content}
      </div>
    </div>
  );
}