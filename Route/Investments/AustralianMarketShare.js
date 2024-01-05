const Express = require("express");
const ClientDetails = require("../../Models/Investments/AustralianMarketShare");
const ClientAssetSchema = require("../../Schema/Investments/AustralianMarketShare");
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

MyRouter.post('/Add-Client-Australian-Market-Share', async(req, res) => {
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


MyRouter.patch('/Update-Client-Australian-Market-Share/:Email/:_id', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    // UpdateClientInvestment.id = req.body.id,
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.AustralianMarketInvestmentName = req.body.AustralianMarketInvestmentName,
    UpdateClientInvestment.AustralianMarketNumberOfShares = req.body.AustralianMarketNumberOfShares,
    UpdateClientInvestment.AustralianMarketSharePrice = req.body.AustralianMarketSharePrice,
    UpdateClientInvestment.AustralianShareMarket = req.body.AustralianShareMarket,
    UpdateClientInvestment.AustralianMarketTotalShareValue = req.body.AustralianMarketTotalShareValue,
    UpdateClientInvestment.AustralianMarketCostBase = req.body.AustralianMarketCostBase,
    UpdateClientInvestment.AustralianMarketPurchaseDate = req.body.AustralianMarketPurchaseDate,
    UpdateClientInvestment.AustralianMarketIncomePA = req.body.AustralianMarketIncomePA,
    UpdateClientInvestment.AustralianMarketIncomePAType = req.body.AustralianMarketIncomePAType,
    UpdateClientInvestment.AustralianMarketTotalIncomePA = req.body.AustralianMarketTotalIncomePA,
    UpdateClientInvestment.AustralianMarketFrankedAmount = req.body.AustralianMarketFrankedAmount,
    UpdateClientInvestment.AustralianMarketReinvestedIncome = req.body.AustralianMarketReinvestedIncome,
    UpdateClientInvestment.AustralianMarketRegInvestments = req.body.AustralianMarketRegInvestments

    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-Australian-Market-Share/:Email/:_id', async(req, res) => {
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