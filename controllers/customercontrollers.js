const Customer = require("../models/Customer")
const Contact = require("../models/Contact")
const Pet = require("../models/Pet");
const Adoption = require("../models/Adoption");

const insertcustomer = async (request, response) => {
    try
    {
        const input = request.body
        const newUser = new Customer(input)
        await newUser.save()
        response.status(200).send("Registered Successfully")
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}

const checkcustomerlogin = async (request, response) =>{
    try
    {
        const input = request.body
        const user = await Customer.findOne(input)
        response.json(user)
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}

const contactform = async (request,response) =>{
    try
    {
        const input = request.body
        const contact = new Contact(input)
        await contact.save()
        response.status(200).send("Your Response Sent Successfully")
    }
    catch(err)
    {
        response.status(500).send(err.message)
    }
}


const addpet = async (request, response) => {
    try {
        const input = request.body;
        const newpet = new Pet(input);
        await newpet.save();
        response.status(200).send("Pet inserted Successfully");
    } catch (error) {
        response.status(500).send(error.message);
    }
};

const viewPets = async (request, response) => {
    try {
      const pets = await Pet.find();
      if (pets.length === 0) {
        response.send("DATA NOT FOUND");
      } else {
        response.json(pets);
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  const viewMyPets = async (request, response) => {
    try 
    {
        const custID = parseInt(request.params.custID)
        const pets = await Pet.find({"customer.custID":custID})
        {
            if(pets.length===0)
            {
                response.send("DATA NOT FOUND")
            }
            else
            {
                response.json(pets)
            }
        }
    } 
    catch (error)
    {
        response.status(500).send(error.message)
    }
  }

  const deletepet = async (request, response) => {
    try {
      const petid = request.params.petid;
      const pet = await Pet.findOne({ "petID": petid });
      if (pet != null) {
        await Pet.deleteOne({ "petID": petid });
        response.send("Deleted Successfully");
      } else {
        response.send("ID Not Found");
      }
  
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  const adoptpet = async (request, response) => {
    try {
      const input = await request.body;
      const adoption = new Adoption(input);
      await adoption.save();
      await Pet.updateOne({ "petID": input.petID }, { $set: { adptstatus: "adopted" } });
      response.status(200).send("Applied Pet for Adoption");
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
  

module.exports = {insertcustomer,checkcustomerlogin,contactform,addpet,viewPets,deletepet,viewMyPets,adoptpet}