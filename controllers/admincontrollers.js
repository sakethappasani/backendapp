const Admin = require("../models/Admin");
const Customer = require("../models/Customer");
const Contact = require("../models/Contact");
const Product = require("../models/Product")
const Seller = require("../models/Seller")


const checkadminlogin = async (request, response) => {
  try {
    const input = request.body
    const admin = await Admin.findOne(input);
    response.json(admin);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const viewcustomers = async (request, response) => {
  try {
    const customer = await Customer.find();
    if (customer.length == 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(customer);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const viewSellers = async (request, response) => {
  try {
    const sellers = await Seller.find();
    if (sellers.length === 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(sellers);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deleteSeller = async (request, response) => {
  try {
    const email = request.params.email;
    const seller = await Seller.findOne({ "email": email });
    if (seller !== null) {
      await Seller.deleteOne({ "email": email });
      response.send("Seller Deleted Successfully");
    } else {
      response.send("Seller with Email ID Not Found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deletecustomer = async (request, response) => {
  try {
    const email = request.params.email;
    const user = await Customer.findOne({ "email": email });
    if (user != null) {
      await Customer.deleteOne({ "email": email });
      response.send("Deleted Successfully");
    } else {
      response.send("Email ID Not Found");
    }

  } catch (error) {
    response.status(500).send(error.message);
  }
};

const viewresponses = async (request, response) => {
  try {
    const contacts = await Contact.find();
    if (contacts.length == 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(contacts);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deleteresponses = async (request, response) => {
  try {
    const email = request.params.email;
    const query = await Contact.findOne({ "email": email });
    if (query != null) {
      await Contact.deleteOne({ "email": email });
      response.send("Deleted Successfully");
    } else {
      response.send("Email ID Not Found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const analysis = async (req, res) => {
  try 
  {
      const sellers = await Seller.countDocuments();

      const productCount = await Product.countDocuments();

      const customerCount = await Customer.countDocuments();

      res.json({sellers,productCount,customerCount});
  } 
  catch (error) 
  {
      res.status(500).send(error.message);
  }
};
module.exports = { checkadminlogin, viewcustomers, deletecustomer, viewresponses, deleteresponses,viewSellers,deleteSeller,analysis};
