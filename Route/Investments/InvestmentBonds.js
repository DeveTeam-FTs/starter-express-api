const Express = require("express");
const ClientDetails = require("../../Models/Investments/InvestmentBonds");
const ClientAssetSchema = require("../../Schema/Investments/InvestmentBonds");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find().sort({ id: 1 });
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-Investment-Bonds', async(req, res) => {
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


MyRouter.patch('/Update-Client-Investment-Bonds/:Email/:_id', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.InvestmentBondsPlatformName = req.body.InvestmentBondsPlatformName,
    UpdateClientInvestment.InvestmentBondsInvestmentName = req.body.InvestmentBondsInvestmentName,
    UpdateClientInvestment.InvestmentBondsNumberOfShares = req.body.InvestmentBondsNumberOfShares,
    UpdateClientInvestment.InvestmentBondsSharePrice = req.body.InvestmentBondsSharePrice,
    UpdateClientInvestment.InvestmentBondsCurrentValue = req.body.InvestmentBondsCurrentValue,
    UpdateClientInvestment.InvestmentBondsOriginalInvestment = req.body.InvestmentBondsOriginalInvestment,
    UpdateClientInvestment.InvestmentBondsPurchaseDate = req.body.InvestmentBondsPurchaseDate,
    UpdateClientInvestment.InvestmentBondsIncomePA = req.body.InvestmentBondsIncomePA,
    UpdateClientInvestment.InvestmentBondsIncomePAType = req.body.InvestmentBondsIncomePAType,
    UpdateClientInvestment.InvestmentBondsTotalIncomePA = req.body.InvestmentBondsTotalIncomePA,
    UpdateClientInvestment.InvestmentBondsReinvestedIncome = req.body.InvestmentBondsReinvestedIncome,
    UpdateClientInvestment.InvestmentBondsRegInvestments = req.body.InvestmentBondsRegInvestments

    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-Investment-Bonds/:Email/:_id', async(req, res) => {
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