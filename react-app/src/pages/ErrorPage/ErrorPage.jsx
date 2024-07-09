import React from 'react';
import "./ErrorPage.css";

import Main from '../../layout/Main/Main';
import { Link } from 'react-router-dom';


export function ErrorPage() {
  return (
    <>
    
      <Main> 
        <div className='error-page'>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </Main>
    
    </>
  );
}

