



import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../HomePage";
import Footer from "../layout/Footer/Footer";
import Navbar from "../componentes/Navbar/Navbar";
import Main from "../layout/Main/Main";
import ApartmentPage from "../pages/ApartmentPage/ApartmentPage";
import About from "../pages/About/About";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";




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
      errorElement: <ErrorPage />,
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
       element:<About />
       
      },
      
    ],
    
  },
]);