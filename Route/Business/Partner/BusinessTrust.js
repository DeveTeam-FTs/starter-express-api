const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../../Models/Business/Partner/BusinessTrust");
const PartnerSchema = require("../../../Schema/Business/Partner/BusinessTrust");

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Partner-BusinessTrust', async(req, res) => {
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

MyRouter.patch("/Update-Partner-BusinessTrust/:Email", async(req, res) => {
    const UpdatePartner = await PartnerDetails.findOne({ Email: req.params.Email });
    
    UpdatePartner.Email = req.body.Email,
    //******************************** Business Trust - Business Details ********************************
    UpdatePartner.clientStructureType = req.body.clientStructureType ,
    UpdatePartner.clientOwner = req.body.clientOwner , 
    UpdatePartner.partnerBTName = req.body.partnerBTName , 
    UpdatePartner.partnerBTABN = req.body.partnerBTABN , 
    UpdatePartner.partnerBTAddress = req.body.partnerBTAddress , 
    UpdatePartner.partnerBTTrustee = req.body.partnerBTTrustee , 
    UpdatePartner.partnerBTTrusteeName = req.body.partnerBTTrusteeName , 
    UpdatePartner.partnerBTDistribution = req.body.partnerBTDistribution , 
    UpdatePartner.partnerBTOwnership = req.body.partnerBTOwnership , 
    UpdatePartner.partnerBTBusiness = req.body.partnerBTBusiness 
    //******************************** End of Business Trust - Business Details ********************************

    try{
        const C = await UpdatePartner.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Partner-BusinessTrust/:Email", async(req, res) => {
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