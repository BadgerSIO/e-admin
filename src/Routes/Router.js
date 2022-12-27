import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Main/Dashboard/Dashboard";
import Main from "../layouts/Main/Main";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import LoginForm from "../pages/Login/LoginForm";
import RegisterForm from "../pages/Login/RegisterForm";
import ProductList from "../pages/ProductList/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
        children: [
          {
            path: "/",
            element: <LoginForm />,
          },
          {
            path: "register",
            element: <RegisterForm />,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ProductList></ProductList>,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
    ],
  },
]);
export default router;
