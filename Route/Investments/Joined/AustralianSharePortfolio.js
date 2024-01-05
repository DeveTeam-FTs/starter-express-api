const Express = require("express");
const JoinedDetails = require("../../../Models/Investments/Joined/AustralianSharePortfolio");
const JoinedAssetSchema = require("../../../Schema/Investments/Joined/AustralianSharePortfolio");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await JoinedDetails.find().sort({ id: 1 });
    try{
        res.send(C);
        // return res.json ({message:"data get successfully",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Joined-Australian-Share-Portfolio', async(req, res) => {
    const NewJoinedInvestment = (req.body);
    const { error } = JoinedAssetSchema(NewJoinedInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddJoinedInvestment = new JoinedDetails(NewJoinedInvestment);
        AddJoinedInvestment = await AddJoinedInvestment.save();
        // res.send(AddJoinedInvestment);
        return res.json ({message:"data post successfully",AddJoinedInvestment })

    }
});


MyRouter.patch('/Update-Joined-Australian-Share-Portfolio/:Email/:_id', async(req, res) => {
    const UpdateJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdateJoinedInvestment.Email = req.body.Email, 
    UpdateJoinedInvestment.AustralianPortfolioLoanType = req.body.AustralianPortfolioLoanType,
    UpdateJoinedInvestment.AustralianPortfolioCurrentBalance = req.body.AustralianPortfolioCurrentBalance,
    UpdateJoinedInvestment.AustralianPortfolioLender = req.body.AustralianPortfolioLender,
    UpdateJoinedInvestment.AustralianShareMarket = req.body.AustralianShareMarket,
    UpdateJoinedInvestment.AustralianInterestRatePA = req.body.AustralianInterestRatePA,
    UpdateJoinedInvestment.AustralianPortfolioLoanTerm = req.body.AustralianPortfolioLoanTerm,
    UpdateJoinedInvestment.AustralianPortfolioLoanType2 = req.body.AustralianPortfolioLoanType2,
    UpdateJoinedInvestment.AustralianPortfolioDeductibleLoanAmount = req.body.AustralianPortfolioDeductibleLoanAmount,
    UpdateJoinedInvestment.AustralianPortfolioYearRemaining = req.body.AustralianPortfolioYearRemaining,
    
    UpdateJoinedInvestment.AustralianPortfolioDeductibleRepaymentsAmount = req.body.AustralianPortfolioDeductibleRepaymentsAmount,
    UpdateJoinedInvestment.AustralianPortfolioDeductibleFrequency = req.body.AustralianPortfolioDeductibleFrequency,
    UpdateJoinedInvestment.AustralianPortfolioDeductibleAnnualRepayments = req.body.AustralianPortfolioDeductibleAnnualRepayments,
    
    UpdateJoinedInvestment.AustralianPortfolioDeductibleMonthlyContributions = req.body.AustralianPortfolioDeductibleMonthlyContributions,
    UpdateJoinedInvestment.AustralianPortfolioDeductibleTotalAnnualContributions = req.body.AustralianPortfolioDeductibleTotalAnnualContributions


    try{
        const C = await UpdateJoinedInvestment.save();
        // res.send(C);
        return res.json ({message:"data updated successfully",C })
 
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Joined-Australian-Share-Portfolio/:Email/:_id', async(req, res) => {
    const DeleteJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteJoinedInvestment.remove();
        // res.send(C);
        return res.json ({message:"data deleted successfully",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;