import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About'; // Import About component
import Work from './pages/Work'; // Import Work component
import Contact from './pages/Contact'; // Import Contact component
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",  // Assign the About component to a specific path
    element: <About />,
  },
  {
    path: "/work",   // Assign the Work component to a specific path
    element: <Work />,
  },
  {
    path: "/contact", // Assign the Contact component to a specific path
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
