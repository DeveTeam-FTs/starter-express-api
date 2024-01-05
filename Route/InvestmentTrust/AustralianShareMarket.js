const Express = require("express");
const ClientDetails = require("../../Models/InvestmentTrust/AustralianShareMarket");
const ClientAssetSchema = require("../../Schema/InvestmentTrust/AustralianShareMarket");
const MyRouter = Express.Router();

MyRouter.get('/Australian-Market-Share', async(req, res) => {
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
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.InvestmentName = req.body.InvestmentName,
    UpdateClientInvestment.NumberOfShares = req.body.NumberOfShares,
    UpdateClientInvestment.CurrentSharePrice = req.body.CurrentSharePrice,
    UpdateClientInvestment.TotalShareValue = req.body.TotalShareValue,
    UpdateClientInvestment.CostBase = req.body.CostBase,
    UpdateClientInvestment.PurchaseDate = req.body.PurchaseDate,
    UpdateClientInvestment.IncomePA = req.body.IncomePA,
    UpdateClientInvestment.IncomePAType = req.body.IncomePAType,
    UpdateClientInvestment.TotalIncomePA = req.body.TotalIncomePA,
    UpdateClientInvestment.ReinvestIncome = req.body.ReinvestIncome,
    UpdateClientInvestment.FrankedAmount = req.body.FrankedAmount,
    UpdateClientInvestment.RegInvestmentsPA = req.body.RegInvestmentsPA

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