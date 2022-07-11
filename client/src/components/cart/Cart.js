import React, { useState } from "react";
import "../../css/cart/Cart.css";
import CheckOut from "../checkout/CheckOut";

function Cart(props) {
  let total = 0;
  const submitOrder = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  const [showForm, setShowForm] = useState(false);
  const ShowForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length
          ? `there are ${props.cartItems.length} in cart`
          : `not items added`}
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => {
          total += item.qty == 0 ? item.price : item.price * item.qty;
          return (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p>{item.title}</p>
                  <p>{item.qty ? item.qty : 0}</p>
                  <p>{item.price}</p>
                </div>
                <button onClick={() => props.removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <CheckOut
        total={total}
        ShowForm={ShowForm}
        closeForm={closeForm}
        submitOrder={submitOrder}
        cartItems={props.cartItems}
        showForm={showForm}
      />
    </div>
  );
}

export default Cart;
