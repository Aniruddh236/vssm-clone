import React from 'react';
import { Provider } from 'react-redux'
import './App.css';

import Home from './Home/Home';
import { createHashRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <Home />
    },
  ])

  
  return <>
    
      <RouterProvider router={router} />
   
  </>;
}

export default App;
