import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Assignments from "../pages/Assignments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import LoginPrivate from "./LoginPrivate";
import CreateAssignment from "../pages/CreateAssignment";
import PrivateRoute from "./privateRoute";
import UpdateAssignment from "../pages/UpdateAssignment";
import ViewAssignment from "../pages/ViewAssignment";
import SubmittedAssignment from "../pages/SubmittedAssignment";
import GiveMark from "../pages/GiveMark";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "assignments",
        element: <Assignments></Assignments>,
      },
      {
        path: "assignments/view-assignment/:id",
        element: (
          <PrivateRoute>
            <ViewAssignment></ViewAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "assignments/update-assignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "create-assignment",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "submitted-assignment",
        element: (
          <PrivateRoute>
            <SubmittedAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "submitted-assignment/:id",
        element: (
          <PrivateRoute>
            <GiveMark />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: (
          <LoginPrivate>
            <Login />
          </LoginPrivate>
        ),
      },
      {
        path: "signup",
        element: (
          <LoginPrivate>
            <Register />
          </LoginPrivate>
        ),
      },
    ],
  },
]);

export default MainRoute;
