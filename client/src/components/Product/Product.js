import "../../css/Product/Product.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../../store/actions/Cart";
import ProductModal from "./ProductModal";
import { fetchProducts } from "../../store/actions/products";
function Product(props) {
  console.log(props);
  const [product, setProducts] = useState("");
  const openModal = (product) => {
    setProducts(product);
  };
  const closeModal = () => {
    setProducts("");
  };
  useEffect(() => {
    props.fetchProducts();
  }, []);
  if (props.products) {
    return (
      <div className="products-wrapper">
        {props.products.length}
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
              <button onClick={() => props.addToCart(product)}>
                add to cart
              </button>
            </div>
          );
        })}
        <ProductModal closeModal={closeModal} product={product} />
      </div>
    );
  } else {
    return <div>looding</div>;
  }
}

export default connect(
  (state) => {
    return { products: state.products.filterProducts };
  },
  { fetchProducts, addToCart }
)(Product);
