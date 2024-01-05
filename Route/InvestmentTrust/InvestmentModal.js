const Express = require("express");
const ClientDetails = require("../../Models/InvestmentTrust/InvestmentModal");
const ClientAssetSchema = require("../../Schema/InvestmentTrust/InvestmentModalSchema");
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

MyRouter.post('/Add-Client-InvestmentPropertiesModal', async(req, res) => {
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


MyRouter.patch('/Update-Client-InvestmentPropertiesModal/:Email', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email });
    
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.TotalPropertyExpenses = req.body.TotalPropertyExpenses,
    UpdateClientInvestment.BodyCorporateFees = req.body.BodyCorporateFees,
    UpdateClientInvestment.CouncilRates = req.body.CouncilRates,
    UpdateClientInvestment.GardeningAndLawnMowing = req.body.GardeningAndLawnMowing,
    UpdateClientInvestment.Insurance = req.body.Insurance,
    UpdateClientInvestment.LandTax = req.body.LandTax,
    UpdateClientInvestment.RepairsAndMaintenance = req.body.RepairsAndMaintenance,
    UpdateClientInvestment.WaterCharges = req.body.WaterCharges,
    UpdateClientInvestment.Other = req.body.Other,
    UpdateClientInvestment.TelephoneAndInternet = req.body.TelephoneAndInternet,
    UpdateClientInvestment.ProfessionalFees = req.body.ProfessionalFees,
    UpdateClientInvestment.AllOther = req.body.AllOther

    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-InvestmentPropertiesModal/:Email', async(req, res) => {
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