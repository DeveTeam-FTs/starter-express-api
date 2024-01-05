const Express = require("express");
const PartnerDetails = require("../../../Models/Investments/Partner/AustralianSharePortfolio");
const PartnerAssetSchema = require("../../../Schema/Investments/Partner/AustralianSharePortfolio");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find().sort({ id: 1 });
    try{
        res.send(C);
        // return res.json ({message:"data get successfully",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-Australian-Share-Portfolio', async(req, res) => {
    const NewPartnerInvestment = (req.body);
    const { error } = PartnerAssetSchema(NewPartnerInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartnerInvestment = new PartnerDetails(NewPartnerInvestment);
        AddPartnerInvestment = await AddPartnerInvestment.save();
        res.send(AddPartnerInvestment);
        // return res.json ({message:"data post successfully",AddPartnerInvestment })

    }
});


MyRouter.patch('/Update-Partner-Australian-Share-Portfolio/:Email/:_id', async(req, res) => {
    const UpdatePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdatePartnerInvestment.Email = req.body.Email, 
    UpdatePartnerInvestment.AustralianPortfolioLoanType = req.body.AustralianPortfolioLoanType,
    UpdatePartnerInvestment.AustralianPortfolioCurrentBalance = req.body.AustralianPortfolioCurrentBalance,
    UpdatePartnerInvestment.AustralianPortfolioLender = req.body.AustralianPortfolioLender,
    UpdatePartnerInvestment.AustralianShareMarket = req.body.AustralianShareMarket,
    UpdatePartnerInvestment.AustralianInterestRatePA = req.body.AustralianInterestRatePA,
    UpdatePartnerInvestment.AustralianPortfolioLoanTerm = req.body.AustralianPortfolioLoanTerm,
    UpdatePartnerInvestment.AustralianPortfolioLoanType2 = req.body.AustralianPortfolioLoanType2,
    UpdatePartnerInvestment.AustralianPortfolioDeductibleLoanAmount = req.body.AustralianPortfolioDeductibleLoanAmount,
    UpdatePartnerInvestment.AustralianPortfolioYearRemaining = req.body.AustralianPortfolioYearRemaining,
    
    UpdatePartnerInvestment.AustralianPortfolioDeductibleRepaymentsAmount = req.body.AustralianPortfolioDeductibleRepaymentsAmount,
    UpdatePartnerInvestment.AustralianPortfolioDeductibleFrequency = req.body.AustralianPortfolioDeductibleFrequency,
    UpdatePartnerInvestment.AustralianPortfolioDeductibleAnnualRepayments = req.body.AustralianPortfolioDeductibleAnnualRepayments,
    
    UpdatePartnerInvestment.AustralianPortfolioDeductibleMonthlyContributions = req.body.AustralianPortfolioDeductibleMonthlyContributions,
    UpdatePartnerInvestment.AustralianPortfolioDeductibleTotalAnnualContributions = req.body.AustralianPortfolioDeductibleTotalAnnualContributions


    try{
        const C = await UpdatePartnerInvestment.save();
        res.send(C);
        // return res.json ({message:"data updated successfully",C })
 
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Partner-Australian-Share-Portfolio/:Email/:_id', async(req, res) => {
    const DeletePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeletePartnerInvestment.remove();
        res.send(C);
        // return res.json ({message:"data deleted successfully",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;