import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { words } from "./words";
import data from "./data.json";
import { useState } from "react";
import Product from "./components/Product/Product";
import Filter from "./components/Filter/Filter";
import Cart from "./components/cart/Cart";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState([]);
  let handleFilterBySize = (e) => {
    setSize(e.target.value);

    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...data];
      let newProducts = productsClone.filter((product) => {
        return product.size.includes(e.target.value);
      });
      setProducts(newProducts);
    }
  };
  let handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(e.target.value);
    let productsClone = [...data];
    let newProducts = productsClone.sort((a, b) => {
      if (order == "lower") {
        return a.price - b.price;
      } else if (order == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };

  const addToCartItem = (product) => {
    setCartItems((oldArray) => [...oldArray, product]);
    console.log(product);
  };
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Product products={products} addToCartItem={addToCartItem} />
          <Filter
            handleFilterBySize={handleFilterBySize}
            size={size}
            sortBy={sort}
            handleFilterByOrder={handleFilterByOrder}
          />
        </div>
        <Cart cartItems={cartItems} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
