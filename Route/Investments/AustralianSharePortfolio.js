const Express = require("express");
const ClientDetails = require("../../Models/Investments/AustralianSharePortfolio");
const ClientAssetSchema = require("../../Schema/Investments/AustralianSharePortfolio");
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

MyRouter.post('/Add-Client-Australian-Share-Portfolio', async(req, res) => {
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


MyRouter.patch('/Update-Client-Australian-Share-Portfolio/:Email/:_id', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdateClientInvestment.Email = req.body.Email, 
    UpdateClientInvestment.AustralianPortfolioLoanType = req.body.AustralianPortfolioLoanType,
    UpdateClientInvestment.AustralianPortfolioCurrentBalance = req.body.AustralianPortfolioCurrentBalance,
    UpdateClientInvestment.AustralianPortfolioLender = req.body.AustralianPortfolioLender,
    UpdateClientInvestment.AustralianShareMarket = req.body.AustralianShareMarket,
    UpdateClientInvestment.AustralianInterestRatePA = req.body.AustralianInterestRatePA,
    UpdateClientInvestment.AustralianPortfolioLoanTerm = req.body.AustralianPortfolioLoanTerm,
    UpdateClientInvestment.AustralianPortfolioLoanType2 = req.body.AustralianPortfolioLoanType2,
    UpdateClientInvestment.AustralianPortfolioDeductibleLoanAmount = req.body.AustralianPortfolioDeductibleLoanAmount,
    UpdateClientInvestment.AustralianPortfolioYearRemaining = req.body.AustralianPortfolioYearRemaining,
    
    UpdateClientInvestment.AustralianPortfolioDeductibleRepaymentsAmount = req.body.AustralianPortfolioDeductibleRepaymentsAmount,
    UpdateClientInvestment.AustralianPortfolioDeductibleFrequency = req.body.AustralianPortfolioDeductibleFrequency,
    UpdateClientInvestment.AustralianPortfolioDeductibleAnnualRepayments = req.body.AustralianPortfolioDeductibleAnnualRepayments,
    
    UpdateClientInvestment.AustralianPortfolioDeductibleMonthlyContributions = req.body.AustralianPortfolioDeductibleMonthlyContributions,
    UpdateClientInvestment.AustralianPortfolioDeductibleTotalAnnualContributions = req.body.AustralianPortfolioDeductibleTotalAnnualContributions



    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-Australian-Share-Portfolio/:Email/:_id', async(req, res) => {
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