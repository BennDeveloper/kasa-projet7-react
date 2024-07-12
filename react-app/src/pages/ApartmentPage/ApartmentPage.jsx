import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ApartmentPage.css';
import { DescriptionPanel } from '../../componentes/DescriptionPanel/DescriptionPanel';
import { Banner } from '../../componentes/Banner/Banner';
import { Header } from '../../componentes/Header/Header';
import {ErrorPage } from '../ErrorPage/ErrorPage';

function ApartmentPage() {
  const { flatId } = useParams();

  const [flat, setFlat] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

  useEffect(() => {
    if (data.length > 0) {
      const foundFlat = data.find((item) => item.id === flatId);
      setFlat(foundFlat);
    }
  }, [data, flatId]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error || !flat) {
    return <ErrorPage />;
  }

 
  return (
    <div className='Apartment-Page'>
      <Banner pictures={flat.pictures} /> {/* Assure-toi que flat.pictures contient bien les images */}
      <Header flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eqpn, i) => <li key={i}>{eqpn}</li>)}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;





