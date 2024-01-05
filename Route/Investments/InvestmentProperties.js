const Express = require("express");
const ClientDetails = require("../../Models/Investments/InvestmentProperties");
const ClientAssetSchema = require("../../Schema/Investments/InvestmentProperties");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find().sort({ id: 1 });
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-Investment-Properties', async(req, res) => {
    const NewClientInvestment = (req.body);
    const { error } = ClientAssetSchema(NewClientInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddClientInvestment = new ClientDetails(NewClientInvestment);
        AddClientInvestment = await AddClientInvestment.save();
        res.send(AddClientInvestment);
    }
});


MyRouter.patch('/Update-Client-Investment-Properties/:Email/:_id', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.InvestmentPropertiesCurrentValue = req.body.InvestmentPropertiesCurrentValue,
    UpdateClientInvestment.InvestmentPropertiesClientOwnership = req.body.InvestmentPropertiesClientOwnership,
    UpdateClientInvestment.InvestmentPropertiesCostBase = req.body.InvestmentPropertiesCostBase,
    UpdateClientInvestment.InvestmentPropertiesAddress = req.body.InvestmentPropertiesAddress,
    UpdateClientInvestment.InvestmentPropertiesPostcode = req.body.InvestmentPropertiesPostcode,
    UpdateClientInvestment.InvestmentPropertiesRentalIncome = req.body.InvestmentPropertiesRentalIncome,
    UpdateClientInvestment.InvestmentPropertiesFrequency = req.body.InvestmentPropertiesFrequency,
    UpdateClientInvestment.InvestmentPropertiesTotalAnnualIncome = req.body.InvestmentPropertiesTotalAnnualIncome,
    UpdateClientInvestment.InvestmentPropertiesExpensesPA = req.body.InvestmentPropertiesExpensesPA,
    UpdateClientInvestment.InvestmentPropertiesLoanAttached = req.body.InvestmentPropertiesLoanAttached,
    UpdateClientInvestment.InvestmentPropertiesCurrentBalance = req.body.InvestmentPropertiesCurrentBalance,
    UpdateClientInvestment.InvestmentPropertiesClientBorrowing = req.body.InvestmentPropertiesClientBorrowing,
    UpdateClientInvestment.InvestmentPropertiesLender = req.body.InvestmentPropertiesLender,
    UpdateClientInvestment.InvestmentPropertiesRepaymentAmount = req.body.InvestmentPropertiesRepaymentAmount,
    UpdateClientInvestment.InvestmentPropertiesFrequency2 = req.body.InvestmentPropertiesFrequency2,
    UpdateClientInvestment.InvestmentPropertiesAnnualRepayment = req.body.InvestmentPropertiesAnnualRepayment,
    UpdateClientInvestment.InvestmentPropertiesInterestRatePA = req.body.InvestmentPropertiesInterestRatePA,
    UpdateClientInvestment.InvestmentPropertiesLoanTerm = req.body.InvestmentPropertiesLoanTerm,
    UpdateClientInvestment.InvestmentPropertiesLoanType = req.body.InvestmentPropertiesLoanType,
    UpdateClientInvestment.InvestmentPropertiesDebtLoanAmount = req.body.InvestmentPropertiesDebtLoanAmount,
    UpdateClientInvestment.InvestmentPropertiesYearsRemaining = req.body.InvestmentPropertiesYearsRemaining,
    UpdateClientInvestment.InvestmentPropertiesPartnerBorrowing = req.body.InvestmentPropertiesPartnerBorrowing,
    UpdateClientInvestment.InvestmentPropertiesPartnerOwnership = req.body.InvestmentPropertiesPartnerOwnership

        
    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-Investment-Properties/:Email/:_id', async(req, res) => {
    const DeleteClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteClientInvestment.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;