const Express = require("express");
const JoinedDetails = require("../../../Models/Investments/Joined/BankAccounts");
const JoinedAssetSchema = require("../../../Schema/Investments/Joined/BankAccounts");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await JoinedDetails.find().sort({ id: 1 });
    try{
        res.send(C);
        // return res.json ({message:"data get successfully",C })
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add', async(req, res) => {
    const NewJoinedInvestment = (req.body);
    const { error } = JoinedAssetSchema(NewJoinedInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddJoinedInvestment = new JoinedDetails(NewJoinedInvestment);
        AddJoinedInvestment = await AddJoinedInvestment.save();
        // res.send(AddJoinedInvestment);
        return res.json ({message:"data send successfully ",AddJoinedInvestment })

    }
});


MyRouter.patch('/Update/:Email/:_id', async(req, res) => {
    const UpdateJoinedInvestment = await JoinedDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    // UpdateJoinedInvestment.id = req.body.id,
    UpdateJoinedInvestment.Email = req.body.Email,
    UpdateJoinedInvestment.BankCurrentValue = req.body.BankCurrentValue,
    UpdateJoinedInvestment.BankFinancialInstitution = req.body.BankFinancialInstitution,
    UpdateJoinedInvestment.BankIncomePA = req.body.BankIncomePA,
    UpdateJoinedInvestment.BankIncomePAType = req.body.BankIncomePAType,
    UpdateJoinedInvestment.BankIncomeinDollars = req.body.BankIncomeinDollars,
    UpdateJoinedInvestment.BankRegularSavings = req.body.BankRegularSavings,
    UpdateJoinedInvestment.BankReinvestedIncome = req.body.BankReinvestedIncome
    
    
    try{
        const C = await UpdateJoinedInvestment.save();
        // res.send(C);
        return res.json ({message:"data updated successfully" })
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete/:Email/:_id', async(req, res) => {
    const DeleteJoinedInvestment = await JoinedDetails.findOne({Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteJoinedInvestment.remove();
        // res.send(C);
        return res.json ({message:"data deleted successfully",C })
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;