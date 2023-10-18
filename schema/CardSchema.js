const mongoose = require("mongoose");

const SchemaCard = new mongoose.Schema(
  {
    title: String,
    img: String,
    about: String,
    vivemore: String,
    name: String,
    toname: String,
  },
  { collection: "Card" }
);

const Card = mongoose.model("Card", SchemaCard);

module.exports = Card;
