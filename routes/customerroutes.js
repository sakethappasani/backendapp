const express = require('express');
const customerController = require('../controllers/customercontrollers')
const customerrouter = express.Router();

customerrouter.post('/insertcustomer', customerController.insertcustomer);
customerrouter.post('/checkcustomerlogin', customerController.checkcustomerlogin);
customerrouter.post('/contactform', customerController.contactform);
customerrouter.get('/viewallpets',customerController.viewPets)
customerrouter.post('/insertpet', customerController.addpet);
customerrouter.get('/mypets/:custID', customerController.viewMyPets)
customerrouter.delete('/deletepet/:petid', customerController.deletepet);
customerrouter.post('/adoptpet',customerController.adoptpet)

module.exports = customerrouter;
