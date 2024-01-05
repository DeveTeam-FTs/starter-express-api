const  Express = require("express");
const MyRouter = Express.Router();

const RetirementClientDetails = require('../../Models/Retirements/Client');
const ClientSchema = require('../../Schema/Retirements/Client');

MyRouter.get('/', async(req, res) => {
    const C = await RetirementClientDetails.find().sort({ id: 1 });
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-Retirement', async(req, res) => {
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

MyRouter.patch('/Update-Client-Retirement/:id', async(req, res) => {
    const UpdateClientRetirement = await RetirementClientDetails.findOne({ id: req.params.id });
    UpdateClientRetirement.id = req.body.id,
    UpdateClientRetirement.Super = req.body.Super,
    UpdateClientRetirement.AccountPension = req.body.AccountPension,
    UpdateClientRetirement.Annuities = req.body.Annuities,
    UpdateClientRetirement.LifetimePension = req.body.LifetimePension

// ************************* Super *************************
    UpdateClientRetirement.NO_ofSuperAccounts = req.body
    UpdateClientRetirement.Super_FundName = req.body
    UpdateClientRetirement.Super_MemberNO = req.body
    UpdateClientRetirement.Super_FundType = req.body
    UpdateClientRetirement.Super_ContactNO = req.body
    UpdateClientRetirement.Super_FaxNO = req.body
    UpdateClientRetirement.Super_PostalAddress = req.body
    UpdateClientRetirement.Super_ABN = req.body
    UpdateClientRetirement.Super_SPIN = req.body
    UpdateClientRetirement.Super_Website = req.body
    UpdateClientRetirement.Super_Email = req.body
    UpdateClientRetirement.Super_FundType_2 = req.body
    UpdateClientRetirement.Super_CommencementDate = req.body
    UpdateClientRetirement.Super_EligibleServiceDate = req.body
    UpdateClientRetirement.Super_TFN = req.body
    UpdateClientRetirement.Super_CurrentBalance = req.body
    UpdateClientRetirement.Super_TaxFree = req.body
    UpdateClientRetirement.Super_Taxed = req.body
    UpdateClientRetirement.Super_Restricted = req.body
    UpdateClientRetirement.Super_Unrestricted = req.body
    UpdateClientRetirement.Super_PreservedAmount = req.body
// ************************* End of Super *************************



// ************************* Account Based Pension *************************
    UpdateClientRetirement.NO_ofAccountsBasedPension = req.body
    UpdateClientRetirement.AccountPension_FundName = req.body
    UpdateClientRetirement.AccountPension_MemberNO = req.body
    UpdateClientRetirement.AccountPension_FundType = req.body
    UpdateClientRetirement.AccountPension_ContactNO = req.body
    UpdateClientRetirement.AccountPension_FaxNO = req.body
    UpdateClientRetirement.AccountPension_PostalAddress = req.body
    UpdateClientRetirement.AccountPension_ABN = req.body
    UpdateClientRetirement.AccountPension_SPIN = req.body
    UpdateClientRetirement.AccountPension_Website = req.body
    UpdateClientRetirement.AccountPension_Email = req.body
    UpdateClientRetirement.AccountPension_PensionType = req.body
    UpdateClientRetirement.AccountPension_CurrentBalance = req.body
    UpdateClientRetirement.AccountPension_TaxFree = req.body
    UpdateClientRetirement.AccountPension_Taxed = req.body
    UpdateClientRetirement.AccountPension_EligibleService = req.body
    UpdateClientRetirement.AccountPension_CommencementDate = req.body
    UpdateClientRetirement.AccountPension_OriginalPrice = req.body
    UpdateClientRetirement.AccountPension_IncomeDrawn = req.body
    UpdateClientRetirement.AccountPension_Frequency = req.body
    UpdateClientRetirement.AccountPension_MinimumRequired = req.body
    UpdateClientRetirement.AccountPension_RelevantNumber = req.body
    UpdateClientRetirement.AccountPension_LumpsumTaken = req.body
    UpdateClientRetirement.AccountPension_DeductibleAmount = req.body
// ************************* End of Account Based Pension *************************



// ************************* Annuitites *************************
    UpdateClientRetirement.NO_ofAnnuities = req.body
    UpdateClientRetirement.Annuities_ProductProvider = req.body
    UpdateClientRetirement.Annuities_InvestmentAmount = req.body
    UpdateClientRetirement.Annuities_CurrentValue = req.body
    UpdateClientRetirement.Annuities_AnnuityType = req.body
    UpdateClientRetirement.Annuities_RCV = req.body
    UpdateClientRetirement.Annuities_Term = req.body
    UpdateClientRetirement.Annuities_YearsUntilMaturity = req.body
    UpdateClientRetirement.Annuities_RegularIncome = req.body
    UpdateClientRetirement.Annuities_Frequency = req.body
    UpdateClientRetirement.Annuities_AnnualInflation = req.body
// ************************* End of Annuitites *************************



// ************************* Life Time Pension *************************
    UpdateClientRetirement.NO_ofLifePension = req.body
    UpdateClientRetirement.LifePension_FundName = req.body
    UpdateClientRetirement.LifePension_RegularIncome = req.body
    UpdateClientRetirement.LifePension_Frequency = req.body
    UpdateClientRetirement.LifePension_DeductibleAmount = req.body
    UpdateClientRetirement.LifePension_TaxFree_Pension = req.body
    UpdateClientRetirement.LifePension_TaxablePensionAmount = req.body
// ************************* End of Life Time Pension *************************

    try{
        const C = await UpdateClientRetirement.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Client-Retirement/:id', async(req, res) => {
    const DeleteClientRetirement = await RetirementClientDetails.findOne({ id: req.params.id });
    try{
        const C = await DeleteClientRetirement.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;