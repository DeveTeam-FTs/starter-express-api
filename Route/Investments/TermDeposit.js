const Express = require("express");
const ClientDetails = require("../../Models/Investments/TermDeposit");
const ClientAssetSchema = require("../../Schema/Investments/TermDeposit");
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

MyRouter.post('/Add', async(req, res) => {
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


MyRouter.patch('/Update/:Email/:_id', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    // UpdateClientInvestment.id = req.body.id,
    UpdateClientInvestment.Email=req.body.Email,
    UpdateClientInvestment.TermDepositCurrentValue = req.body.TermDepositCurrentValue,
    UpdateClientInvestment.TermDepositFinancialInstitution = req.body.TermDepositFinancialInstitution,
    UpdateClientInvestment.TermDepositIncomePA = req.body.TermDepositIncomePA,
    UpdateClientInvestment.TermDepositIncomePAType = req.body.TermDepositIncomePAType,
    UpdateClientInvestment.TermDepositIncomeinDollars = req.body.TermDepositIncomeinDollars,
    UpdateClientInvestment.TermDepositRegularSavings = req.body.TermDepositRegularSavings,
    UpdateClientInvestment.TermDepositReinvestedIncome = req.body.TermDepositReinvestedIncome
    
    
    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete/:Email/:_id', async(req, res) => {
    const DeleteClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id  });
    try{
        const C = await DeleteClientInvestment.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;