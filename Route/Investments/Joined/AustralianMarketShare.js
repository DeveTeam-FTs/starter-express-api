const Express = require("express");
const JoinedDetails = require("../../../Models/Investments/Joined/AustralianMarketShare");
const JoinedAssetSchema = require("../../../Schema/Investments/Joined/AustralianMarketShare");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await JoinedDetails.find();
    try{
        res.send(C);
        // return res.json ({message:"data get successfully",C })
    }
    catch(Error){
        res.send("Error: " + Error);
        
    }
});

MyRouter.post('/Add-Joined-Australian-Market-Share', async(req, res) => {
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


MyRouter.patch('/Update-Joined-Australian-Market-Share/:Email/:_id', async(req, res) => {
    const UpdateJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    // UpdateJoinedInvestment.id = req.body.id,
    UpdateJoinedInvestment.Email = req.body.Email,
    UpdateJoinedInvestment.AustralianMarketInvestmentName = req.body.AustralianMarketInvestmentName,
    UpdateJoinedInvestment.AustralianMarketNumberOfShares = req.body.AustralianMarketNumberOfShares,
    UpdateJoinedInvestment.AustralianMarketSharePrice = req.body.AustralianMarketSharePrice,
    UpdateJoinedInvestment.AustralianShareMarket = req.body.AustralianShareMarket,
    UpdateJoinedInvestment.AustralianMarketTotalShareValue = req.body.AustralianMarketTotalShareValue,
    UpdateJoinedInvestment.AustralianMarketCostBase = req.body.AustralianMarketCostBase,
    UpdateJoinedInvestment.AustralianMarketPurchaseDate = req.body.AustralianMarketPurchaseDate,
    UpdateJoinedInvestment.AustralianMarketIncomePA = req.body.AustralianMarketIncomePA,
    UpdateJoinedInvestment.AustralianMarketIncomePAType = req.body.AustralianMarketIncomePAType,
    UpdateJoinedInvestment.AustralianMarketTotalIncomePA = req.body.AustralianMarketTotalIncomePA,
    UpdateJoinedInvestment.AustralianMarketFrankedAmount = req.body.AustralianMarketFrankedAmount,
    UpdateJoinedInvestment.AustralianMarketReinvestedIncome = req.body.AustralianMarketReinvestedIncome,
    UpdateJoinedInvestment.AustralianMarketRegInvestments = req.body.AustralianMarketRegInvestments

    try{
        const C = await UpdateJoinedInvestment.save();
        // res.send(C);
        return res.json ({message:"data updated successfully",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Joined-Australian-Market-Share/:Email/:_id', async(req, res) => {
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