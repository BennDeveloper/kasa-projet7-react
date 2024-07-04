import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"


export function useApartment() {

    const [flat, setFlat] = useState(null);
    const location = useLocation();

    useEffect(() => {
       const abortController = new AbortController
       fetch("Back-end.json")                 
         .then((res) => res.json())            
         .then((flats) => {
           const flat = flats.find((flat) => flat.id === location.state.apartmentId);
           setFlat(flat);
    })  
    .catch(console.error); 

      return () => {
        console.log("cleanup");
        abortController.abort();
      };
    }, []);
    return flat;

  }