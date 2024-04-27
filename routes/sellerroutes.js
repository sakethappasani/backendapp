const sellercontroller = require("../controllers/sellercontroller")

const express = require("express")
const sellerrouter = express.Router()

sellerrouter.post('/insertseller',sellercontroller.insertseller)
sellerrouter.post('/checksellerlogin',sellercontroller.checksellerlogin)
sellerrouter.post("/addproduct",sellercontroller.addproduct)
sellerrouter.get("/myproducts/:sellerID",sellercontroller.myproducts)
sellerrouter.get("/viewproducts",sellercontroller.viewproducts)
sellerrouter.get("/myproducts/:id",sellercontroller.viewmyproducts)
sellerrouter.delete("/deleteproduct/:id",sellercontroller.deleteProduct)

module.exports = sellerrouter