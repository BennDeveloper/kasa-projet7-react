import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



export function useApartment() {

    const [flat, setFlat] = useState(null);
    
    let { flatId } = useParams();

    useEffect(() => {
       const abortController = new AbortController()
       fetch("Back-end.json")                 
         .then((res) => res.json())            
         .then((flats) => {
    
           const flat = flats.find((flat) => flat.id === flatId);
           setFlat(flat);
    })  
    .catch(console.error); 

      return () => {
        console.log("cleanup");
        abortController.abort();
      };
    }, [flatId]);
    return flat;

  }