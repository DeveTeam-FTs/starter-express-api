const Express = require("express");
const ClientDetails = require("../../Models/Investments/Client");
const ClientAssetSchema = require("../../Schema/Investments/Client");
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

MyRouter.post('/Add-Client-Investment', async(req, res) => {
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


MyRouter.patch('/Update-Client-Investment/:id', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ id: req.params.id });
    // UpdateClientInvestment.id = req.body.id,
    UpdateClientInvestment.Email = req.body.Email,

    UpdateClientInvestment.BankAccounts = req.body.BankAccounts,
    UpdateClientInvestment.TermDeposits = req.body.TermDeposits,
    UpdateClientInvestment.AustralianShareMarket = req.body.AustralianShareMarket,
    UpdateClientInvestment.AustralianSharePortfolio = req.body.AustralianSharePortfolio,
    UpdateClientInvestment.ManagedFunds = req.body.ManagedFunds,
    UpdateClientInvestment.ManagedFundsPortfolio = req.body.ManagedFundsPortfolio,
    UpdateClientInvestment.InvestmentBonds = req.body.InvestmentBonds,
    UpdateClientInvestment.InvestmentProperties = req.body.InvestmentProperties,
    UpdateClientInvestment.Others = req.body.Others

    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-Investment/:id', async(req, res) => {
    const DeleteClientInvestment = await ClientDetails.findOne({ id: req.params.id });
    try{
        const C = await DeleteClientInvestment.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;