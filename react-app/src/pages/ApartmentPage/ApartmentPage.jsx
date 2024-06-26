import React from 'react';
import './ApartmentPage.css'


function ApartmentPage() {
  return (
    <div className='Apartment-Page'>
      <div className='image'>
        <img src="https://s3-alpha-sig.figma.com/img/bd60/e3fd/509fc8039cc472b31cc9871e23a2e797?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbhCbsl1LmAbXsvkCr5t~o-4V2tHmgs6o74jyPhrnoMyHPG~3VzKJKq0xAsBNTk04~JYtVntIjoj97EKq~KFKymTbwyfKVaJhXzLYynyJRuP2s33BOKPqFgKMvQi4XUqB5p-ru7kAtHZda5o3BMnFBPEwRtx1029ah4U1xDeLrZoUDMTx04ScFOCEsuQE7PgXbvpkNNWAb7kVOgI-~S-mhfXykPfjxvuw4axwHiA0TxT0VTHh82fba~86EfoCjfufB~bSZA1iq8dBexQNV5YryCk-FQ-Ftoc7THd4qp4ut9uWdrvzIQHe-4eM9eyiABs-UUAwSMvIyquEJyabqnT5Q__" alt="" />
      </div>
      <div className='apartment__header'>
        <div className="apartment-title">
              <h1>Cozy loft on the Canal Saint-Martin</h1>
              <h2>Paris, Île-de-France</h2>
           <div className='Apartment__tag'>
              <span >Cozy</span>
              <span>Canal</span>
              <span>Paris 10</span>
           </div>
         </div>
         <div className='apartment__owner'>
         <div className='apartment__owner__details'>
              <h3>
                <span>Alexandre</span> 
                <span>Dumas</span>
              </h3>
              <div className='apartment__owner__badge'></div>
          </div>
          <div className='apartment__owner__stars'>
              <span className='on'>★</span>
              <span className='on'>★</span>
              <span className='on'>★</span>
              <span className='off'>★</span>
              <span className='off'>★</span>
          </div>
         </div>
      </div>
      <div className="apartment__description">
        <p className="description__header">
         <span> Description</span>
         <span><i class="fa-solid fa-chevron-down"></i></span>
          </p>

        <p className="description__content">Vous serez à 50m du canal Saint-martin où vous pourrez<br/> 
          pique-niquer l'été et à coté de nombreux bars et<br/> 
          restaurants. Au coeur de Paris avec 5 lignes de métro et de<br/> 
          nombreux bus. Logement parfait pour les voyageurs en <br/> 
          solo et les voyageurs d'affaires. Vous etes à 1 station de la<br/>
           gare de l'est (7 minutes à pied)</p>
          
      </div>
      <div className="apartment__description">
      <p className="description__header">
           <span>Équipements</span>
           <span><i class="fa-solid fa-chevron-down"></i></span>
      </p>
        <p className="description__content">
              Climatisation<br/>
              Wi-Fi<br/>Cuisine<br/>Espace de travail<br/>
              Fer à repasser<br/>Sèche-cheveux<br/>Cintres</p>
      </div>
    </div>
  )
}

export default ApartmentPage