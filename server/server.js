let express = require("express");
const product = require("./models/ProductModel");
let mongoose = require("mongoose");
const router = require("./router/router");
let app = express();
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/react-shoping-cart").then((res) => {
  console.log("you are connect with database");
});
app.use(router);
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
