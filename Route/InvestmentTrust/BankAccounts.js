const Express = require("express");
const ClientDetails = require("../../Models/InvestmentTrust/BankAccounts");
const ClientAssetSchema = require("../../Schema/InvestmentTrust/BankAccounts");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-BankAccounts', async(req, res) => {
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


MyRouter.patch('/Update-Client-BankAccounts/:Email', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email });
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.CurrentValue1 = req.body.CurrentValue1,
    UpdateClientInvestment.FinancialInstitution1 = req.body.FinancialInstitution1,
    UpdateClientInvestment.IncomeYield1 = req.body.IncomeYield1,
    UpdateClientInvestment.AnnualIncome1 = req.body.AnnualIncome1,

    UpdateClientInvestment.CurrentValue2 = req.body.CurrentValue2,
    UpdateClientInvestment.FinancialInstitution2 = req.body.FinancialInstitution2,
    UpdateClientInvestment.IncomeYield2 = req.body.IncomeYield2,
    UpdateClientInvestment.AnnualIncome2 = req.body.AnnualIncome2,

    UpdateClientInvestment.CurrentValue3 = req.body.CurrentValue3,
    UpdateClientInvestment.FinancialInstitution3 = req.body.FinancialInstitution3,
    UpdateClientInvestment.IncomeYield3 = req.body.IncomeYield3,
    UpdateClientInvestment.AnnualIncome3 = req.body.AnnualIncome3

    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-BankAccounts/:Email', async(req, res) => {
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