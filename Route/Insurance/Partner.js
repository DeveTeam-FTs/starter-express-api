const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require('../../Models/Insurance/Partner');
const PartnerSchema = require('../../Schema/Insurance/Partner');

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-Insurance', async(req, res) => {
    const NewPartnerInsurance = (req.body);
    const { error } = PartnerSchema(NewPartnerInsurance);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartnerInsurance = new PartnerDetails(NewPartnerInsurance);
        AddPartnerInsurance = await AddPartnerInsurance.save();
        res.send(AddPartnerInsurance);
    }
});

MyRouter.patch('/Update-Partner-Insurance/:Email', async(req, res) => {
    const UpdatePartnerInsurance = await PartnerDetails.findOne({ Email: req.params.Email });
    UpdatePartnerInsurance.Email = req.body.Email,
    UpdatePartnerInsurance.Weeks_without_PrimaryIncome = req.body.Weeks_without_PrimaryIncome,
    UpdatePartnerInsurance.InusranceRejected = req.body.InusranceRejected,
    UpdatePartnerInsurance.Details_InusranceRejected = req.body.Details_InusranceRejected,
    UpdatePartnerInsurance.ClaimedBenifit = req.body.ClaimedBenifit,
    UpdatePartnerInsurance.Details_ClaimedBenifit = req.body.Details_ClaimedBenifit,
    UpdatePartnerInsurance.Reason_Impediment_Disability = req.body.Reason_Impediment_Disability,
    UpdatePartnerInsurance.Details_Reason_Impediment_Disability = req.body.Details_Reason_Impediment_Disability,
    UpdatePartnerInsurance.PersonalInsuranceCover = req.body.PersonalInsuranceCover

    try{
        const C = await UpdatePartnerInsurance.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }

});

MyRouter.delete('/Delete-Partner-Insurance/:Email', async(req, res) => {
    const DeletePartnerInsurance = await PartnerDetails.findOne({ Email: req.params.Email });

    try{
        const C = await DeletePartnerInsurance.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }

});

module.exports = MyRouter;