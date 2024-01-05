const Express = require("express");
const JoinedDetails = require("../../../Models/Investments/Joined/ManagedFundsPortfolio");
const JoinedAssetSchema = require("../../../Schema/Investments/Joined/ManagedFundsPortfolio");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await JoinedDetails.find().sort({ id: 1 });
    try{
        res.send(C);
        // return res.json ({message:"Data get successfully ", C})

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Joined-ManagedFunds-Portfolio', async(req, res) => {
    const NewJoinedInvestment = (req.body);
    const { error } = JoinedAssetSchema(NewJoinedInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddJoinedInvestment = new JoinedDetails(NewJoinedInvestment);
        AddJoinedInvestment = await AddJoinedInvestment.save();
        // res.send(AddJoinedInvestment);
        return res.json ({message:"Data post successfully ", AddJoinedInvestment})

    }
});


MyRouter.patch('/Update-Joined-ManagedFunds-Portfolio/:Email/:_id', async(req, res) => {
    const UpdateJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdateJoinedInvestment.Email = req.body.Email,
    UpdateJoinedInvestment.ManagedFundsPortfolioLoanType = req.body.ManagedFundsPortfolioLoanType,
    UpdateJoinedInvestment.ManagedFundsPortfolioCurrentBalance = req.body.ManagedFundsPortfolioCurrentBalance,
    UpdateJoinedInvestment.ManagedFundsPortfolioLender = req.body.ManagedFundsPortfolioLender,
    UpdateJoinedInvestment.ManagedFundsPortfolioInterestRatePA = req.body.ManagedFundsPortfolioInterestRatePA,
    UpdateJoinedInvestment.ManagedFundsPortfolioLoanTerm = req.body.ManagedFundsPortfolioLoanTerm,
    UpdateJoinedInvestment.ManagedFundsPortfolioLoanType2 = req.body.ManagedFundsPortfolioLoanType2,
    UpdateJoinedInvestment.ManagedFundsPortfolioDeductibleLoanAmount = req.body.ManagedFundsPortfolioDeductibleLoanAmount,
    UpdateJoinedInvestment.ManagedFundsPortfolioYearRemaining = req.body.ManagedFundsPortfolioYearRemaining,
    
    UpdateJoinedInvestment.ManagedFundsPortfolioRepaymentsAmount = req.body.ManagedFundsPortfolioRepaymentsAmount,
    UpdateJoinedInvestment.ManagedFundsPortfolioFrequency = req.body.ManagedFundsPortfolioFrequency,
    UpdateJoinedInvestment.ManagedFundsPortfolioAnnualRepayments = req.body.ManagedFundsPortfolioAnnualRepayments,
    
    UpdateJoinedInvestment.ManagedFundsPortfolioMonthlyContributions = req.body.ManagedFundsPortfolioMonthlyContributions,
    UpdateJoinedInvestment.ManagedFundsPortfolioTotalAnnualContributions = req.body.ManagedFundsPortfolioTotalAnnualContributions


    try{
        const C = await UpdateJoinedInvestment.save();
        // res.send(C);
        return res.json ({message:"Data updated successfully ", C})

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Joined-ManagedFunds-Portfolio/:Email/:_id', async(req, res) => {
    const DeleteJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteJoinedInvestment.remove();
        // res.send(C);
        return res.json ({message:"Data deleted successfully ", C})

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;