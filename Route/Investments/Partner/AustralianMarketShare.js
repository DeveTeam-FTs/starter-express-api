const Express = require("express");
const PartnerDetails = require("../../../Models/Investments/Partner/AustralianMarketShare");
const PartnerAssetSchema = require("../../../Schema/Investments/Partner/AustralianMarketShare");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
        // return res.json ({message:"data get successfully",C })
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-Australian-Market-Share', async(req, res) => {
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


MyRouter.patch('/Update-Partner-Australian-Market-Share/:Email/:_id', async(req, res) => {
    const UpdatePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    // UpdatePartnerInvestment.id = req.body.id,
    UpdatePartnerInvestment.Email = req.body.Email,
    UpdatePartnerInvestment.AustralianMarketInvestmentName = req.body.AustralianMarketInvestmentName,
    UpdatePartnerInvestment.AustralianMarketNumberOfShares = req.body.AustralianMarketNumberOfShares,
    UpdatePartnerInvestment.AustralianMarketSharePrice = req.body.AustralianMarketSharePrice,
    UpdatePartnerInvestment.AustralianShareMarket = req.body.AustralianShareMarket,
    UpdatePartnerInvestment.AustralianMarketTotalShareValue = req.body.AustralianMarketTotalShareValue,
    UpdatePartnerInvestment.AustralianMarketCostBase = req.body.AustralianMarketCostBase,
    UpdatePartnerInvestment.AustralianMarketPurchaseDate = req.body.AustralianMarketPurchaseDate,
    UpdatePartnerInvestment.AustralianMarketIncomePA = req.body.AustralianMarketIncomePA,
    UpdatePartnerInvestment.AustralianMarketIncomePAType = req.body.AustralianMarketIncomePAType,
    UpdatePartnerInvestment.AustralianMarketTotalIncomePA = req.body.AustralianMarketTotalIncomePA,
    UpdatePartnerInvestment.AustralianMarketFrankedAmount = req.body.AustralianMarketFrankedAmount,
    UpdatePartnerInvestment.AustralianMarketReinvestedIncome = req.body.AustralianMarketReinvestedIncome,
    UpdatePartnerInvestment.AustralianMarketRegInvestments = req.body.AustralianMarketRegInvestments

    try{
        const C = await UpdatePartnerInvestment.save();
        res.send(C);
        // return res.json ({message:"data updated successfully",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Partner-Australian-Market-Share/:Email/:_id', async(req, res) => {
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