const Express = require("express");
const JoinedDetails = require("../../../Models/Investments/Joined/InvestmentBonds");
const JoinedAssetSchema = require("../../../Schema/Investments/Joined/InvestmentBonds");
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

MyRouter.post('/Add-Joined-Investment-Bonds', async(req, res) => {
    const NewJoinedInvestment = (req.body);
    const { error } = JoinedAssetSchema(NewJoinedInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddJoinedInvestment = new JoinedDetails(NewJoinedInvestment);
        AddJoinedInvestment = await AddJoinedInvestment.save();
        // res.send(AddJoinedInvestment);
        return res.json ({message:"Data send successfully ",AddJoinedInvestment })

    }
});


MyRouter.patch('/Update-Joined-Investment-Bonds/:Email/:_id', async(req, res) => {
    const UpdateJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdateJoinedInvestment.Email = req.body.Email,
    UpdateJoinedInvestment.InvestmentBondsPlatformName = req.body.InvestmentBondsPlatformName,
    UpdateJoinedInvestment.InvestmentBondsInvestmentName = req.body.InvestmentBondsInvestmentName,
    UpdateJoinedInvestment.InvestmentBondsNumberOfShares = req.body.InvestmentBondsNumberOfShares,
    UpdateJoinedInvestment.InvestmentBondsSharePrice = req.body.InvestmentBondsSharePrice,
    UpdateJoinedInvestment.InvestmentBondsCurrentValue = req.body.InvestmentBondsCurrentValue,
    UpdateJoinedInvestment.InvestmentBondsOriginalInvestment = req.body.InvestmentBondsOriginalInvestment,
    UpdateJoinedInvestment.InvestmentBondsPurchaseDate = req.body.InvestmentBondsPurchaseDate,
    UpdateJoinedInvestment.InvestmentBondsIncomePA = req.body.InvestmentBondsIncomePA,
    UpdateJoinedInvestment.InvestmentBondsIncomePAType = req.body.InvestmentBondsIncomePAType,
    UpdateJoinedInvestment.InvestmentBondsTotalIncomePA = req.body.InvestmentBondsTotalIncomePA,
    UpdateJoinedInvestment.InvestmentBondsReinvestedIncome = req.body.InvestmentBondsReinvestedIncome,
    UpdateJoinedInvestment.InvestmentBondsRegInvestments = req.body.InvestmentBondsRegInvestments

    try{
        const C = await UpdateJoinedInvestment.save();
        // res.send(C);
        return res.json ({message:"Data updated successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Joined-Investment-Bonds/:Email/:_id', async(req, res) => {
    const DeleteJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteJoinedInvestment.remove();
        // res.send(C);
        return res.json ({message:"Data deleted successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;