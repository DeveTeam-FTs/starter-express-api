const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../../Models/Business/Partner/SoleTrader");
const PartnerSchema = require("../../../Schema/Business/Partner/SoleTrader");

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Partner-SoleTrader', async(req, res) => {
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

MyRouter.patch("/Update-Partner-SoleTrader/:Email", async(req, res) => {
    const UpdatePartner = await PartnerDetails.findOne({ Email: req.params.Email });
    
    UpdatePartner.Email = req.body.Email,
    UpdatePartner.clientStructureType = req.body.clientStructureType ,
    UpdatePartner.clientOwner = req.body.clientOwner ,
    UpdatePartner.partnerSTBusinessName = req.body.partnerSTBusinessName , 
    UpdatePartner.partnerSTABN = req.body.partnerSTABN , 
    UpdatePartner.partnerSTBusinessAddress = req.body.partnerSTBusinessAddress , 
    UpdatePartner.partnerSTBusinessIncome = req.body.partnerSTBusinessIncome , 
    UpdatePartner.partnerSTGoodwill = req.body.partnerSTGoodwill 

    //******************************** Partner Sole Trader - Business Details ********************************
    
    //******************************** End of Partner Sole Trader - Business Details ********************************

    try{
        const C = await UpdatePartner.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Partner-SoleTrader/:Email", async(req, res) => {
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