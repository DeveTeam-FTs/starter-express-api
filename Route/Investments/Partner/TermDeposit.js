const Express = require("express");
const PartnerDetails = require("../../../Models/Investments/Partner/TermDeposit");
const PartnerAssetSchema = require("../../../Schema/Investments/Partner/TermDeposit");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find().sort({ id: 1 });
    try{
        res.send(C);
    //   return res.json ({message:"Data get successfully ",C })

        return 
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-TermDeposit', async(req, res) => {
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


MyRouter.patch('/Update-Partner-TermDeposit/:Email/:_id', async(req, res) => {
    const UpdatePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    // UpdatePartnerInvestment.id = req.body.id,
    UpdatePartnerInvestment.Email=req.body.Email,
    UpdatePartnerInvestment.TermDepositCurrentValue = req.body.TermDepositCurrentValue,
    UpdatePartnerInvestment.TermDepositFinancialInstitution = req.body.TermDepositFinancialInstitution,
    UpdatePartnerInvestment.TermDepositIncomePA = req.body.TermDepositIncomePA,
    UpdatePartnerInvestment.TermDepositIncomePAType = req.body.TermDepositIncomePAType,
    UpdatePartnerInvestment.TermDepositIncomeinDollars = req.body.TermDepositIncomeinDollars,
    UpdatePartnerInvestment.TermDepositRegularSavings = req.body.TermDepositRegularSavings,
    UpdatePartnerInvestment.TermDepositReinvestedIncome = req.body.TermDepositReinvestedIncome
   
    
    try{
        const C = await UpdatePartnerInvestment.save();
        // res.send(C);
        return res.json ({message:"Data updated successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Partner-TermDeposit/:Email/:_id', async(req, res) => {
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