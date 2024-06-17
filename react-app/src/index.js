import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter,RouterProvider,} from "react-router-dom"; 
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Oups! La page que vous demandez n'existe pas.</h1>
  },
  {
    path: "/flat",
    element: <h1>appartements</h1>
  },
  {
    path: "/about",
    element: <h1>A propos</h1>
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();