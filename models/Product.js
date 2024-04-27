const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  productID: {
    type: Number,
    required: true,
    unique: true,
    default: generateRandomID
  },
  productName: {
    type: String,
    required: true,
  },
  productDes: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  addedBy: {
    type : String,
    required : true
  },
  addedByID: {
    type : Number,
    required : true
  }
});

const Product = mongoose.model('product',ProductSchema)

function generateRandomID() {
  return Math.floor(Math.random() * 500000) + 100000;
}

module.exports = Product;