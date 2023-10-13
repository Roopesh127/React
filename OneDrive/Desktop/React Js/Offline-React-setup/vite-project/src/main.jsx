import React from 'react';

import ReactDOM from 'react-dom/client'
import Routing from './ROUTER-REACT/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './ROUTER-REACT/Contact';
import Career from './ROUTER-REACT/Career';
import About from './ROUTER-REACT/About';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Routing />
  },
  {
    path: "/call",
    element: <Contact />
  },
  {
    path: "/path",
    element: <Career />
  },
  {
    path: "/ordekho",
    element: <About />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  // <Routing />
  <RouterProvider router={router} />


)
