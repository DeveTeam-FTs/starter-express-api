const Express = require("express");
const PartnerDetails = require("../../../Models/Investments/Partner/BankAccounts");
const PartnerAssetSchema = require("../../../Schema/Investments/Partner/BankAccounts");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find().sort({ id: 1 });
    try{
        res.send(C);
        // return res.json ({message:"data get successfully",C })
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add', async(req, res) => {
    const NewPartnerInvestment = (req.body);
    const { error } = PartnerAssetSchema(NewPartnerInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartnerInvestment = new PartnerDetails(NewPartnerInvestment);
        AddPartnerInvestment = await AddPartnerInvestment.save();
        res.send(AddPartnerInvestment);
        // return res.json ({message:"data send successfully ",AddPartnerInvestment })

    }
});


MyRouter.patch('/Update/:Email/:_id', async(req, res) => {
    const UpdatePartnerInvestment = await PartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    // UpdatePartnerInvestment.id = req.body.id,
    UpdatePartnerInvestment.Email = req.body.Email,
    UpdatePartnerInvestment.BankCurrentValue = req.body.BankCurrentValue,
    UpdatePartnerInvestment.BankFinancialInstitution = req.body.BankFinancialInstitution,
    UpdatePartnerInvestment.BankIncomePA = req.body.BankIncomePA,
    UpdatePartnerInvestment.BankIncomePAType = req.body.BankIncomePAType,
    UpdatePartnerInvestment.BankIncomeinDollars = req.body.BankIncomeinDollars,
    UpdatePartnerInvestment.BankRegularSavings = req.body.BankRegularSavings,
    UpdatePartnerInvestment.BankReinvestedIncome = req.body.BankReinvestedIncome
   
    
    try{
        const C = await UpdatePartnerInvestment.save();
        res.send(C);
        // return res.json ({message:"data updated successfully" })
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete/:Email/:_id', async(req, res) => {
    const DeletePartnerInvestment = await PartnerDetails.findOne({Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeletePartnerInvestment.remove();
        res.send(C);
        // return res.json ({message:"data deleted successfully",C })
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;