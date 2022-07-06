import "../../css/Product/Product.css";
function Product(props) {
  return (
    <div className="products-wrapper">
      {props.products.map((product) => {
        return (
          <div className="products-item" key={product.id}>
            <img src={product.imageUrl} />
            <div className="product-desc">
              <p>{product.title}</p>
              <span>${product.price}</span>
            </div>
            <button>add to cart</button>
          </div>
        );
      })}
    </div>
  );
}
export default Product;
