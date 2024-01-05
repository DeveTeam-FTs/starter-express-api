const Express = require("express");
const PartnerDetails = require("../../../Models/Investments/Partner/InvestmentBonds");
const PartnerAssetSchema = require("../../../Schema/Investments/Partner/InvestmentBonds");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find().sort({ id: 1 });
    try{
        res.send(C);
        // return res.json ({message:"Data get successfully ",C })
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-Investment-Bonds', async(req, res) => {
    const NewPartnerInvestment = (req.body);
    const { error } = PartnerAssetSchema(NewPartnerInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartnerInvestment = new PartnerDetails(NewPartnerInvestment);
        AddPartnerInvestment = await AddPartnerInvestment.save();
        // res.send(AddPartnerInvestment);
        return res.json ({message:"Data send successfully ",AddPartnerInvestment })

    }
});


MyRouter.patch('/Update-Partner-Investment-Bonds/:Email/:_id', async(req, res) => {
    const UpdatePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdatePartnerInvestment.Email = req.body.Email,
    UpdatePartnerInvestment.InvestmentBondsPlatformName = req.body.InvestmentBondsPlatformName,
    UpdatePartnerInvestment.InvestmentBondsInvestmentName = req.body.InvestmentBondsInvestmentName,
    UpdatePartnerInvestment.InvestmentBondsNumberOfShares = req.body.InvestmentBondsNumberOfShares,
    UpdatePartnerInvestment.InvestmentBondsSharePrice = req.body.InvestmentBondsSharePrice,
    UpdatePartnerInvestment.InvestmentBondsCurrentValue = req.body.InvestmentBondsCurrentValue,
    UpdatePartnerInvestment.InvestmentBondsOriginalInvestment = req.body.InvestmentBondsOriginalInvestment,
    UpdatePartnerInvestment.InvestmentBondsPurchaseDate = req.body.InvestmentBondsPurchaseDate,
    UpdatePartnerInvestment.InvestmentBondsIncomePA = req.body.InvestmentBondsIncomePA,
    UpdatePartnerInvestment.InvestmentBondsIncomePAType = req.body.InvestmentBondsIncomePAType,
    UpdatePartnerInvestment.InvestmentBondsTotalIncomePA = req.body.InvestmentBondsTotalIncomePA,
    UpdatePartnerInvestment.InvestmentBondsReinvestedIncome = req.body.InvestmentBondsReinvestedIncome,
    UpdatePartnerInvestment.InvestmentBondsRegInvestments = req.body.InvestmentBondsRegInvestments

    try{
        const C = await UpdatePartnerInvestment.save();
        // res.send(C);
        return res.json ({message:"Data updated successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Partner-Investment-Bonds/:Email/:_id', async(req, res) => {
    const DeletePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeletePartnerInvestment.remove();
        // res.send(C);
        return res.json ({message:"Data deleted successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;