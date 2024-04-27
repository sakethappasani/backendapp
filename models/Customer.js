const mongoose = require("mongoose")

const CustomerSchema = mongoose.Schema({
    custID : {
        type : Number,
        required : true,
        unique : true,
        default : generateRandomID
    },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    dateofbirth : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true,
        enum : ['male','female','other']
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
    location : {
        type : String,
        required : true
    }
})

const Customer = mongoose.model("customer",CustomerSchema)

function generateRandomID(){
    return Math.floor(Math.random()*900000)+100000
}

module.exports = Customer