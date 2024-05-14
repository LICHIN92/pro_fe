import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import SignupPage from './pages/user/SignupPage.jsx';
import SigninPage from './pages/user/SigninPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/user/signup",
    element: <SignupPage/>,
  },
  {
    path: "/user/signin",
    element: <SigninPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <RouterProvider router={router} />
  </React.StrictMode>,
)
