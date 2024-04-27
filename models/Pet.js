const mongoose = require("mongoose");

const PetSchema = mongoose.Schema({
    petID : {
        type : Number,
        required : true,
        unique : true,
        default : generateRandomID
    },
    petname: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["dog", "cat", "bird", "fish", "others"]
    },
    breed: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    age: {
        type: Number,
        required: true
    },
    adptstatus: {
        type: String,
        required: true,
        enum: ["available", "adopted"],
        default: "available"
    },
    addedby : {
        type : String,
        required : true
    },
    customer : {
        type : Object,
        required : true
    },
    customerID : {
        type : Object,
        required : true
    }
});

const Pet = mongoose.model('Pet', PetSchema);

function generateRandomID(){
    return Math.floor(Math.random()*900000)+100000
}

module.exports = Pet;
