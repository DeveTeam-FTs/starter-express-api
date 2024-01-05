const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/Business/Client/BucketCompany");
const ClientSchema = require("../../../Schema/Business/Client/BucketCompany");

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Client-BucketCompany', async(req, res) => {
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

MyRouter.patch("/Update-Client-BucketCompany/:Email", async(req, res) => {
    const UpdateClient = await ClientDetails.findOne({ Email: req.params.Email });
    
    
    UpdateClient.Email = req.body.Email,

    //******************************** Private Company - Business Details ********************************
    UpdateClient.clientStructureType = req.body.clientStructureType ,
    UpdateClient.clientOwner = req.body.clientOwner , 
    UpdateClient.clientBCCHolding = req.body.clientBCCHolding , 
    UpdateClient.clientBCPHolding = req.body.clientBCPHolding , 
    UpdateClient.clientBCName = req.body.clientBCName , 
    UpdateClient.clientBCACN = req.body.clientBCACN , 
    UpdateClient.clientBCAddress = req.body.clientBCAddress , 
    UpdateClient.clientBCCDirectorship = req.body.clientBCCDirectorship , 
    UpdateClient.clientBCPDirectorship = req.body.clientBCPDirectorship , 
    UpdateClient.clientBCCDividend = req.body.clientBCCDividend , 
    UpdateClient.clientBCPDividend = req.body.clientBCPDividend , 
    UpdateClient.clientBCCEquity = req.body.clientBCCEquity , 
    UpdateClient.clientBCPEquity = req.body.clientBCPEquity 
    //******************************** End of Private Company - Business Details ********************************

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Client-BucketCompany/:Email", async(req, res) => {
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