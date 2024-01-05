const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/Business/Client/TradingCompany");
const ClientSchema = require("../../../Schema/Business/Client/TradingCompany");

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Client-TradingCompany', async(req, res) => {
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

MyRouter.patch("/Update-Client-TradingCompany/:Email", async(req, res) => {
    const UpdateClient = await ClientDetails.findOne({ Email: req.params.Email });
    
    
    UpdateClient.Email = req.body.Email,

    //******************************** Trading Company - Business Details ********************************
    UpdateClient.clientStructureType = req.body.clientStructureType ,
    UpdateClient.clientOwner = req.body.clientOwner , 
      
    
      UpdateClient.clientTCName = req.body.clientTCName , 
      UpdateClient.clientTCABN = req.body.clientTCABN , 
      UpdateClient.clientTCACN = req.body.clientTCACN , 
      UpdateClient.clientTCAddress = req.body.clientTCAddress , 
      UpdateClient.clientTCDirectors = req.body.clientTCDirectors , 
      UpdateClient.clientTCDirectorship = req.body.clientTCDirectorship ,
      UpdateClient.clientTCShares = req.body.clientTCShares ,
      UpdateClient.clientTCDividend = req.body.clientTCDividend , 
      UpdateClient.clientTCEquity = req.body.clientTCEquity 
    //******************************** End of Trading Company - Business Details ********************************

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Client-TradingCompany/:Email", async(req, res) => {
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