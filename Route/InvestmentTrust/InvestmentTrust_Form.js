const Express = require("express");
const ClientDetails = require("../../Models/InvestmentTrust/InvestmentTrust_Form");
const ClientAssetSchema = require("../../Schema/InvestmentTrust/InvestmentTrust_Form");
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

MyRouter.post('/Add-Client-InvestmentForm', async(req, res) => {
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


MyRouter.patch('/Update-Client-InvestmentForm/:Email', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email });
    
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.FamilyTrustName = req.body.FamilyTrustName,
    UpdateClientInvestment.TrustType = req.body.TrustType,
    UpdateClientInvestment.ABN = req.body.ABN,
    UpdateClientInvestment.CashDistribution = req.body.CashDistribution,
    UpdateClientInvestment.EstablishmentDate = req.body.EstablishmentDate,
    UpdateClientInvestment.AccountantName = req.body.AccountantName,
    UpdateClientInvestment.TrusteeType = req.body.TrusteeType,
    UpdateClientInvestment.TotalDirectors = req.body.TotalDirectors,
    UpdateClientInvestment.Director1Name = req.body.Director1Name,
    UpdateClientInvestment.Director2Name = req.body.Director2Name,
    UpdateClientInvestment.Director3Name = req.body.Director3Name,
    UpdateClientInvestment.Director4Name = req.body.Director4Name,
    UpdateClientInvestment.AustralianSharePortfolio = req.body.AustralianSharePortfolio,
    UpdateClientInvestment.ManagedFunds = req.body.ManagedFunds


    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-InvestmentForm/:Email', async(req, res) => {
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