import { ADD_CART, REMOVE_CART } from "./types";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cartItmesClone = [...cartItems];
    var productAlready = false;
    cartItmesClone.forEach((item) => {
      if (item.id == product.id) {
        productAlready = true;
        item.qty++;
      }
    });

    if (!productAlready) {
      cartItmesClone.push({ ...product, qty: 1 });
    }
    dispatch({
      type: ADD_CART,
      data: {
        cartItems: cartItmesClone,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItmesClone));
  };
};
export const removeCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cartItmesClone = [...cartItems];
    const UpdatedCartItems = cartItmesClone.filter(
      (p) => p._id !== product._id
    );
    dispatch({
      type: REMOVE_CART,
      data: {
        cartItems: UpdatedCartItems,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(UpdatedCartItems));
  };
};
