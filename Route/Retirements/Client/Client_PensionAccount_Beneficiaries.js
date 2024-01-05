const  Express = require("express");
const MyRouter = Express.Router();

const PensionInvestmentDetails = require('../../../Models/Retirements/Client/Client_PensionAccount_Beneficiaries');
const PensionInvestmentSchema = require('../../../Schema/Retirements/Client/Client_PensionAccount_Beneficiaries');

MyRouter.get('/', async(req, res) => {
    const C = await PensionInvestmentDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-PensionAccount-Beneficiaries', async(req, res) => {
    const NewClientPensionInvestment = (req.body);
    const { error } = PensionInvestmentSchema(NewClientPensionInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPensionInvestment = new PensionInvestmentDetails(NewClientPensionInvestment);
        AddPensionInvestment = await AddPensionInvestment.save();
        res.send(AddPensionInvestment);
    }
});

MyRouter.patch('/Update-Client-PensionAccount-Beneficiaries/:Email/:_id', async(req, res) => {
    const UpdatePensionInvestment = await PensionInvestmentDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdatePensionInvestment.Email = req.body.Email,
    UpdatePensionInvestment.NominatedBeneficiary = req.body.NominatedBeneficiary,
    UpdatePensionInvestment.NominationType = req.body.NominationType,
    UpdatePensionInvestment.No_ofBeneficiaries = req.body.No_ofBeneficiaries,
    UpdatePensionInvestment.Beneficiary1 = req.body.Beneficiary1,
    UpdatePensionInvestment.BenefitShare1 = req.body.BenefitShare1,
    UpdatePensionInvestment.Relationship1 = req.body.Relationship1,
    UpdatePensionInvestment.Beneficiary2 = req.body.Beneficiary2,
    UpdatePensionInvestment.BenefitShare2 = req.body.BenefitShare2,
    UpdatePensionInvestment.Relationship2 = req.body.Relationship2,
    UpdatePensionInvestment.Beneficiary3 = req.body.Beneficiary3,
    UpdatePensionInvestment.BenefitShare3 = req.body.BenefitShare3,
    UpdatePensionInvestment.Relationship3 = req.body.Relationship3,
    UpdatePensionInvestment.Beneficiary4 = req.body.Beneficiary4,
    UpdatePensionInvestment.BenefitShare4 = req.body.BenefitShare4,
    UpdatePensionInvestment.Relationship4 = req.body.Relationship4,
    UpdatePensionInvestment.Beneficiary5 = req.body.Beneficiary5,
    UpdatePensionInvestment.BenefitShare5 = req.body.BenefitShare5,
    UpdatePensionInvestment.Relationship5 = req.body.Relationship5

    try{
        const C = await UpdatePensionInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Client-PensionAccount-Beneficiaries/:Email/:_id', async(req, res) => {
    const DeletePensionInvestment = await PensionInvestmentDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeletePensionInvestment.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;