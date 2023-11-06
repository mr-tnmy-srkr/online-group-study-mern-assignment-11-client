import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Assignments from "../pages/Assignments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";

const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'assignments',
            element: <Assignments></Assignments>,
          },
          {
            path: 'about',
            element: <About></About>,
          },
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <Register />,
          },
        ],
      },
     
  ]);
  
  export default mainRoutes;
  