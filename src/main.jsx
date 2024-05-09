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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/addFood",
        element: <PrivateRoute><AddFood /></PrivateRoute>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods />,
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
