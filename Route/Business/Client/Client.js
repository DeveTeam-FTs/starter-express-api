const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/Business/Client/Client");
const ClientSchema = require("../../../Schema/Business/Client/Client");

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Client-Business', async(req, res) => {
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

MyRouter.patch("/Update-Client-Business/:Email", async(req, res) => {
    const UpdateClient = await ClientDetails.findOne({ Email: req.params.Email });
    
    UpdateClient.Email = req.body.Email,
    UpdateClient.clientStructureType = req.body.clientStructureType ,
    UpdateClient.clientOwner = req.body.clientOwner , 
    // Sole Trader 
  
    UpdateClient.clientSTBusinessName = req.body.clientSTBusinessName , 
    UpdateClient.clientSTABN = req.body.clientSTABN , 
    UpdateClient.clientSTBusinessAddress = req.body.clientSTBusinessAddress , 
    UpdateClient.clientSTBusinessIncome = req.body.clientSTBusinessIncome , 
    UpdateClient.clientSTGoodwill = req.body.clientSTGoodwill , 
    
    // Partnershiip
    
    UpdateClient.clientPartnershipName = req.body.clientPartnershipName , 
    UpdateClient.clientPartnershipABN = req.body.clientPartnershipABN , 
    UpdateClient.clientPartnershipAddress = req.body.clientPartnershipAddress , 
    UpdateClient.clientPartnershipIncome = req.body.clientPartnershipIncome , 
    UpdateClient.clientPartnershipPartnership = req.body.clientPartnershipPartnership , 
    UpdateClient.clientPartnershipShareIncome = req.body.clientPartnershipShareIncome , 
    UpdateClient.clientPartnershipGoodwill = req.body.clientPartnershipGoodwill , 
  
    // Trading Company
    
    UpdateClient.clientTCName = req.body.clientTCName , 
    UpdateClient.clientTCABN = req.body.clientTCABN , 
    UpdateClient.clientTCACN = req.body.clientTCACN , 
    UpdateClient.clientTCAddress = req.body.clientTCAddress , 
    UpdateClient.clientTCDirectors = req.body.clientTCDirectors , 
    UpdateClient.clientTCDirectorship = req.body.clientTCDirectorship ,
    UpdateClient.clientTCShares = req.body.clientTCShares ,
    UpdateClient.clientTCDividend = req.body.clientTCDividend , 
    UpdateClient.clientTCEquity = req.body.clientTCEquity , 
   
    // Business Trust
   
    UpdateClient.clientBTName = req.body.clientBTName , 
    UpdateClient.clientBTABN = req.body.clientBTABN , 
    UpdateClient.clientBTAddress = req.body.clientBTAddress , 
    UpdateClient.clientBTTrustee = req.body.clientBTTrustee , 
    UpdateClient.clientBTTrusteeName = req.body.clientBTTrusteeName , 
    UpdateClient.clientBTDistribution = req.body.clientBTDistribution , 
    UpdateClient.clientBTOwnership = req.body.clientBTOwnership , 
    UpdateClient.clientBTBusiness = req.body.clientBTBusiness , 
  
    // Bucket Company
    
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
    
    
  

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Client-Business/:Email", async(req, res) => {
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