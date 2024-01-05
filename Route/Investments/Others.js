const Express = require("express");
const ClientDetails = require("../../Models/Investments/Others");
const ClientAssetSchema = require("../../Schema/Investments/Others");
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

MyRouter.post('/Add-Client-Others', async(req, res) => {
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


MyRouter.patch('/Update-Client-Others/:Email', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email });
    // UpdateClientInvestment.id = req.body.id,
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.OtherInvestmentName = req.body.OtherInvestmentName,
    UpdateClientInvestment.OtherCurrentValue = req.body.OtherCurrentValue,
    UpdateClientInvestment.OtherCostBase = req.body.OtherCostBase,
    UpdateClientInvestment.OtherPurchaseDate = req.body.OtherPurchaseDate,
    UpdateClientInvestment.OtherIncomePA = req.body.OtherIncomePA,
    UpdateClientInvestment.OtherIncomePAType = req.body.OtherIncomePAType,
    UpdateClientInvestment.OtherTotalIncomePA = req.body.OtherTotalIncomePA,
    UpdateClientInvestment.OtherReinvestedIncome = req.body.OtherReinvestedIncome,
    UpdateClientInvestment.OtherRegularInvestmentsPA = req.body.OtherRegularInvestmentsPA,

    UpdateClientInvestment.OtherInvestmentName2 = req.body.OtherInvestmentName2,
    UpdateClientInvestment.OtherCurrentValue2 = req.body.OtherCurrentValue2,
    UpdateClientInvestment.OtherCostBase2 = req.body.OtherCostBase2,
    UpdateClientInvestment.OtherPurchaseDate2 = req.body.OtherPurchaseDate2,
    UpdateClientInvestment.OtherIncomePA2 = req.body.OtherIncomePA2,
    UpdateClientInvestment.OtherIncomePAType2 = req.body.OtherIncomePAType2,
    UpdateClientInvestment.OtherTotalIncomePA2 = req.body.OtherTotalIncomePA2,
    UpdateClientInvestment.OtherReinvestedIncome2 = req.body.OtherReinvestedIncome2,
    UpdateClientInvestment.OtherRegularInvestmentsPA2 = req.body.OtherRegularInvestmentsPA2    

    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-Others/:Email', async(req, res) => {
    const DeleteClientInvestment = await ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteClientInvestment.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;