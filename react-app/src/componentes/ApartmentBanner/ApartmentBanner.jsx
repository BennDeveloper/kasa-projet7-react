


import React , { useState }  from 'react';
import "./ApartmentBanner.css";

export function ApartmentBanner(props) {

const pictures = props.pictures;

const [ currentPicture, setCurrentPicture] = useState(0);

const getClassName = (i) => {
  if (i === currentPicture) return "show";
  return "";
};

const mouveToNext = () => {
  setCurrentPicture((currentPicture + 1) % pictures.length);
};

const mouveToPrevious = () => {

  const newCurrentPicture = currentPicture - 1;
  if (newCurrentPicture < 0) {
    setCurrentPicture(pictures.length - 1);
    return;
  }
  setCurrentPicture(currentPicture - 1);
};

  return (
    <div className="apartment__banner">

      <div className="image__container" >

      {pictures.map((pic, i) => (
        <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
      ))}
    
      </div>

             <button className='btn-Previous' onClick={mouveToPrevious}>
                <i className='fas fa-chevron-left'></i>
             </button>
             <span className='slide-counter'>
                {currentPicture + 1} / {pictures.length}
             </span>
             <button className='btn-next' onClick={mouveToNext}>
                <i className='fas fa-chevron-right'></i>
             </button>


      </div>

  );
}
