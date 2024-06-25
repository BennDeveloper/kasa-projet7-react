import React from "react";
import { createBrowserRouter } from "react-router-dom";


import HomePage from "../HomePage";
import Navbar from "../componentes/Navbar/Navbar";
import Footer from "../componentes/Footer/Footer";
import About from "../pages/about";





export const router = createBrowserRouter([
  {
    path: "/",
    element:(
        <>
          <Navbar />
            <HomePage />
          <Footer />
        </>
    ),
    errorElement: <h1>404 not found</h1>
  },
  {
    path: "/flat",
    element:(
        <>
          <Navbar />
            <h1>Nos apparrtement</h1>
          <Footer />
        </>
    ),
  },
  {
    path: "/about",

    element:(
      <HeaderFooterLayout>
      <About />
    </HeaderFooterLayout>
      ),
  },
]);