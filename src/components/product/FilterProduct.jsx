import {
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../context/ProductContext";
import { useLocation } from "react-router-dom";

const FilterProduct = () => {
  const { fetchByParams } = useProducts();
  const location = useLocation();

  console.log(location);

  return (
    <Paper
      sx={{
        position: "absolute",
        mt: 10,
        p: 5,
        boxShadow: "0",
        backgroundColor: "transparent",
      }}
    >
      <FormControl>
        <RadioGroup
          onChange={(e) => fetchByParams("category", e.target.value)}
          defaultValue="all"
          name="radio-buttons-group"
          sx={{ my: 1 }}
        >
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="All"
          ></FormControlLabel>
          <FormControlLabel
            value="plants"
            control={<Radio />}
            label="Plants"
          ></FormControlLabel>
          <FormControlLabel
            value="iphone"
            control={<Radio />}
            label="iPhone"
          ></FormControlLabel>
          <FormControlLabel
            value="mac"
            control={<Radio />}
            label="Mac"
          ></FormControlLabel>
          <FormControlLabel
            value="ipad"
            control={<Radio />}
            label="Ipad"
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default FilterProduct;
