import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
];

export default mainRoutes;
