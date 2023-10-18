const mongoose = require("mongoose");

const SchemaProduct = new mongoose.Schema(
  {
    namesity: String,
    img: [String, String, String],
    description: String,
    flights: String,
    hotels: String,
    resorts: String,
  },
  { collection: "Product" }
);

const Product = mongoose.model("Product", SchemaProduct);

module.exports = Product;
