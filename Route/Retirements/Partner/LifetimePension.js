const  Express = require("express");
const MyRouter = Express.Router();

const RetirementPartnerDetails = require('../../../Models/Retirements/Partner/LifetimePension');
const PartnerSchema = require('../../../Schema/Retirements/Partner/LifetimePension');

MyRouter.get('/', async(req, res) => {
    const C = await RetirementPartnerDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-Lifetime-PensionAccount', async(req, res) => {
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

MyRouter.patch('/Update-Partner-Lifetime-PensionAccount/:Email/:_id', async(req, res) => {
    const UpdatePartnerRetirement = await RetirementPartnerDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdatePartnerRetirement.Email = req.body.Email,
    UpdatePartnerRetirement.LifePension_FundName = req.body.LifePension_FundName,
    UpdatePartnerRetirement.LifePension_RegularIncome = req.body.LifePension_RegularIncome,
    UpdatePartnerRetirement.LifePension_Frequency = req.body.LifePension_Frequency,
    UpdatePartnerRetirement.LifePension_DeductibleAmount = req.body.LifePension_DeductibleAmount,
    UpdatePartnerRetirement.LifePension_TaxFree_Pension = req.body.LifePension_TaxFree_Pension,
    UpdatePartnerRetirement.LifePension_TaxablePensionAmount = req.body.LifePension_TaxablePensionAmount

    try{
        const C = await UpdatePartnerRetirement.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Partner-Lifetime-PensionAccount/:Email/:_id', async(req, res) => {
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