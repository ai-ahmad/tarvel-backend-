// import
const express = require("express");
const mongoose = require("mongoose");
const CardRouter = require("./routes/Card");
const ProductRouter = require("./routes/Product");
// varibles
const PORT = 3000;
const app = express();
app.use(express.json());
// router backend
app.use(CardRouter);
app.use(ProductRouter);
// connect to server
mongoose
  .connect("mongodb://localhost:27017/travel")
  .then((data) => {
    console.log("Welcome to the travel");
    app.listen(PORT, (err) => {
      if (err) throw err;
    });
  })
  .catch((error) => console.log("Error: " + error));
