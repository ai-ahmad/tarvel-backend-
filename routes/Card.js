const express = require("express");
const Card = require("../schema/CardSchema");
const mongoose = require("mongoose");

const router = express.Router();

// methods get
router.get("/card", (req, res) => {
  Card.find().then((data) => res.status(200).json(data));
});

// methods get by id

router.get("/card/:id", (req, res) => {
  Card.findById(req.params.id).then((data) => res.status(200).json(data));
});

// methods delete

router.delete("/card/delete/:id", (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

// method post

router.post("/card/add", (req, res) => {
  Card(req.body)
    .save()
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(500).json(err));
});

// method put or update

router.put("/card/upDate/:id", (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
