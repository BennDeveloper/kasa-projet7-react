import React from 'react';
import "./ErrorPage.css";
import Navbar from '../../componentes/Navbar/Navbar';
import Main from '../../layout/Main/Main';
import { Link } from 'react-router-dom';
import Footer from '../../layout/Footer/Footer';

export function ErrorPage() {
  return (
    <>
      <Navbar />
      <Main> 
        <div className='error-page'>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}

