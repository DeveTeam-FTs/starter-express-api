const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../../Models/Business/Partner/TradingCompany");
const PartnerSchema = require("../../../Schema/Business/Partner/TradingCompany");

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Partner-TradingCompany', async(req, res) => {
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

MyRouter.patch("/Update-Partner-TradingCompany/:Email", async(req, res) => {
    const UpdatePartner = await PartnerDetails.findOne({ Email: req.params.Email });
    
    
    UpdatePartner.Email = req.body.Email,

    //******************************** Trading Company - Business Details ********************************
    UpdatePartner.clientStructureType = req.body.clientStructureType ,
    UpdatePartner.clientOwner = req.body.clientOwner , 
      UpdatePartner.partnerTCName = req.body.partnerTCName , 
      UpdatePartner.partnerTCABN = req.body.partnerTCABN , 
      UpdatePartner.partnerTCACN = req.body.partnerTCACN , 
      UpdatePartner.partnerTCAddress = req.body.partnerTCAddress , 
      UpdatePartner.partnerTCDirectors = req.body.partnerTCDirectors , 
      UpdatePartner.partnerTCDirectorship = req.body.partnerTCDirectorship ,
      UpdatePartner.partnerTCShares = req.body.partnerTCShares ,
      UpdatePartner.partnerTCDividend = req.body.partnerTCDividend , 
      UpdatePartner.partnerTCEquity = req.body.partnerTCEquity 
    //******************************** End of Trading Company - Business Details ********************************

    try{
        const C = await UpdatePartner.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Partner-TradingCompany/:Email", async(req, res) => {
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