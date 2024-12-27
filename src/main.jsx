import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import Statistics from './Components/Statistics/Statistics';
import Cards from './Components/Cards/Cards';
import Details from './Components/Details/Details';
import Cart from './Components/Cart/Cart';
import Wishlist from './Wishlist/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () =>fetch('../categories.json'),
        children:[
          {
            path:'/',
            element:<Cards></Cards>,
            loader: () => fetch('../products.json')

          },
          {
            path:'/category/:category',
            element:<Cards></Cards>,
            loader: () => fetch('../products.json')

          }

        ],
        
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        loader: () => fetch('../products.json'),
        children:[
          {
            path: '',
           element: <Cart></Cart>,
           loader: () => fetch('../products.json')
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>
          }

        ]

      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: () => fetch('../products.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      }


    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
