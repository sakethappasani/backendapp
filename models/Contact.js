const mongoose = require("mongoose")

const ContactSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    reason : {
        type : String,
        required : true
    }
})

const Contact = mongoose.model("contact",ContactSchema)
module.exports = Contact