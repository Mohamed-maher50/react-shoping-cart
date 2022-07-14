import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "../actions/types";

export const produductsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { products: action.data, filterProducts: action.data };

    case FILTER_SIZE:
      return {
        ...state,
        size: action.data.size,
        filterProducts: action.data.products,
      };

    case FILTER_SORT:
      return {
        ...state,
        size: action.data.size,
        filterProducts: action.data.products,
      };

    default:
      return state;
  }
};
