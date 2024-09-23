import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layouts/Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Discussion from './pages/Discussion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/resources',
      element: <Resources></Resources>
    },
    {
      path: '/discussion',
      element: <Discussion></Discussion>
    }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
