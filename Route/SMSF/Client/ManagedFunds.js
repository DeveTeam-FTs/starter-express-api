const Express = require("express");
const MyRouter = Express.Router();

const Client_ManagedFundsDetails = require("../../../Models/SMSF/Client/ManagedFunds");
const Client_ManagedFundsSchema = require("../../../Schema/SMSF/Client/ManagedFunds");

MyRouter.get("/", async(req, res) => {
    const C = await Client_ManagedFundsDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post("/Add-Client-ManagedFunds", async(req, res) => {
    const NewRiskProfile = (req.body);
    const { error } = Client_ManagedFundsSchema(NewRiskProfile);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddRiskProfile = new Client_ManagedFundsDetails(NewRiskProfile);
        AddRiskProfile = await AddRiskProfile.save();
        res.send(AddRiskProfile);
    }
});

MyRouter.patch("/Update-Client-ManagedFunds/:Email/:_id", async(req, res) => {
    const UpdateClient = await Client_ManagedFundsDetails.findOne({ Email: req.params.Email, _id: req.params._id });

    UpdateClient.Email = req.body.Email,
    UpdateClient.PlatformName = req.body.PlatformName,
    UpdateClient.InvestmentName = req.body.InvestmentName,
    UpdateClient.NoOfShares = req.body.NoOfShares,
    UpdateClient.CurrentSharePrice = req.body.CurrentSharePrice,
    UpdateClient.CurrentShareValue = req.body.CurrentShareValue,
    UpdateClient.OriginalInvestment = req.body.OriginalInvestment,
    UpdateClient.PurchaseDate = req.body.PurchaseDate,
    UpdateClient.IncomePA = req.body.IncomePA,
    UpdateClient.IncomePAType = req.body.IncomePAType,
    UpdateClient.TotalIncomePA = req.body.TotalIncomePA,
    UpdateClient.ReinvestIncome = req.body.ReinvestIncome,
    UpdateClient.RegInvestmentsPA = req.body.RegInvestmentsPA

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete-Client-ManagedFunds/:Email/:_id", async(req, res) => {
    const DeleteClient = await Client_ManagedFundsDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteClient.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;