import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";





export const router = createBrowserRouter([
  {
    path: "/",
    element:(
        <>
          <Navbar />
            <App />
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
        <>
      
      <Footer />
      </>
      ),
  },
]);