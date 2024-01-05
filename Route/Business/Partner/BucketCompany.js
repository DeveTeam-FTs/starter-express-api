const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../../Models/Business/Partner/BucketCompany");
const PartnerSchema = require("../../../Schema/Business/Partner/BucketCompany");

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Partner-BucketCompany', async(req, res) => {
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

MyRouter.patch("/Update-Partner-BucketCompany/:Email", async(req, res) => {
    const UpdatePartner = await PartnerDetails.findOne({ Email: req.params.Email });
    
    
    UpdatePartner.Email = req.body.Email,

    //******************************** Private Company - Business Details ********************************
    UpdatePartner.clientStructureType = req.body.clientStructureType ,
    UpdatePartner.clientOwner = req.body.clientOwner , 
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
    //******************************** End of Private Company - Business Details ********************************

    try{
        const C = await UpdatePartner.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Partner-BucketCompany/:Email", async(req, res) => {
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