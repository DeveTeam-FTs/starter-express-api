const Express = require("express");
const PartnerDetails = require("../../../Models/Investments/Partner/Others");
const PartnerAssetSchema = require("../../../Schema/Investments/Partner/Others");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find().sort({ id: 1 });
    try{
        res.send(C);
    //   return res.json ({message:"Data get successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-Others', async(req, res) => {
    const NewPartnerInvestment = (req.body);
    const { error } = PartnerAssetSchema(NewPartnerInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartnerInvestment = new PartnerDetails(NewPartnerInvestment);
        AddPartnerInvestment = await AddPartnerInvestment.save();
        // res.send(AddPartnerInvestment);
      return res.json ({message:"Data post successfully ", AddPartnerInvestment })

    }
});


MyRouter.patch('/Update-Partner-Others/:Email', async(req, res) => {
    const UpdatePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email });
    // UpdatePartnerInvestment.id = req.body.id,
    UpdatePartnerInvestment.Email = req.body.Email,
    UpdatePartnerInvestment.OtherInvestmentName = req.body.OtherInvestmentName,
    UpdatePartnerInvestment.OtherCurrentValue = req.body.OtherCurrentValue,
    UpdatePartnerInvestment.OtherCostBase = req.body.OtherCostBase,
    UpdatePartnerInvestment.OtherPurchaseDate = req.body.OtherPurchaseDate,
    UpdatePartnerInvestment.OtherIncomePA = req.body.OtherIncomePA,
    UpdatePartnerInvestment.OtherIncomePAType = req.body.OtherIncomePAType,
    UpdatePartnerInvestment.OtherTotalIncomePA = req.body.OtherTotalIncomePA,
    UpdatePartnerInvestment.OtherReinvestedIncome = req.body.OtherReinvestedIncome,
    UpdatePartnerInvestment.OtherRegularInvestmentsPA = req.body.OtherRegularInvestmentsPA,

    UpdatePartnerInvestment.OtherInvestmentName2 = req.body.OtherInvestmentName2,
    UpdatePartnerInvestment.OtherCurrentValue2 = req.body.OtherCurrentValue2,
    UpdatePartnerInvestment.OtherCostBase2 = req.body.OtherCostBase2,
    UpdatePartnerInvestment.OtherPurchaseDate2 = req.body.OtherPurchaseDate2,
    UpdatePartnerInvestment.OtherIncomePA2 = req.body.OtherIncomePA2,
    UpdatePartnerInvestment.OtherIncomePAType2 = req.body.OtherIncomePAType2,
    UpdatePartnerInvestment.OtherTotalIncomePA2 = req.body.OtherTotalIncomePA2,
    UpdatePartnerInvestment.OtherReinvestedIncome2 = req.body.OtherReinvestedIncome2,
    UpdatePartnerInvestment.OtherRegularInvestmentsPA2 = req.body.OtherRegularInvestmentsPA2    

    try{
        const C = await UpdatePartnerInvestment.save();
        // res.send(C);
        return res.json ({message:"Data updated successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);

    }
});


MyRouter.delete('/Delete-Partner-Others/:Email', async(req, res) => {
    const DeletePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email });
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