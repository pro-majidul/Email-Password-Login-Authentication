import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Signup from "../Pages/Signup";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
           element : <Register></Register>
        },
        {
          path : '/signup',
          element : <Signup></Signup>
        }
      ]
    },
  ]);