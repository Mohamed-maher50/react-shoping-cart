import { connect } from "react-redux";
import React from "react";
import "../../css/Filter/Filter.css";
import { filterSort, filterdSize } from "../../store/actions/products";
function Filter(props) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">Filter</h2>
      <div className="num-of-products">Number of product</div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select
          className="filter-select"
          onChange={(e) => props.filterdSize(props.products, e.target.value)}
          value={props.size}
        >
          <option value={"ALL"}>ALL</option>
          <option value={"XS"}>XS</option>
          <option value={"S"}>S</option>
          <option value={"M"}>M</option>
          <option value={"XL"}>XL</option>
          <option value={"XXL"}>XXL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select
          className="filter-select"
          value={props.sortBy}
          onChange={(e) => props.filterSort(props.products, e.target.value)}
        >
          <option value={"lastest"}>lastest</option>
          <option value={"lower"}>lower</option>
          <option value={"highest"}>highest</option>
        </select>
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    return {
      sort: state.products.sort,
      size: state.products.size,
      products: state.products.products,
      filterProducts: state.products.filterProducts,
    };
  },
  { filterSort, filterdSize }
)(Filter);
