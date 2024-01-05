const  Express = require("express");
const MyRouter = Express.Router();

const RetirementClientDetails = require('../../../Models/Retirements/Client/Pension');
const ClientSchema = require('../../../Schema/Retirements/Client/Pension');

MyRouter.get('/', async(req, res) => {
    const C = await RetirementClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-PensionAccount', async(req, res) => {
    const NewClientRetirment = (req.body);
    const { error } = ClientSchema(NewClientRetirment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClient = new RetirementClientDetails(NewClientRetirment);
        AddClient = await AddClient.save();
        res.send(AddClient);
    }
});

MyRouter.patch('/Update-Client-PensionAccount/:Email/:_id', async(req, res) => {
    const UpdateClientRetirement = await RetirementClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });.Email });

    UpdateClientRetirement.Email = req.body.Email,
    UpdateClientRetirement.AccountPension_FundName = req.body.AccountPension_FundName,
    UpdateClientRetirement.AccountPension_MemberNO = req.body.AccountPension_MemberNO,
    UpdateClientRetirement.AccountPension_FundType = req.body.AccountPension_FundType,
    UpdateClientRetirement.AccountPension_ContactNO = req.body.AccountPension_ContactNO,
    UpdateClientRetirement.AccountPension_FaxNO = req.body.AccountPension_FaxNO,
    UpdateClientRetirement.AccountPension_PostalAddress = req.body.AccountPension_PostalAddress,
    UpdateClientRetirement.AccountPension_ABN = req.body.AccountPension_ABN,
    UpdateClientRetirement.AccountPension_SPIN = req.body.AccountPension_SPIN,
    UpdateClientRetirement.AccountPension_Website = req.body.AccountPension_Website,
    UpdateClientRetirement.AccountPension_Email = req.body.AccountPension_Email,
    UpdateClientRetirement.AccountPension_PensionType = req.body.AccountPension_PensionType,
    UpdateClientRetirement.AccountPension_CurrentBalance = req.body.AccountPension_CurrentBalance,
    UpdateClientRetirement.AccountPension_TaxFree = req.body.AccountPension_TaxFree,
    UpdateClientRetirement.AccountPension_Taxed = req.body.AccountPension_Taxed,
    UpdateClientRetirement.AccountPension_EligibleService = req.body.AccountPension_EligibleService,
    UpdateClientRetirement.AccountPension_CommencementDate = req.body.AccountPension_CommencementDate,
    UpdateClientRetirement.AccountPension_OriginalPrice = req.body.AccountPension_OriginalPrice,
    UpdateClientRetirement.AccountPension_IncomeDrawn = req.body.AccountPension_IncomeDrawn,
    UpdateClientRetirement.AccountPension_Frequency = req.body.AccountPension_Frequency,
    UpdateClientRetirement.AccountPension_MinimumRequired = req.body.AccountPension_MinimumRequired,
    UpdateClientRetirement.AccountPension_RelevantNumber = req.body.AccountPension_RelevantNumber,
    UpdateClientRetirement.AccountPension_LumpsumTaken = req.body.AccountPension_LumpsumTaken,
    UpdateClientRetirement.AccountPension_DeductibleAmount = req.body.AccountPension_DeductibleAmount

    try{
        const C = await UpdateClientRetirement.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Client-PensionAccount/:Email/:_id', async(req, res) => {
    const DeleteClientRetirement = await RetirementClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteClientRetirement.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;