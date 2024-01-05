const  Express = require("express");
const MyRouter = Express.Router();

const RetirementPartnerDetails = require('../../../Models/Retirements/Partner/Annuities');
const PartnerSchema = require('../../../Schema/Retirements/Partner/Annuities');

MyRouter.get('/', async(req, res) => {
    const C = await RetirementPartnerDetails.find().sort({ Email: 1 });
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-AnnuitiesAccount', async(req, res) => {
    const NewPartnerRetirment = (req.body);
    const { error } = PartnerSchema(NewPartnerRetirment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartner = new RetirementPartnerDetails(NewPartnerRetirment);
        AddPartner = await AddPartner.save();
        res.send(AddPartner);
    }
});

MyRouter.patch('/Update-Partner-AnnuitiesAccount/:Email/:_id', async(req, res) => {
    const UpdatePartnerRetirement = await RetirementPartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdatePartnerRetirement.Email = req.body.Email,
    UpdatePartnerRetirement.Annuities_ProductProvider = req.body.Annuities_ProductProvider,
    UpdatePartnerRetirement.Annuities_InvestmentAmount = req.body.Annuities_InvestmentAmount,
    UpdatePartnerRetirement.Annuities_CurrentValue = req.body.Annuities_CurrentValue,
    UpdatePartnerRetirement.Annuities_AnnuityType = req.body.Annuities_AnnuityType,
    UpdatePartnerRetirement.Annuities_RCV = req.body.Annuities_RCV,
    UpdatePartnerRetirement.Annuities_Term = req.body.Annuities_Term,
    UpdatePartnerRetirement.Annuities_YearsUntilMaturity = req.body.Annuities_YearsUntilMaturity,
    UpdatePartnerRetirement.Annuities_RegularIncome = req.body.Annuities_RegularIncome,
    UpdatePartnerRetirement.Annuities_Frequency = req.body.Annuities_Frequency,
    UpdatePartnerRetirement.Annuities_AnnualInflation = req.body.Annuities_AnnualInflation

    try{
        const C = await UpdatePartnerRetirement.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Partner-AnnuitiesAccount/:Email/:_id', async(req, res) => {
    const DeletePartnerRetirement = await RetirementPartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeletePartnerRetirement.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;