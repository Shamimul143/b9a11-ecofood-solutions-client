import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import Root from './pages/Root.jsx';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthContaxProvider from './AuthContaxProvider.jsx';
import AddFood from './pages/AddFood.jsx';
import AvailableFoods from './pages/AvailableFoods.jsx';
import ManageMyFoods from './pages/ManageMyFoods.jsx';
import MyFoodRequest from './pages/MyFoodRequest.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import VewFoodDetails from './pages/VewFoodDetails.jsx';
import UpdateFood from './components/UpdateFood.jsx';
import SingleFoodDeteils from './components/SingleFoodDeteils.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("http://localhost:5000/food")
      },
      {
        path: "/addFood",
        element: <PrivateRoute><AddFood /></PrivateRoute>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods />,
        loader: () => fetch("http://localhost:5000/food")        
      },
      {
        path: "/manageMyFoods",
        element: <PrivateRoute><ManageMyFoods /></PrivateRoute>,
      },
      {
        path: "/myFoodRequest",
        element: <PrivateRoute><MyFoodRequest /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/food/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`),
        element: <PrivateRoute><VewFoodDetails /></PrivateRoute>,

      },
      {
        path: "/updatepage/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`),
        element: <UpdateFood></UpdateFood>,

      },
      {
        path: "/singleFoodDeteils/:id",
        element: <SingleFoodDeteils></SingleFoodDeteils>,
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`),

      },
    ],
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContaxProvider>
      <RouterProvider router={router} />
    </AuthContaxProvider>
  </React.StrictMode>,
)
