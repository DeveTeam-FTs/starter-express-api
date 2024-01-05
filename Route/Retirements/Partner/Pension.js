const  Express = require("express");
const MyRouter = Express.Router();

const RetirementPartnerDetails = require('../../../Models/Retirements/Partner/Pension');
const PartnerSchema = require('../../../Schema/Retirements/Partner/Pension');

MyRouter.get('/', async(req, res) => {
    const C = await RetirementPartnerDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-PensionAccount', async(req, res) => {
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

MyRouter.patch('/Update-Partner-PensionAccount/:Email/:_id', async(req, res) => {
    const UpdatePartnerRetirement = await RetirementPartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });

    UpdatePartnerRetirement.Email = req.body.Email,
    UpdatePartnerRetirement.AccountPension_FundName = req.body.AccountPension_FundName,
    UpdatePartnerRetirement.AccountPension_MemberNO = req.body.AccountPension_MemberNO,
    UpdatePartnerRetirement.AccountPension_FundType = req.body.AccountPension_FundType,
    UpdatePartnerRetirement.AccountPension_ContactNO = req.body.AccountPension_ContactNO,
    UpdatePartnerRetirement.AccountPension_FaxNO = req.body.AccountPension_FaxNO,
    UpdatePartnerRetirement.AccountPension_PostalAddress = req.body.AccountPension_PostalAddress,
    UpdatePartnerRetirement.AccountPension_ABN = req.body.AccountPension_ABN,
    UpdatePartnerRetirement.AccountPension_SPIN = req.body.AccountPension_SPIN,
    UpdatePartnerRetirement.AccountPension_Website = req.body.AccountPension_Website,
    UpdatePartnerRetirement.AccountPension_Email = req.body.AccountPension_Email,
    UpdatePartnerRetirement.AccountPension_PensionType = req.body.AccountPension_PensionType,
    UpdatePartnerRetirement.AccountPension_CurrentBalance = req.body.AccountPension_CurrentBalance,
    UpdatePartnerRetirement.AccountPension_TaxFree = req.body.AccountPension_TaxFree,
    UpdatePartnerRetirement.AccountPension_Taxed = req.body.AccountPension_Taxed,
    UpdatePartnerRetirement.AccountPension_EligibleService = req.body.AccountPension_EligibleService,
    UpdatePartnerRetirement.AccountPension_CommencementDate = req.body.AccountPension_CommencementDate,
    UpdatePartnerRetirement.AccountPension_OriginalPrice = req.body.AccountPension_OriginalPrice,
    UpdatePartnerRetirement.AccountPension_IncomeDrawn = req.body.AccountPension_IncomeDrawn,
    UpdatePartnerRetirement.AccountPension_Frequency = req.body.AccountPension_Frequency,
    UpdatePartnerRetirement.AccountPension_MinimumRequired = req.body.AccountPension_MinimumRequired,
    UpdatePartnerRetirement.AccountPension_RelevantNumber = req.body.AccountPension_RelevantNumber,
    UpdatePartnerRetirement.AccountPension_LumpsumTaken = req.body.AccountPension_LumpsumTaken,
    UpdatePartnerRetirement.AccountPension_DeductibleAmount = req.body.AccountPension_DeductibleAmount

    try{
        const C = await UpdatePartnerRetirement.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Partner-PensionAccount/:Email/:_id', async(req, res) => {
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