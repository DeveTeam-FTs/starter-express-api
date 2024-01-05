const Express = require("express");
const JoinedDetails = require("../../../Models/Investments/Joined/TermDeposit");
const JoinedAssetSchema = require("../../../Schema/Investments/Joined/TermDeposit");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await JoinedDetails.find().sort({ id: 1 });
    try{
        res.send(C);
    //   return res.json ({message:"Data get successfully ",C })

        return 
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Joined-TermDeposit', async(req, res) => {
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


MyRouter.patch('/Update-Joined-TermDeposit/:Email/:_id', async(req, res) => {
    const UpdateJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    // UpdateJoinedInvestment.id = req.body.id,
    UpdateJoinedInvestment.Email=req.body.Email,
    UpdateJoinedInvestment.TermDepositCurrentValue = req.body.TermDepositCurrentValue,
    UpdateJoinedInvestment.TermDepositFinancialInstitution = req.body.TermDepositFinancialInstitution,
    UpdateJoinedInvestment.TermDepositIncomePA = req.body.TermDepositIncomePA,
    UpdateJoinedInvestment.TermDepositIncomePAType = req.body.TermDepositIncomePAType,
    UpdateJoinedInvestment.TermDepositIncomeinDollars = req.body.TermDepositIncomeinDollars,
    UpdateJoinedInvestment.TermDepositRegularSavings = req.body.TermDepositRegularSavings,
    UpdateJoinedInvestment.TermDepositReinvestedIncome = req.body.TermDepositReinvestedIncome
    
    try{
        const C = await UpdateJoinedInvestment.save();
        // res.send(C);
        return res.json ({message:"Data updated successfully ",C })

    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Joined-TermDeposit/:Email/:_id', async(req, res) => {
    const DeleteJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email , _id: req.params._id });
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