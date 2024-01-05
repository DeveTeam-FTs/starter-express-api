const Express = require("express");
const MyRouter = Express.Router();

const Client_AustralianShareMarketDetails = require("../../../Models/SMSF/Client/AustralianShareMarket");
const Client_AustralianShareMarketSchema = require("../../../Schema/SMSF/Client/AustralianShareMarket");

MyRouter.get("/", async(req, res) => {
    const C = await Client_AustralianShareMarketDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post("/Add-Client-AustralianShareMarket", async(req, res) => {
    const NewRiskProfile = (req.body);
    const { error } = Client_AustralianShareMarketSchema(NewRiskProfile);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddRiskProfile = new Client_AustralianShareMarketDetails(NewRiskProfile);
        AddRiskProfile = await AddRiskProfile.save();
        res.send(AddRiskProfile);
    }
});

MyRouter.patch("/Update-Client-AustralianShareMarket/:Email", async(req, res) => {
    const UpdateClient = await Client_AustralianShareMarketDetails.findOne({ Email: req.params.Email});

    UpdateClient.Email = req.body.Email,
    UpdateClient.InvestmentName = req.body.InvestmentName,
    UpdateClient.NoOfShares = req.body.NoOfShares,
    UpdateClient.CurrentSharePrice = req.body.CurrentSharePrice,
    UpdateClient.TotalShareValue = req.body.TotalShareValue,
    UpdateClient.CostBase = req.body.CostBase,
    UpdateClient.PurchaseDate = req.body.PurchaseDate,
    UpdateClient.IncomePA = req.body.IncomePA,
    UpdateClient.IncomePAType = req.body.IncomePAType,
    UpdateClient.TotalIncomePA = req.body.TotalIncomePA,
    UpdateClient.ReinvestIncome = req.body.ReinvestIncome,
    UpdateClient.FrankedAmount = req.body.FrankedAmount,
    UpdateClient.RegInvestmentsPA = req.body.RegInvestmentsPA

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete-Client-AustralianShareMarket/:Email", async(req, res) => {
    const DeleteClient = await Client_AustralianShareMarketDetails.findOne({ Email: req.params.Email});
    try{
        const C = await DeleteClient.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;