const  Express = require("express");
const MyRouter = Express.Router();

const RetirementPartnerDetails = require('../../../Models/Retirements/Partner/Super');
const PartnerSchema = require('../../../Schema/Retirements/Partner/Super');

MyRouter.get('/', async(req, res) => {
    const C = await RetirementPartnerDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-SuperAccount', async(req, res) => {
    const NewPartnerRetirment = (req.body);
    const { error } = PartnerSchema(NewPartnerRetirment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartner = new RetirementPartnerDetails(NewPartnerRetirment);
        AddPartner = await AddPartner.save();
        res.send(AddPartner);
    }
});

MyRouter.patch('/Update-Partner-SuperAccount/:Email/:_id', async(req, res) => {
    const UpdatePartnerRetirement = await RetirementPartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });

    UpdatePartnerRetirement.Email = req.body.Email,
    UpdatePartnerRetirement.Super_FundName = req.body.Super_FundName,
    UpdatePartnerRetirement.Super_MemberNO = req.body.Super_MemberNO,
    UpdatePartnerRetirement.Super_FundType = req.body.Super_FundType
    UpdatePartnerRetirement.Super_ContactNO = req.body.Super_ContactNO,
    UpdatePartnerRetirement.Super_FaxNO = req.body.Super_FaxNO,
    UpdatePartnerRetirement.Super_PostalAddress = req.body.Super_PostalAddress,
    UpdatePartnerRetirement.Super_ABN = req.body.Super_ABN,
    UpdatePartnerRetirement.Super_SPIN = req.body.Super_SPIN,
    UpdatePartnerRetirement.Super_Website = req.body.Super_Website,
    UpdatePartnerRetirement.Super_Email = req.body.Super_Email,
    UpdatePartnerRetirement.Super_FundType_2 = req.body.Super_FundType_2,
    UpdatePartnerRetirement.Super_CommencementDate = req.body.Super_CommencementDate,
    UpdatePartnerRetirement.Super_EligibleServiceDate = req.body.Super_EligibleServiceDate,
    UpdatePartnerRetirement.Super_TFN = req.body.Super_TFN,
    UpdatePartnerRetirement.Super_CurrentBalance = req.body.Super_CurrentBalance,
    UpdatePartnerRetirement.Super_TaxFree = req.body.Super_TaxFree,
    UpdatePartnerRetirement.Super_Taxed = req.body.Super_Taxed,
    UpdatePartnerRetirement.Super_Restricted = req.body.Super_Restricted,
    UpdatePartnerRetirement.Super_Unrestricted = req.body.Super_Unrestricted,
    UpdatePartnerRetirement.Super_PreservedAmount = req.body.Super_PreservedAmount

    try{
        const C = await UpdatePartnerRetirement.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Partner-SuperAccount/:Email/:_id', async(req, res) => {
    const DeletePartnerRetirement = await RetirementPartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeletePartnerRetirement.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;