const Express = require("express");
const PartnerDetails = require("../../../Models/Investments/Partner/ManagedFundsPortfolio");
const PartnerAssetSchema = require("../../../Schema/Investments/Partner/ManagedFundsPortfolio");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find().sort({ id: 1 });
    try{
        res.send(C);
        // return res.json ({message:"Data get successfully ", C})

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-ManagedFunds-Portfolio', async(req, res) => {
    const NewPartnerInvestment = (req.body);
    const { error } = PartnerAssetSchema(NewPartnerInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartnerInvestment = new PartnerDetails(NewPartnerInvestment);
        AddPartnerInvestment = await AddPartnerInvestment.save();
        // res.send(AddPartnerInvestment);
        return res.json ({message:"Data post successfully ", AddPartnerInvestment})

    }
});


MyRouter.patch('/Update-Partner-ManagedFunds-Portfolio/:Email/:_id', async(req, res) => {
    const UpdatePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdatePartnerInvestment.Email = req.body.Email,
    UpdatePartnerInvestment.ManagedFundsPortfolioLoanType = req.body.ManagedFundsPortfolioLoanType,
    UpdatePartnerInvestment.ManagedFundsPortfolioCurrentBalance = req.body.ManagedFundsPortfolioCurrentBalance,
    UpdatePartnerInvestment.ManagedFundsPortfolioLender = req.body.ManagedFundsPortfolioLender,
    UpdatePartnerInvestment.ManagedFundsPortfolioInterestRatePA = req.body.ManagedFundsPortfolioInterestRatePA,
    UpdatePartnerInvestment.ManagedFundsPortfolioLoanTerm = req.body.ManagedFundsPortfolioLoanTerm,
    UpdatePartnerInvestment.ManagedFundsPortfolioLoanType2 = req.body.ManagedFundsPortfolioLoanType2,
    UpdatePartnerInvestment.ManagedFundsPortfolioDeductibleLoanAmount = req.body.ManagedFundsPortfolioDeductibleLoanAmount,
    UpdatePartnerInvestment.ManagedFundsPortfolioYearRemaining = req.body.ManagedFundsPortfolioYearRemaining,
    
    UpdatePartnerInvestment.ManagedFundsPortfolioRepaymentsAmount = req.body.ManagedFundsPortfolioRepaymentsAmount,
    UpdatePartnerInvestment.ManagedFundsPortfolioFrequency = req.body.ManagedFundsPortfolioFrequency,
    UpdatePartnerInvestment.ManagedFundsPortfolioAnnualRepayments = req.body.ManagedFundsPortfolioAnnualRepayments,
    
    UpdatePartnerInvestment.ManagedFundsPortfolioMonthlyContributions = req.body.ManagedFundsPortfolioMonthlyContributions,
    UpdatePartnerInvestment.ManagedFundsPortfolioTotalAnnualContributions = req.body.ManagedFundsPortfolioTotalAnnualContributions
  

    try{
        const C = await UpdatePartnerInvestment.save();
        // res.send(C);
        return res.json ({message:"Data updated successfully ", C})

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Partner-ManagedFunds-Portfolio/:Email/:_id', async(req, res) => {
    const DeletePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeletePartnerInvestment.remove();
        // res.send(C);
        return res.json ({message:"Data deleted successfully ", C})

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;