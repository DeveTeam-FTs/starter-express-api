const Express = require("express");
const ClientDetails = require("../../Models/Investments/InvestmentProperties_Inner");
const ClientAssetSchema = require("../../Schema/Investments/InvestmentProperties_Inner");
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

MyRouter.post('/Add-Client-Inner-Investment-Properties', async(req, res) => {
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


MyRouter.patch('/Update-Client-Inner-Investment-Properties/:Email/:_id', async(req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    UpdateClientInvestment.Email = req.body.Email,
    UpdateClientInvestment.InvestmentModalTotalExpense = req.body.InvestmentModalTotalExpense,
    UpdateClientInvestment.InvestmentModalCorporateFees = req.body.InvestmentModalCorporateFees,
    UpdateClientInvestment.InvestmentModalCouncilRates = req.body.InvestmentModalCouncilRates,
    UpdateClientInvestment.InvestmentModalLawnMoving = req.body.InvestmentModalLawnMoving,
    UpdateClientInvestment.InvestmentModalInsurance = req.body.InvestmentModalInsurance,
    UpdateClientInvestment.InvestmentModalLandTax = req.body.InvestmentModalLandTax,
    UpdateClientInvestment.InvestmentModalRepairs = req.body.InvestmentModalRepairs,
    UpdateClientInvestment.InvestmentModalWaterCharges = req.body.InvestmentModalWaterCharges,
    UpdateClientInvestment.InvestmentModalOthers = req.body.InvestmentModalOthers,
    UpdateClientInvestment.InvestmentModalTelephone = req.body.InvestmentModalTelephone,
    UpdateClientInvestment.InvestmentModalProfessionalFees = req.body.InvestmentModalProfessionalFees,
    UpdateClientInvestment.InvestmentModalAllOthers = req.body.InvestmentModalAllOthers
        
    try{
        const C = await UpdateClientInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});


MyRouter.delete('/Delete-Client-Inner-Investment-Properties/:Email/:_id', async(req, res) => {
    const DeleteClientInvestment = await ClientDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteClientInvestment.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;