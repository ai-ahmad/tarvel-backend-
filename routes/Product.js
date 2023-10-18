const express = require("express");
const Product = require("../schema/Product");
const mongoose = require("mongoose");

const router = express.Router();
// methods get
router.get("/product", (req, res) => {
  Product.find().then((data) => res.status(200).json(data));
});

// methods get by id

router.get("/product/:id", (req, res) => {
  Product.findById(req.params.id).then((data) => res.status(200).json(data));
});

// methods delete

router.delete("/product/delete/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

// method post

router.post("/product/add", (req, res) => {
  Product(req.body)
    .save()
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(500).json(err));
});

// method put or update

router.put("/product/upDate/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
