
import React , { useState }  from 'react';
import "./Banner.css";







export function Banner(props) {

const pictures = props.pictures;
const [ currentPicture, setCurrentPicture] = useState(0);   //use useState pour créer une variable d'état currentPicture initialisée à 0, et une fonction setCurrentPicture pour la mettre à jour. currentPicture représente l'index de l'image actuellement affichée.





// afficher que la premier image de banner
const getClassName = (i) => {   // il prendre un index il lui dire --->
  if (i === currentPicture) return "show";   // si l'index (0) = currentPicture alor Show (mentrer la  premiere image les autre non )
  return "";                  // si non le reste est opaciti 0
};





const mouveToNext = () => {
  setCurrentPicture((currentPicture + 1) % pictures.length);   //  (0) => 1  => 2 ...  // % pictures.length);  ne jamis deppaser (pictures.length) (% modulo)
};

const mouveToPrevious = () => {                  //  (0) => 1  => 2 ...  // % pictures.length);  ne jamis deppaser (pictures.length) (% modulo)         
  const newCurrentPicture = currentPicture - 1;
  if (newCurrentPicture < 0) {              //  mais si c'est il es inférieur a zero il faur que l'index lenth -1
    setCurrentPicture(pictures.length - 1);
    return;
  }
  setCurrentPicture(currentPicture - 1);
};

//Déclare les variables
  let arrowLeft;
  let arrowRight;
  let countPictures;



//// Si la liste des images contient plus d'une image,
  if(pictures.length > 1){
    arrowLeft = <button className='btn-Previous' onClick={mouveToPrevious}>  {/* quand on clique sur btn  ca appelle la conction mouveToPre ou Nexi */}
                    <i className='fas fa-chevron-left'></i>
                </button> ;
    arrowRight = <button className='btn-next' onClick={mouveToNext}>
                    <i className='fas fa-chevron-right'></i>
                </button>;
    countPictures = <span className='slide-counter'>
                        {currentPicture + 1} / {pictures.length}  {/* currentPicture  index 0 jusque la fin de (pictures.length)    */}
                    </span>
  }






  return (
    <div className="apartment__banner">

      <div className="image__container" >

        {pictures.map((pic, i) => (          // pour chacune de mes rictures tu menvoie une pic 
        <img key={pic} src={pic} alt="" className={getClassName(i)}></img>  // className est le resultat de (getClassName) + index
        ))}
    
      </div>
          {arrowLeft}
          <div className='countPictures'>
          {countPictures}
          </div>
          {arrowRight}
    </div>

  );
}
