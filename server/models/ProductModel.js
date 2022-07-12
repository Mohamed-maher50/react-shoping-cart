const mongoose = require("mongoose");
const productSchema = require("../schema/product.Schema");
const product = mongoose.model("product", productSchema);
module.exports = product;
