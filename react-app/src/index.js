

import React from 'react';                          // la bibliothèque principale pour créer des interfaces utilisateur.
import ReactDOM from 'react-dom/client';            // bibliothèque pour interagir avec le DOM
import { RouterProvider } from "react-router-dom";  // fournie le routeur à l'application React.
import { router } from './routes/router';



ReactDOM.createRoot(document.getElementById('root')).render(    //crée la racine de l'application sur un élément HTML avec l'identifiant (id) root.
  <React.StrictMode>                                            {/*composant de React qui aide à détecter les erreurs potentielles dans l'application pendant le développement.*/}
    <RouterProvider router={router} />                           {/*composant qui fournit le routeur un sorte de parent*/}
  </React.StrictMode>
);

