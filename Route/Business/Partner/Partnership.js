const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../../Models/Business/Partner/Partnership");
const PartnerSchema = require("../../../Schema/Business/Partner/Partnership");

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Partner-Partnership', async(req, res) => {
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

MyRouter.patch("/Update-Partner-Partnership/:Email", async(req, res) => {
    const UpdatePartner = await PartnerDetails.findOne({ Email: req.params.Email });
    
    
    UpdatePartner.Email = req.body.Email,
    
    //******************************** Partnership - Business Details ********************************
    UpdatePartner.clientStructureType = req.body.clientStructureType ,
    UpdatePartner.clientOwner = req.body.clientOwner , 
    UpdatePartner.partnerPartnershipName = req.body.partnerPartnershipName , 
    UpdatePartner.partnerPartnershipABN = req.body.partnerPartnershipABN , 
    UpdatePartner.partnerPartnershipAddress = req.body.partnerPartnershipAddress , 
    UpdatePartner.partnerPartnershipIncome = req.body.partnerPartnershipIncome , 
    UpdatePartner.partnerPartnershipPartnership = req.body.partnerPartnershipPartnership , 
    UpdatePartner.partnerPartnershipShareIncome = req.body.partnerPartnershipShareIncome , 
    UpdatePartner.partnerPartnershipGoodwill = req.body.partnerPartnershipGoodwill 
    //******************************** End of Partnership - Business Details ********************************

    try{
        const C = await UpdatePartner.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Partner-Partnership/:Email", async(req, res) => {
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