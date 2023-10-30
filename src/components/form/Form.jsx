import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  image: "",
};

const Form = ({ isEdit }) => {
  const { createProduct, editProduct, oneProduct } = useProducts();
  const [product, setProduct] = useState(init);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  function addProduct() {
    createProduct(product);
    setProduct(init);
  }

  function handleSaveProduct() {
    for (let key in product) {
      if (!product[key]) {
        alert("empty fileds!");
        return;
      }
    }
    editProduct(product);
    setProduct(init);
    navigate("/");
  }

  return (
    <FormControl sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        onChange={handleInp}
        sx={{ width: "100%", margin: "20px auto" }}
        fullWidth
        placeholder="title"
        name="title"
        value={product.title}
      />
      <TextField
        onChange={handleInp}
        sx={{ width: "100%", margin: "20px auto" }}
        fullWidth
        placeholder="description"
        name="description"
        value={product.description}
      />
      <TextField
        onChange={handleInp}
        sx={{ width: "100%", margin: "20px auto" }}
        fullWidth
        placeholder="category"
        name="category"
        value={product.category}
      />
      <TextField
        onChange={handleInp}
        sx={{ width: "100%", margin: "20px auto" }}
        fullWidth
        placeholder="price"
        name="price"
        value={product.price}
      />
      <TextField
        onChange={handleInp}
        sx={{ width: "100%", margin: "20px auto" }}
        fullWidth
        placeholder="enter URL"
        name="image"
        value={product.image}
      />
      {isEdit ? (
        <Button
          onClick={handleSaveProduct}
          sx={{
            bgcolor: "rgb(51, 153, 255)",
            color: "#fff",
            "&:hover": { bgcolor: "rgb(0, 89, 178)" },
          }}
          variant="outlined"
          fullWidth
          size="large"
        >
          Save change
        </Button>
      ) : (
        <Button
          onClick={addProduct}
          sx={{
            bgcolor: "rgb(51, 153, 255)",
            color: "#fff",
            "&:hover": { bgcolor: "rgb(0, 89, 178)" },
            margin: "20px 0",
          }}
          variant="outlined"
          fullWidth
          size="large"
        >
          Add
        </Button>
      )}
    </FormControl>
  );
};

export default Form;
