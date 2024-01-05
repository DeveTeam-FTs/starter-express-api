const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/Business/Client/BusinessTrust");
const ClientSchema = require("../../../Schema/Business/Client/BusinessTrust");

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Client-BusinessTrust', async(req, res) => {
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

MyRouter.patch("/Update-Client-BusinessTrust/:Email", async(req, res) => {
    const UpdateClient = await ClientDetails.findOne({ Email: req.params.Email });
    
    UpdateClient.Email = req.body.Email,
    //******************************** Business Trust - Business Details ********************************
    UpdateClient.clientStructureType = req.body.clientStructureType ,
    UpdateClient.clientOwner = req.body.clientOwner , 
    UpdateClient.clientBTName = req.body.clientBTName , 
    UpdateClient.clientBTABN = req.body.clientBTABN , 
    UpdateClient.clientBTAddress = req.body.clientBTAddress , 
    UpdateClient.clientBTTrustee = req.body.clientBTTrustee , 
    UpdateClient.clientBTTrusteeName = req.body.clientBTTrusteeName , 
    UpdateClient.clientBTDistribution = req.body.clientBTDistribution , 
    UpdateClient.clientBTOwnership = req.body.clientBTOwnership , 
    UpdateClient.clientBTBusiness = req.body.clientBTBusiness 
    //******************************** End of Business Trust - Business Details ********************************

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Client-BusinessTrust/:Email", async(req, res) => {
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