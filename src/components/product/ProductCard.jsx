import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useProducts } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 305,
        height: "460px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <CardHeader title={item.title} subheader="September 14, 2016" />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        disableSpacing
      >
        <Button
          onClick={() => navigate(`/details/${item.id}`)}
          aria-label="add to favorites"
        >
          Bay
        </Button>
        <Button onClick={() => navigate(`/edit/${item.id}`)} aria-label="share">
          Edit
        </Button>
        <Button onClick={() => deleteProduct(item.id)} aria-label="share">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
