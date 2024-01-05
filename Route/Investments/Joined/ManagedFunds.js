const Express = require("express");
const JoinedDetails = require("../../../Models/Investments/Joined/ManagedFunds");
const JoinedAssetSchema = require("../../../Schema/Investments/Joined/ManagedFunds");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await JoinedDetails.find().sort({ id: 1 });
    try{
        res.send(C);
        // return res.json ({message:"Data get successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);

    }
});

MyRouter.post('/Add-Joined-ManagedFunds', async(req, res) => {
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


MyRouter.patch('/Update-Joined-ManagedFunds/:Email/:_id', async(req, res) => {
    const UpdateJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    // UpdateJoinedInvestment.id = req.body.id,
    UpdateJoinedInvestment.Email = req.body.Email,
    UpdateJoinedInvestment.ManagedFundsPlatformName = req.body.ManagedFundsPlatformName,
    UpdateJoinedInvestment.ManagedFundsInvestmentName = req.body.ManagedFundsInvestmentName,
    UpdateJoinedInvestment.ManagedFundsNumberOfShares = req.body.ManagedFundsNumberOfShares,
    UpdateJoinedInvestment.ManagedFundsSharePrice = req.body.ManagedFundsSharePrice,
    UpdateJoinedInvestment.ManagedFundsCurrentValue = req.body.ManagedFundsCurrentValue,
    UpdateJoinedInvestment.ManagedFundsOriginalInvestment = req.body.ManagedFundsOriginalInvestment,
    UpdateJoinedInvestment.ManagedFundsPurchaseDate = req.body.ManagedFundsPurchaseDate,
    UpdateJoinedInvestment.ManagedFundsIncomePA = req.body.ManagedFundsIncomePA,
    UpdateJoinedInvestment.ManagedFundsIncomePAType = req.body.ManagedFundsIncomePAType,
    UpdateJoinedInvestment.ManagedFundsTotalIncomePA = req.body.ManagedFundsTotalIncomePA,
    UpdateJoinedInvestment.ManagedFundsReinvestedIncome = req.body.ManagedFundsReinvestedIncome,
    UpdateJoinedInvestment.ManagedFundsRegInvestments = req.body.ManagedFundsRegInvestments

    try{
        const C = await UpdateJoinedInvestment.save();
        // res.send(C);
        return res.json ({message:"Data updated successfully ", C})

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Joined-ManagedFunds/:Email/:_id', async(req, res) => {
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