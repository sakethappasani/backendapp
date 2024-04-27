const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()


const app = express()
app.use(express.json())
app.use(cors())

const dburl = process.env.mongodburl
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)   
});

const customerroutes = require("./routes/customerroutes")
app.use("",customerroutes)


const adminroutes = require("./routes/adminroutes")
app.use("",adminroutes)

const sellerroutes = require("./routes/sellerroutes")
app.use("",sellerroutes)

const port = process.env.PORT || 31792
app.listen(port,()=>{
    console.log(`Server running at port: ${port}`)
})