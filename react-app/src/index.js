import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter,RouterProvider} from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/flat",
    element: <h1>appartements</h1>,
  },
  {
    path: "/about",
    element: <h1>A propos</h1>,
  },
  {
    path: "/404",
    element: <h1>404</h1>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();