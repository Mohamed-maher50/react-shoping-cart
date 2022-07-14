import React from "react";

function CheckOut(props) {
  return (
    <>
      <div className="cart-footer">
        {props.cartItems.length != 0 ? (
          <div className="total"> total price ${props.total} </div>
        ) : (
          ""
        )}
        <button onClick={() => props.ShowForm()}>select product </button>
      </div>
      <div className={`checkout-form ${props.showForm ? "active" : ""}`}>
        <span className="timeIcon" onClick={props.closeForm}>
          &times;
        </span>
        <form onSubmit={props.submitOrder}>
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
    </>
  );
}

export default CheckOut;
