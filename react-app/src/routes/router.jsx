



import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../HomePage";
import Footer from "../componentes/Footer/Footer";
import Navbar from "../componentes/Navbar/Navbar";
import Main from "../componentes/Main/Main";



const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};



export const router = createBrowserRouter([
  {
    element:<HeaderFooterLayout />,
      errorElement: <h1>404 Oups! La page que vous demandez n'existe pas.</h1>,
      children:[
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/flat",
        element:<h1>Appartement</h1>
      },
      {
       path: "/about",
       element:<h1>A propos</h1>
      }
    ],
    
  },
]);