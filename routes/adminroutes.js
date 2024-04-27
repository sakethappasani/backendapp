const AdminController = require("../controllers/admincontrollers");
const express = require("express");

const adminrouter = express.Router();

adminrouter.post("/checkadminlogin", AdminController.checkadminlogin);
adminrouter.get("/viewcustomers", AdminController.viewcustomers);
adminrouter.delete("/deletecustomer/:email", AdminController.deletecustomer);
adminrouter.get("/viewresponses", AdminController.viewresponses); 
adminrouter.delete("/deleteresponses/:email", AdminController.deleteresponses);
adminrouter.get("/viewsellers", AdminController.viewSellers); 
adminrouter.delete("/deleteseller/:email", AdminController.deleteSeller);
adminrouter.get("/analysis",AdminController.analysis)

module.exports = adminrouter;
