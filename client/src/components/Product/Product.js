import "../../css/Product/Product.css";

import { useState } from "react";
import ProductModal from "./ProductModal";
function Product(props) {
  const [product, setProducts] = useState("");
  const openModal = (product) => {
    setProducts(product);
  };
  const closeModal = () => {
    setProducts("");
  };

  return (
    <div className="products-wrapper">
      {props.products.map((product) => {
        return (
          <div className="products-item" key={product.id}>
            <a
              href="#"
              onClick={() => {
                openModal(product);
              }}
            >
              <img src={product.imageUrl} />
            </a>

            <div className="product-desc">
              <p>{product.title}</p>
              <span>${product.price}</span>
            </div>
            <button onClick={() => props.addToCartItem(product)}>
              add to cart
            </button>
          </div>
        );
      })}
      <ProductModal closeModal={closeModal} product={product} />
    </div>
  );
}
export default Product;
