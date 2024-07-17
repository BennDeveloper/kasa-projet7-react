import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useApartment = () => {
  const { flatId } = useParams();  // useParams est utilisé pour extraire la valeur de flatId

  const [flat, setFlat] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { // useEffect pour charger les données
    const fetchData = async () => {
      try {
        const res = await fetch('/Back-end.json');
        const jsonData = await res.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => { // useEffect pour trouver l'appartement spécifique
    if (data.length > 0) {
      const foundFlat = data.find((item) => item.id === flatId);
      setFlat(foundFlat);
    }
  }, [data, flatId]);

  return { flat, isLoading, error };
};

export default useApartment;