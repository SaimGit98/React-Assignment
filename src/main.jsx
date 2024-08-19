import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './Components/pages/About.jsx'
import SingleRecipe from './Components/pages/SingleRecipe.jsx'
 
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },

  
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/recipes/:id",
    element: <SingleRecipe/>
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />


  // </StrictMode>
)
