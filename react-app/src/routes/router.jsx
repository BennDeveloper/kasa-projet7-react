
import React from "react";
import {createBrowserRouter,  Outlet } from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../layout/Footer/Footer";
import Navbar from "../componentes/Navbar/Navbar";
import Main from "../layout/Main/Main";
import ApartmentPage from "../pages/ApartmentPage/ApartmentPage";
import About from "../pages/About/About";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";




const HeaderFooterLayout = () => {     /* fonction qui nous renvoie */
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />          {/*il injecte les composants children dans une route imbriquée. */}
      </Main>
      <Footer />
    </>
  );
};




export const router = createBrowserRouter([   /*(createBrowserRouter,) fonction qui nous retourne quelque chose qu'on met dans la variable (router) resum : router = quand on tape une URL dfferent il nous rammène sur un composant different */
  {
    element:<HeaderFooterLayout />,
     
      children:[
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/flat/:flatId",
        element:<ApartmentPage />
      },
      {
       path: "/about",
       element:<About />
       
      },
      {
        path: "*",
        element:<ErrorPage />
        
       },

      
    ],
    
  },
]);