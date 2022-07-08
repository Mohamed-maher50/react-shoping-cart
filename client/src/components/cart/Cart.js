import React, { useState } from "react";
import "../../css/cart/Cart.css";
function Cart(props) {
  let total = 0;
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
      <div className="cart-footer">
        {props.cartItems.length != 0 ? (
          <div className="total"> total price ${total} </div>
        ) : (
          ""
        )}
        <button onClick={ShowForm}>select product </button>
      </div>
      <div className={`checkout-form ${showForm ? "active" : ""}`}>
        <span className="timeIcon" onClick={closeForm}>
          &times;
        </span>
        <form>
          <div>
            <label>Name</label>
            <input type={"text"} required name="name" />
          </div>
          <div>
            <label>Email</label>
            <input type={"email"} required name="email" />
          </div>
          <div>
            <button type="submit">Checkout</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cart;
