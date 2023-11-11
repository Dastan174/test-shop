import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { Container } from "@mui/material";
import { useCartContext } from "../context/CartContext";

const DetailsPage = () => {
  const navigate = useNavigate()
  const { getOneProduct, oneProduct } = useProducts();
  const { addProductCart, checkProductInCart } = useCartContext();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  console.log(oneProduct);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "70vh",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {oneProduct ? (
        <Card sx={{ maxWidth: 445 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={oneProduct.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {oneProduct.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {oneProduct.description}
            </Typography>
          </CardContent>

          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            {checkProductInCart(oneProduct.id) ? (
              <>
                <Button disabled size="small" variant="contained">
                  Add to Basket
                </Button>
                <Button
                  onClick={() => navigate("/")}
                  size="small"
                  variant="contained"
                >
                  Continue review
                </Button>
              </>
            ) : (
              <Button
                onClick={() => addProductCart(oneProduct)}
                size="small"
                variant="contained"
              >
                Add to Basket
              </Button>
            )}
          </CardActions>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default DetailsPage;
