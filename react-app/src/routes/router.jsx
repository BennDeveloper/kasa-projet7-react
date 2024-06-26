



import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../HomePage";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";
import Main from "../layout/Main/Main";
import ApartmentPage from "../pages/ApartmentPage/ApartmentPage";



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
        element:<ApartmentPage />
      },
      {
       path: "/about",
       element:<h1>A propos</h1>
      },
      {
        path: "/about",
        element:<h1>A propos</h1>
       },
      
    ],
    
  },
]);