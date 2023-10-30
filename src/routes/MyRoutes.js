import React from "react";
import AdminPage from "../pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import EditProduct from "../components/product/EditProduct";
import ProductList from "../components/product/ProductList";
import DetailsPage from "../pages/DetailsPage";

const MyRoutes = () => {
  const ADMIN_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 1 },
    { link: "/edit/:id", element: <EditProduct />, id: 2 },
  ];
  const PUBLIC_ROUTES = [
    { link: "/", element: <ProductList />, id: 1 },
    { link: "/details/:id", element: <DetailsPage />, id: 2 },
  ];
  return (
    <>
      <Routes>
        {ADMIN_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
        {PUBLIC_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MyRoutes;
