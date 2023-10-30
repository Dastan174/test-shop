import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { Container } from "@mui/material";

const DetailsPage = () => {
  const { getOneProduct, oneProduct } = useProducts();

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
            <Button size="small" variant="contained">
              Add to Basket
            </Button>
          </CardActions>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default DetailsPage;
