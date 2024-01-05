const Express = require("express");
const ClientDetails = require("../../Models/Assets/Inheritance");
const ClientInheritance = require("../../Schema/Assets/Inheritance");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post("/Add", async(req, res) => {
    const NewClientInheritance = (req.body);
    const { error } = ClientInheritance(NewClientInheritance);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClientInheritance = new ClientDetails(NewClientInheritance);
        AddClientInheritance = await AddClientInheritance.save();
        res.send(AddClientInheritance);
    }
});

MyRouter.patch("/Update/:Email", async(req, res) => {
    const UpdateClientInheritance = await ClientDetails.findOne({ Email: req.params.Email });
    
    UpdateClientInheritance.Email = req.body.Email,
// ******************************** Personal Assets - Assets ********************************
    UpdateClientInheritance.InheritanceDescription = req.body.InheritanceDescription,
    UpdateClientInheritance.InheritanceYear = req.body.InheritanceYear,
    UpdateClientInheritance.InheritanceAmount = req.body.InheritanceAmount
   
   
// ******************************** End of Personal Assets - Assets ********************************   
    
    try{
        const C = await UpdateClientInheritance.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete/:Email", async(req, res) => {
    const DeleteClientInheritance = await ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteClientInheritance.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;