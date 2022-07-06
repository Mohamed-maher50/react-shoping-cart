import React from "react";
import Modal from "react-modal";
function ProductModal(props) {
  return (
    <Modal isOpen={Boolean(props.product)} onRequestClose={props.closeModal}>
      <div className="product-info">
        <div className="timeIcon" onClick={props.closeModal}>
          &times;
        </div>
        <img src={props.product.imageUrl} />
        <p>{props.product.title}</p>
        <p>{props.product.desc}</p>
        <p>$ {props.product.price}</p>
      </div>
    </Modal>
  );
}

export default ProductModal;
