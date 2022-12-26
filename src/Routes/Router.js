import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Login from "../pages/Login/Login";
import LoginForm from "../pages/Login/LoginForm";
import RegisterForm from "../pages/Login/RegisterForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/login",
    element: <Login></Login>,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
    ],
  },
]);
export default router;
