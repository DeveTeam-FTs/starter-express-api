const Express = require("express");
const PartnerDetails = require("../../../Models/Investments/Partner/ManagedFunds");
const PartnerAssetSchema = require("../../../Schema/Investments/Partner/ManagedFunds");
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

MyRouter.post('/Add-Partner-ManagedFunds', async(req, res) => {
    const NewPartnerInvestment = (req.body);
    const { error } = PartnerAssetSchema(NewPartnerInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartnerInvestment = new PartnerDetails(NewPartnerInvestment);
        AddPartnerInvestment = await AddPartnerInvestment.save();
        // res.send(AddPartnerInvestment);
        return res.json ({message:"Data post successfully ", AddPartnerInvestment})

    }
});


MyRouter.patch('/Update-Partner-ManagedFunds/:Email/:_id', async(req, res) => {
    const UpdatePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    // UpdatePartnerInvestment.id = req.body.id,
    UpdatePartnerInvestment.Email = req.body.Email,
    UpdatePartnerInvestment.ManagedFundsPlatformName = req.body.ManagedFundsPlatformName,
    UpdatePartnerInvestment.ManagedFundsInvestmentName = req.body.ManagedFundsInvestmentName,
    UpdatePartnerInvestment.ManagedFundsNumberOfShares = req.body.ManagedFundsNumberOfShares,
    UpdatePartnerInvestment.ManagedFundsSharePrice = req.body.ManagedFundsSharePrice,
    UpdatePartnerInvestment.ManagedFundsCurrentValue = req.body.ManagedFundsCurrentValue,
    UpdatePartnerInvestment.ManagedFundsOriginalInvestment = req.body.ManagedFundsOriginalInvestment,
    UpdatePartnerInvestment.ManagedFundsPurchaseDate = req.body.ManagedFundsPurchaseDate,
    UpdatePartnerInvestment.ManagedFundsIncomePA = req.body.ManagedFundsIncomePA,
    UpdatePartnerInvestment.ManagedFundsIncomePAType = req.body.ManagedFundsIncomePAType,
    UpdatePartnerInvestment.ManagedFundsTotalIncomePA = req.body.ManagedFundsTotalIncomePA,
    UpdatePartnerInvestment.ManagedFundsReinvestedIncome = req.body.ManagedFundsReinvestedIncome,
    UpdatePartnerInvestment.ManagedFundsRegInvestments = req.body.ManagedFundsRegInvestments

    try{
        const C = await UpdatePartnerInvestment.save();
        // res.send(C);
        return res.json ({message:"Data updated successfully ", C})

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Partner-ManagedFunds/:Email/:_id', async(req, res) => {
    const DeletePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeletePartnerInvestment.remove();
        // res.send(C);
        return res.json ({message:"Data deleted successfully ", C})

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;