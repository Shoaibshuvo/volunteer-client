import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Checkout from "../components/Checkout/Checkout";
import Bookings from "../components/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'checkout/:id',
          element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: 'bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes> 
        }
      ]
    },
  ]);
  export default router;