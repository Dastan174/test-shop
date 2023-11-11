
import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartTable from "../components/cart/CartTable";

const CardPage = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();
  return (
    <>
      {cart.products.length > 0 ? (
        <CartTable cart={cart}/>
      ) : (
        <Container>
          <div className="bag-content">
            <div className="header">
              <h1 className="bag-header">Your bag id empty</h1>
              <div className="bag-header-message">
                <span>sign in to see if you have any saved items.</span>
                <span style={{ marginLeft: "8px" }}>Or continue shopping.</span>
              </div>
            </div>
            <div className="bag-buttons">
              <button onClick={() => navigate("/login")}>Sign In</button>
              <button onClick={() => navigate("/")}>Continue Shopping</button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default CardPage;
