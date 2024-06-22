import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const calcTotalPrice = (products) => {
  return products.reduce((acc, el) => {
    return (acc += el.subPrice);
  }, 0);
};
export const calcSubPrice = (element) => +element.count * element.item.price;

export const ProtectedRoutes = () => {
  const { user } = useAuthContext();

  function isAllowed() {
    if (user.email === "admin@gmail.com") {
      return true;
    } else {
      return false;
    }
  }
  return isAllowed() ? <Outlet /> : <Navigate to="/login" />;
};
