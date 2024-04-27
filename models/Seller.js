const mongoose = require("mongoose")

const SellerSchema = mongoose.Schema({
    sellerID: {
        type: Number,
        required: true,
        unique: true,
        default: generateRandomID
      },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    }
})

const Seller = mongoose.model("seller",SellerSchema)

function generateRandomID() {
    return Math.floor(Math.random() * 500000) + 100000;
  }
  
module.exports = Seller