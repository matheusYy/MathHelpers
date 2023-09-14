import React from 'react'
import ReactDOM from 'react-dom/client'
import Section from './components/section';
import './css/tailwind.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Media from './routes/media';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Section />,
  },
  {
    path: "/media",
    element: <Media />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
