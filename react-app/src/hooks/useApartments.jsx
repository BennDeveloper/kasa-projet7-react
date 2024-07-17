
import { useState, useEffect } from "react";




//fonction qui retourne des apartments de serveur


export const useApartments = () => {                    
    const [apartments, setApartments] = useState([]);     // /    /fabriquer une apart qui sera un arrey vide 
    useEffect(() => {
      const abortController = new AbortController() //      /     // //*  un objet qui fait partie des APIs web qui permet d'annuler les requêtes réseau (fetch),*/

    fetch("Back-end.json", { signal: abortController.signal })  //Lorsque l'AbortSignal est déclenché (par l'appel à abortController.abort()), cela annule proprement la requête fetch en cours. //                 
       .then((res) => {
        if (!res.ok) {             //          /** si la réponse (res) n'est pas "OK",*/
            throw new Error('Network response was not ok');
        }
        return res.json();//   /    //   /// Conversion de la réponse en JSON
    })                               
      .then((res) => setApartments (res)) //   // // Mise à jour de l'état avec les données reçues  res=data               
      .catch((err) => {
        if (err.name !== 'AbortError') {
            console.error('Fetch error:', err);
        }
    });                                 
      
    return () => {
      console.log("cleanup");
      abortController.abort(); //   // // Fonction de nettoyage : annulation de la requête fetch en cours
    };
  }, []);
  return apartments;            //une fois c'est terminé il nous envois apartments
};