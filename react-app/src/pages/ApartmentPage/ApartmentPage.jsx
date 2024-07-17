import React from 'react';
import useApartment from '../../hooks/useApartment';
import './ApartmentPage.css';
import { DescriptionPanel } from '../../componentes/DescriptionPanel/DescriptionPanel';
import { Banner } from '../../componentes/Banner/Banner';
import { Header } from '../../componentes/Header/Header';
import { ErrorPage } from '../ErrorPage/ErrorPage';

function ApartmentPage() {
  const { flat, isLoading, error } = useApartment(); // Utilise le hook customisé

  if (isLoading) { // pendant une petite sec j'aurai un loading
    return <div>Chargement...</div>;
  }

  if (error || !flat) { // Vérifie si une erreur est présente OU si flat est nul (!flat)
    return <ErrorPage />;
  }

  return (
    <div className='Apartment-Page'>
      <Banner pictures={flat.pictures} /> {/* Passe flat.pictures comme prop au composant Banner */}
      <Header flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eqpn, i) => <li key={i}>{eqpn}</li>)} // 1 (flat.equipments) : Vous accédez au tableau equipments de l'objet flat. // 2 map() pour itérer sur chaque élément du tableau equipments. // Pour chaque équipement (eqpn), vous créez un élément de liste <li>
        />
      </div>
    </div>
  );
}
export default ApartmentPage;