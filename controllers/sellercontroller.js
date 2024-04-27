const Product = require("../models/Product")
const Seller = require("../models/Seller")
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const insertseller = async (request,response) =>{
    try
    {
        const input = request.body
        const newSeller = new Seller(input)
        await newSeller.save()
        response.status(200).send("Registered Successfully")
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}

const checksellerlogin = async (request, response) =>{
    try
    {
        const input = request.body
        const seller = await Seller.findOne(input)
        response.json(seller)
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}

  const storage = multer.diskStorage({
    destination: function (request, file, cb) {
      cb(null, "./products/"); // destination folder
    },
    filename: function (request, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`); // file name
    },
});

const upload = multer({ storage: storage }).single('file');

const addproduct = async (request, response) => {
    try
    {
        const input = await request.body
        const product = new Product(input)
        product.save()
        response.status(200).send("Product Added Successfully")
    }
    catch(error)
    {
        response.status(500).send(error.message)
    }
};
  
const myproducts = async (request, response) =>{
    try
    {
        const sellerID = parseInt(request.params.sellerID)
        const products = await Product.find({"addedByID":sellerID})
        if(products.length===0)
        {
            response.send("DATA NOT FOUND")
        }
        else
        {
            response.json(products)
        }
    }
    catch(error)
    {
        response.status(500).send(error.message)
    }
}

const viewproducts = async (request, respone) =>{
    try
    {
        const products = await Product.find()
        if(products.length===0)
        {
            respone.send("DATA NOT FOUND")
        }
        else
        {
            respone.json(products)
        }
    }
    catch(error) 
    {
        respone.status(500).send(error.message)
    }
}

const viewmyproducts = async(request, response)=>{
    try
    {
        const id = parseInt(request.params.id)
        const products = await Product.find({"addedByID":id})
        if(products.length===0)
        {
            response.status(200).json(products)
        }
        else
        {
            response.send("No Products Found")
        }
    }
    catch(error)
    {
        response.status(500).send(error.message)
    }
}

const deleteProduct = async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const product = await Product.findOne({ "productID": id });
        if (product !== null) {
            await Product.deleteOne({ "productID": id });
            response.status(200).send("Deleted Successfully"); 
        } else {
            response.status(404).send("ID not Found"); 
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
}



module.exports = {insertseller,checksellerlogin,addproduct,myproducts,viewproducts,viewmyproducts,deleteProduct}