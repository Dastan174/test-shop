import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import { Box, Container } from "@mui/material";
import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";
import FilterProduct from "./FilterProduct";

const ProductList = () => {
  const { getProduct, product, productsTotalCount } = useProducts();

  const [paginateParams, setPaginateParams] = useSearchParams();

  const [page, setPage] = useState(
    paginateParams.get("_page") ? paginateParams.get("_page") : 1
  );

  const [limit, setLimit] = useState(
    paginateParams.get("_limit") ? paginateParams.get("_limit") : 2
  );

  useEffect(() => {
    setPaginateParams({
      _page: page,
      _limit: limit,
    });
  }, [page, limit]);

  useEffect(() => {
    getProduct();
  }, [paginateParams]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <FilterProduct />
      <Container
        sx={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
          marginBottom: "30px",
        }}
      >
        {product ? (
          product.map((item) => <ProductCard item={item} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
      <Pagination
        onChange={(page, limit) => {
          setPage(page);
          setLimit(limit);
        }}
        current={page}
        pageSize={limit}
        defaultCurrent={1}
        total={productsTotalCount}
      />
    </Box>
  );
};

export default ProductList;
