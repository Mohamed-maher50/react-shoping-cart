const express = require("express");
const router = express.Router();
const product = require("../models/ProductModel");
router.get("/api/products", async (req, res) => {
  const products = await product.find();

  res.send(products);
});
router.post("/api/products", async (req, res) => {
  console.log(req.body);
  const newProduct = await new product(req.body);
  const saveP = await newProduct.save();
  res.send(saveP);
});

router.delete("/api/products/:id", async (req, res) => {
  console.log(req.params.id);
  const deleteProduct = await product.deleteOne({ id: req.params.id });
  res.send("done");
});
module.exports = router;
