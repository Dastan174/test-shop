import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTION_PRODUCTS, API_PRODUCT } from "../helpers/const";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  product: [],
  oneProduct: null,
  productsTotalCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload.data,
        productsTotalCount: action.payload.headers["x-total-count"],
      };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      break;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate();

  async function createProduct(newProduct) {
    try {
      await axios.post(API_PRODUCT, newProduct);
      getProduct();
    } catch (error) {
      console.log("error");
    }
  }

  async function getProduct() {
    try {
      let res = await axios(`${API_PRODUCT}/${window.location.search}`);
      dispatch({ type: ACTION_PRODUCTS.GET_PRODUCTS, payload: res });
    } catch (error) {
      console.log("error");
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API_PRODUCT}/${id}`);
      getProduct();
    } catch (error) {
      console.log("error");
    }
  }

  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API_PRODUCT}/${id}`);
      dispatch({ type: ACTION_PRODUCTS.GET_ONE_PRODUCTS, payload: data });
    } catch (error) {
      console.log("error");
    }
  }

  async function editProduct(newProduct) {
    try {
      await axios.patch(`${API_PRODUCT}/${newProduct.id}`, newProduct);
      getProduct();
    } catch (error) {
      console.log("error");
    }
  }

  function fetchByParams(quary, value) {
    const filterUrlProduct = new URLSearchParams(location.search);
    if (value === "all") {
      filterUrlProduct.delete(quary);
    } else {
      filterUrlProduct.set(quary, value);
    }
    const url = `${location.pathname}?${filterUrlProduct.toString()}`;
    navigate(url);
  }

  const values = {
    fetchByParams,
    createProduct,
    getProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
    oneProduct: state.oneProduct,
    product: state.product,
    productsTotalCount: state.productsTotalCount,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
