import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { words } from "./words";
import data from "./data.json";
import react, { useState } from "react";
import Product from "./components/Product/Product";
import Filter from "./components/Filter/Filter";
function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Product products={products} />
          <Filter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
