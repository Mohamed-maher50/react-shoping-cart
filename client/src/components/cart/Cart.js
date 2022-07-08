import React from "react";
import "../../css/cart/Cart.css";
function Cart(props) {
  console.log(props);
  return (
    <div className="cart-wrapper">
      <div className="cart-title">Empty cart</div>
      <div className="cart-items">
        {props.cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p>{item.title}</p>
                  <p>{item.desc}</p>
                  <p>{item.price}</p>
                </div>
                <button>Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
