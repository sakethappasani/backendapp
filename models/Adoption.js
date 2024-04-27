const mongoose = require("mongoose")
const moment = require("moment-timezone")

const AdoptionSchema = mongoose.Schema({
    adoptedBy : {
        type : String,
        required : true
    },
    customerID : {
        type : Number,
        required : true
    },
    adoptedTime : {
        type : String,
        default : moment().tz('Asia/Kolkata').format('DD-MM-YYYY HH:mm:ss A')
    },
    petID : {
        type : Number,
        required : true
    }
})

const Adoption = mongoose.model("adoption",AdoptionSchema)

module.exports = Adoption