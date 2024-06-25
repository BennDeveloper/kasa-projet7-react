import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';

import {createBrowserRouter,RouterProvider,} from "react-router-dom"; 
import reportWebVitals from './reportWebVitals';
import About from './pages/about';
import ApartmentPage from './pages/ApartmentPage/ApartmentPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>404 Oups! La page que vous demandez n'existe pas.</h1>
  },
  {
    path: "/flat",
    element: <ApartmentPage />
  },
  {
    path: "/about",
    element: <About />
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();