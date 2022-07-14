import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { produductsReducer } from "./productsReducer";
export default combineReducers({
  products: produductsReducer,
  cart: cartReducer,
});
