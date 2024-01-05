const Express = require("express");
const ClientDetails = require("../../Models/Investments/ManagedFundsPortfolio");
const ClientAssetSchema = require("../../Schema/Investments/ManagedFundsPortfolio");
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

MyRouter.post('/Add-Client-ManagedFunds-Portfolio', async(req, res) => {
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


MyRouter.patch('/Update-Client-ManagedFunds-Portfolio/:Email/:_id', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.ManagedFundsPortfolioLoanType = req.body.ManagedFundsPortfolioLoanType,
    UpdateClientInvestment.ManagedFundsPortfolioCurrentBalance = req.body.ManagedFundsPortfolioCurrentBalance,
    UpdateClientInvestment.ManagedFundsPortfolioLender = req.body.ManagedFundsPortfolioLender,
    UpdateClientInvestment.ManagedFundsPortfolioInterestRatePA = req.body.ManagedFundsPortfolioInterestRatePA,
    UpdateClientInvestment.ManagedFundsPortfolioLoanTerm = req.body.ManagedFundsPortfolioLoanTerm,
    UpdateClientInvestment.ManagedFundsPortfolioLoanType2 = req.body.ManagedFundsPortfolioLoanType2,
    UpdateClientInvestment.ManagedFundsPortfolioDeductibleLoanAmount = req.body.ManagedFundsPortfolioDeductibleLoanAmount,
    UpdateClientInvestment.ManagedFundsPortfolioYearRemaining = req.body.ManagedFundsPortfolioYearRemaining,
    
    UpdateClientInvestment.ManagedFundsPortfolioRepaymentsAmount = req.body.ManagedFundsPortfolioRepaymentsAmount,
    UpdateClientInvestment.ManagedFundsPortfolioFrequency = req.body.ManagedFundsPortfolioFrequency,
    UpdateClientInvestment.ManagedFundsPortfolioAnnualRepayments = req.body.ManagedFundsPortfolioAnnualRepayments,
    
    UpdateClientInvestment.ManagedFundsPortfolioMonthlyContributions = req.body.ManagedFundsPortfolioMonthlyContributions,
    UpdateClientInvestment.ManagedFundsPortfolioTotalAnnualContributions = req.body.ManagedFundsPortfolioTotalAnnualContributions
    


    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-ManagedFunds-Portfolio/:Email/:_id', async(req, res) => {
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