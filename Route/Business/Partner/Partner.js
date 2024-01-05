const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../../Models/Business/Partner/Partner");
const PartnerSchema = require("../../../Schema/Business/Partner/Partner");

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Partner-Business', async(req, res) => {
    const NewPartner = (req.body);
    const { error } = PartnerSchema(NewPartner);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartner = new PartnerDetails(NewPartner);
        AddPartner = await AddPartner.save();
        res.send(AddPartner);
    }
});

MyRouter.patch("/Update-Partner-Business/:Email", async(req, res) => {
    const UpdatePartner = await PartnerDetails.findOne({ Email: req.params.Email });
    
    UpdatePartner.Email = req.body.Email,
   
    // Sole Trader 
    
    UpdatePartner.partnerSTBusinessName = req.body.partnerSTBusinessName , 
    UpdatePartner.partnerSTABN = req.body.partnerSTABN , 
    UpdatePartner.partnerSTBusinessAddress = req.body.partnerSTBusinessAddress , 
    UpdatePartner.partnerSTBusinessIncome = req.body.partnerSTBusinessIncome , 
    UpdatePartner.partnerSTGoodwill = req.body.partnerSTGoodwill , 
    
    // Partnershiip

    UpdatePartner.partnerPartnershipName = req.body.partnerPartnershipName , 
    UpdatePartner.partnerPartnershipABN = req.body.partnerPartnershipABN , 
    UpdatePartner.partnerPartnershipAddress = req.body.partnerPartnershipAddress , 
    UpdatePartner.partnerPartnershipIncome = req.body.partnerPartnershipIncome , 
    UpdatePartner.partnerPartnershipPartnership = req.body.partnerPartnershipPartnership , 
    UpdatePartner.partnerPartnershipShareIncome = req.body.partnerPartnershipShareIncome , 
    UpdatePartner.partnerPartnershipGoodwill = req.body.partnerPartnershipGoodwill , 
  
    // Trading Company
   
    UpdatePartner.partnerTCName = req.body.partnerTCName , 
    UpdatePartner.partnerTCABN = req.body.partnerTCABN , 
    UpdatePartner.partnerTCACN = req.body.partnerTCACN , 
    UpdatePartner.partnerTCAddress = req.body.partnerTCAddress , 
    UpdatePartner.partnerTCDirectors = req.body.partnerTCDirectors , 
    UpdatePartner.partnerTCDirectorship = req.body.partnerTCDirectorship ,
    UpdatePartner.partnerTCShares = req.body.partnerTCShares ,
    UpdatePartner.partnerTCDividend = req.body.partnerTCDividend , 
    UpdatePartner.partnerTCEquity = req.body.partnerTCEquity , 
   
    // Business Trust
    
    UpdatePartner.partnerBTName = req.body.partnerBTName , 
    UpdatePartner.partnerBTABN = req.body.partnerBTABN , 
    UpdatePartner.partnerBTAddress = req.body.partnerBTAddress , 
    UpdatePartner.partnerBTTrustee = req.body.partnerBTTrustee , 
    UpdatePartner.partnerBTTrusteeName = req.body.partnerBTTrusteeName , 
    UpdatePartner.partnerBTDistribution = req.body.partnerBTDistribution , 
    UpdatePartner.partnerBTOwnership = req.body.partnerBTOwnership , 
    UpdatePartner.partnerBTBusiness = req.body.partnerBTBusiness , 
  
    // Bucket Company
    
    UpdatePartner.partnerBCCHolding = req.body.partnerBCCHolding , 
    UpdatePartner.partnerBCPHolding = req.body.partnerBCPHolding , 
    UpdatePartner.partnerBCName = req.body.partnerBCName , 
    UpdatePartner.partnerBCACN = req.body.partnerBCACN , 
    UpdatePartner.partnerBCAddress = req.body.partnerBCAddress , 
    UpdatePartner.partnerBCCDirectorship = req.body.partnerBCCDirectorship , 
    UpdatePartner.partnerBCPDirectorship = req.body.partnerBCPDirectorship , 
    UpdatePartner.partnerBCCDividend = req.body.partnerBCCDividend , 
    UpdatePartner.partnerBCPDividend = req.body.partnerBCPDividend , 
    UpdatePartner.partnerBCCEquity = req.body.partnerBCCEquity , 
    UpdatePartner.partnerBCPEquity = req.body.partnerBCPEquity 
    
    
  

    try{
        const C = await UpdatePartner.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Partner-Business/:Email", async(req, res) => {
    const DeletePartner = PartnerDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeletePartner.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;