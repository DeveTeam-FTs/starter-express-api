const Express = require("express");
const JoinedDetails = require("../../../Models/Investments/Joined/Others");
const JoinedAssetSchema = require("../../../Schema/Investments/Joined/Others");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await JoinedDetails.find().sort({ id: 1 });
    try{
        res.send(C);
    //   return res.json ({message:"Data get successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Joined-Others', async(req, res) => {
    const NewJoinedInvestment = (req.body);
    const { error } = JoinedAssetSchema(NewJoinedInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddJoinedInvestment = new JoinedDetails(NewJoinedInvestment);
        AddJoinedInvestment = await AddJoinedInvestment.save();
        // res.send(AddJoinedInvestment);
      return res.json ({message:"Data post successfully ", AddJoinedInvestment })

    }
});


MyRouter.patch('/Update-Joined-Others/:Email', async(req, res) => {
    const UpdateJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email });
    // UpdateJoinedInvestment.id = req.body.id,
    UpdateJoinedInvestment.Email = req.body.Email,
    UpdateJoinedInvestment.OtherInvestmentName = req.body.OtherInvestmentName,
    UpdateJoinedInvestment.OtherCurrentValue = req.body.OtherCurrentValue,
    UpdateJoinedInvestment.OtherCostBase = req.body.OtherCostBase,
    UpdateJoinedInvestment.OtherPurchaseDate = req.body.OtherPurchaseDate,
    UpdateJoinedInvestment.OtherIncomePA = req.body.OtherIncomePA,
    UpdateJoinedInvestment.OtherIncomePAType = req.body.OtherIncomePAType,
    UpdateJoinedInvestment.OtherTotalIncomePA = req.body.OtherTotalIncomePA,
    UpdateJoinedInvestment.OtherReinvestedIncome = req.body.OtherReinvestedIncome,
    UpdateJoinedInvestment.OtherRegularInvestmentsPA = req.body.OtherRegularInvestmentsPA,

    UpdateJoinedInvestment.OtherInvestmentName2 = req.body.OtherInvestmentName2,
    UpdateJoinedInvestment.OtherCurrentValue2 = req.body.OtherCurrentValue2,
    UpdateJoinedInvestment.OtherCostBase2 = req.body.OtherCostBase2,
    UpdateJoinedInvestment.OtherPurchaseDate2 = req.body.OtherPurchaseDate2,
    UpdateJoinedInvestment.OtherIncomePA2 = req.body.OtherIncomePA2,
    UpdateJoinedInvestment.OtherIncomePAType2 = req.body.OtherIncomePAType2,
    UpdateJoinedInvestment.OtherTotalIncomePA2 = req.body.OtherTotalIncomePA2,
    UpdateJoinedInvestment.OtherReinvestedIncome2 = req.body.OtherReinvestedIncome2,
    UpdateJoinedInvestment.OtherRegularInvestmentsPA2 = req.body.OtherRegularInvestmentsPA2    

    try{
        const C = await UpdateJoinedInvestment.save();
        // res.send(C);
        return res.json ({message:"Data updated successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);

    }
});


MyRouter.delete('/Delete-Joined-Others/:Email', async(req, res) => {
    const DeleteJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email });
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