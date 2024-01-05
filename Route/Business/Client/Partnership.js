const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/Business/Client/Partnership");
const ClientSchema = require("../../../Schema/Business/Client/Partnership");

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Client-Partnership', async(req, res) => {
    const NewClient = (req.body);
    const { error } = ClientSchema(NewClient);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClient = new ClientDetails(NewClient);
        AddClient = await AddClient.save();
        res.send(AddClient);
    }
});

MyRouter.patch("/Update-Client-Partnership/:Email", async(req, res) => {
    const UpdateClient = await ClientDetails.findOne({ Email: req.params.Email });
    
    
    UpdateClient.Email = req.body.Email,
    
    //******************************** Partnership - Business Details ********************************
    UpdateClient.clientStructureType = req.body.clientStructureType ,
    UpdateClient.clientOwner = req.body.clientOwner , 
    UpdateClient.clientPartnershipName = req.body.clientPartnershipName , 
    UpdateClient.clientPartnershipABN = req.body.clientPartnershipABN , 
    UpdateClient.clientPartnershipAddress = req.body.clientPartnershipAddress , 
    UpdateClient.clientPartnershipIncome = req.body.clientPartnershipIncome , 
    UpdateClient.clientPartnershipPartnership = req.body.clientPartnershipPartnership , 
    UpdateClient.clientPartnershipShareIncome = req.body.clientPartnershipShareIncome , 
    UpdateClient.clientPartnershipGoodwill = req.body.clientPartnershipGoodwill 
    //******************************** End of Partnership - Business Details ********************************

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Client-Partnership/:Email", async(req, res) => {
    const DeleteClient = ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteClient.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;