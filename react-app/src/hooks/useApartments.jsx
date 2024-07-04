
import { useState, useEffect } from "react";





export const useApartments = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
      const abortController = new AbortController()

    fetch("Back-end.json", { signal: abortController.signal })                  
       .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })                               
      .then((res) => setApartments (res))                   
      .catch((err) => {
        if (err.name !== 'AbortError') {
            console.error('Fetch error:', err);
        }
    });                                 
      
    return () => {
      console.log("cleanup");
      abortController.abort();
    };
  }, []);
  return apartments;
};