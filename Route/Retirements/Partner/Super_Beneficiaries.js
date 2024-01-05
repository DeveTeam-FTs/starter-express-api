const  Express = require("express");
const MyRouter = Express.Router();

const SuperBeneficiariesDetails = require('../../../Models/Retirements/Partner/Super_Beneficiaries');
const SuperBeneficiariesSchema = require('../../../Schema/Retirements/Partner/Super_Beneficiaries');

MyRouter.get('/', async(req, res) => {
    const C = await SuperBeneficiariesDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-Super-Beneficiaries', async(req, res) => {
    const NewClientSuperInvestment = (req.body);
    const { error } = SuperBeneficiariesSchema(NewClientSuperInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddSuperInvestment = new SuperBeneficiariesDetails(NewClientSuperInvestment);
        AddSuperInvestment = await AddSuperInvestment.save();
        res.send(AddSuperInvestment);
    }
});

MyRouter.patch('/Update-Partner-Super-Beneficiaries/:Email/:_id', async(req, res) => {
    const UpdateSuperInvestment = await SuperBeneficiariesDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdateSuperInvestment.Email = req.body.Email,
    UpdateSuperInvestment.NominatedBeneficiary = req.body.NominatedBeneficiary,
    UpdateSuperInvestment.NominationType = req.body.NominationType,
    UpdateSuperInvestment.No_ofBeneficiaries = req.body.No_ofBeneficiaries,
    UpdateSuperInvestment.Beneficiary1 = req.body.Beneficiary1,
    UpdateSuperInvestment.BenefitShare1 = req.body.BenefitShare1,
    UpdateSuperInvestment.Relationship1 = req.body.Relationship1,
    UpdateSuperInvestment.Beneficiary2 = req.body.Beneficiary2,
    UpdateSuperInvestment.BenefitShare2 = req.body.BenefitShare2,
    UpdateSuperInvestment.Relationship2 = req.body.Relationship2,
    UpdateSuperInvestment.Beneficiary3 = req.body.Beneficiary3,
    UpdateSuperInvestment.BenefitShare3 = req.body.BenefitShare3,
    UpdateSuperInvestment.Relationship3 = req.body.Relationship3,
    UpdateSuperInvestment.Beneficiary4 = req.body.Beneficiary4,
    UpdateSuperInvestment.BenefitShare4 = req.body.BenefitShare4,
    UpdateSuperInvestment.Relationship4 = req.body.Relationship4,
    UpdateSuperInvestment.Beneficiary5 = req.body.Beneficiary5,
    UpdateSuperInvestment.BenefitShare5 = req.body.BenefitShare5,
    UpdateSuperInvestment.Relationship5 = req.body.Relationship5

    try{
        const C = await UpdateSuperInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Partner-Super-Beneficiaries/:Email/:_id', async(req, res) => {
    const DeleteSuperInvestment = await SuperBeneficiariesDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteSuperInvestment.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;