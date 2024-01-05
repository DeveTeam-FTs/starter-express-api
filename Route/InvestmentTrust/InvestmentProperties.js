const Express = require("express");
const ClientDetails = require("../../Models/InvestmentTrust/InvestmentProperties");
const ClientAssetSchema = require("../../Schema/InvestmentTrust/InvestmentProperties");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-InvestmentProperties', async(req, res) => {
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


MyRouter.patch('/Update-Client-InvestmentProperties/:Email/:_id', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.CurrentValue = req.body.CurrentValue,
    UpdateClientInvestment.CostBase = req.body.CostBase,
    UpdateClientInvestment.PropertyAddress = req.body.PropertyAddress,
    UpdateClientInvestment.PostCode = req.body.PostCode,
    UpdateClientInvestment.RentalIncome = req.body.RentalIncome,
    UpdateClientInvestment.Frequency = req.body.Frequency,
    UpdateClientInvestment.TotalAnnualIncome = req.body.TotalAnnualIncome,
    UpdateClientInvestment.ExpensesPA = req.body.ExpensesPA,
    UpdateClientInvestment.LoanAttached = req.body.LoanAttached,
    UpdateClientInvestment.CurrentBalance = req.body.CurrentBalance,
    UpdateClientInvestment.Lender = req.body.Lender,
    UpdateClientInvestment.RepaymentAmount = req.body.RepaymentAmount,
    UpdateClientInvestment.Frequency2 = req.body.Frequency2,
    UpdateClientInvestment.AnnualRepayments = req.body.AnnualRepayments,
    UpdateClientInvestment.InterestRatePA = req.body.InterestRatePA,
    UpdateClientInvestment.LoanTerm = req.body.LoanTerm,
    UpdateClientInvestment.LoanType = req.body.LoanType,
    UpdateClientInvestment.DebtAmountLoan = req.body.DebtAmountLoan,
    UpdateClientInvestment.YearsRemaining = req.body.YearsRemaining

    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-InvestmentProperties/:Email/:_id', async(req, res) => {
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