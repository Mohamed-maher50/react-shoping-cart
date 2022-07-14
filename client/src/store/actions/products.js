import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "./types";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: FETCH_PRODUCTS, data });
      });
  };
};

export const filterdSize = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    let newProducts = productsClone.filter((product) => {
      return product.size.includes(value);
    });
    return dispatch({
      type: FILTER_SIZE,
      data: {
        products: value == "ALL" ? products : newProducts,
      },
    });
  };
};
export const filterSort = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    let newProducts = productsClone.sort((a, b) => {
      if (value == "lower") {
        return a.price - b.price;
      } else if (value == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    return dispatch({
      type: FILTER_SORT,
      data: {
        sort: value,
        products: newProducts,
      },
    });
  };
};
