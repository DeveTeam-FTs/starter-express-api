const  Express = require("express");
const MyRouter = Express.Router();

const RetirementPartnerDetails = require('../../../Models/Retirements/Partner/Partner_SuperAccounts');
const PartnerSchema = require('../../../Schema/Retirements/Partner/PartnerSuperAccounts');

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
    UpdatePartnerRetirement.Super_FundName = req.body
    UpdatePartnerRetirement.Super_MemberNO = req.body
    UpdatePartnerRetirement.Super_FundType = req.body
    UpdatePartnerRetirement.Super_ContactNO = req.body
    UpdatePartnerRetirement.Super_FaxNO = req.body
    UpdatePartnerRetirement.Super_PostalAddress = req.body
    UpdatePartnerRetirement.Super_ABN = req.body
    UpdatePartnerRetirement.Super_SPIN = req.body
    UpdatePartnerRetirement.Super_Website = req.body
    UpdatePartnerRetirement.Super_Email = req.body
    UpdatePartnerRetirement.Super_FundType_2 = req.body
    UpdatePartnerRetirement.Super_CommencementDate = req.body
    UpdatePartnerRetirement.Super_EligibleServiceDate = req.body
    UpdatePartnerRetirement.Super_TFN = req.body
    UpdatePartnerRetirement.Super_CurrentBalance = req.body
    UpdatePartnerRetirement.Super_TaxFree = req.body
    UpdatePartnerRetirement.Super_Taxed = req.body
    UpdatePartnerRetirement.Super_Restricted = req.body
    UpdatePartnerRetirement.Super_Unrestricted = req.body
    UpdatePartnerRetirement.Super_PreservedAmount = req.body
// ************************* End of Super *************************

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