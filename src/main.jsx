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
import Practice from './pages/Practice';
import AddResource from './pages/AddResource';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import VideoPage from './pages/VideoPage';

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
      element: <Resources></Resources>,
      loader: () => fetch('http://localhost:5000/resources'),
      // loader: () => fetch('http://localhost:5000/resourcesCount'),     
    },
    {
      path: '/resources/:id',
      element: <VideoPage></VideoPage>,
      loader: ({params}) => fetch(`http://localhost:5173/resources/${params.id}`)
    },
    {
      path: '/discussion',
      element: <Discussion></Discussion>
    },
    {
      path: '/practice',
      element: <Practice></Practice>
    },
    {
      path: '/addResource',
      element: <AddResource></AddResource>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signUp',
      element: <SignUp></SignUp>
    }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
