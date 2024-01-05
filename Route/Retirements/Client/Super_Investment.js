const  Express = require("express");
const MyRouter = Express.Router();

const SuperBeneficiaryDetails = require('../../../Models/Retirements/Client/Super_Investment');
const SuperBeneficiarySchema = require('../../../Schema/Retirements/Client/Super_Investment');

MyRouter.get('/', async(req, res) => {
    const C = await SuperBeneficiaryDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-Super-Investment', async(req, res) => {
    const NewSuperInvestment = (req.body);
    const { error } = SuperBeneficiarySchema(NewSuperInvestment);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let NewPensionInvestment = new SuperBeneficiaryDetails(NewSuperInvestment);
        NewPensionInvestment = await NewPensionInvestment.save();
        res.send(NewPensionInvestment);
    }
});

MyRouter.patch('/Update-Client-Super-Investment/:Email/:_id', async(req, res) => {
    const UpdateSuperInvestment = await SuperBeneficiaryDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdateSuperInvestment.Email = req.body.Email,
    UpdateSuperInvestment.InvestmentOption = req.body.InvestmentOption,
    UpdateSuperInvestment.CurrentValue = req.body.CurrentValue

    try{
        const C = await UpdateSuperInvestment.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete('/Delete-Client-Super-Investment/:Email/:_id', async(req, res) => {
    const SuperPensionInvestment = await SuperBeneficiaryDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await SuperPensionInvestment.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;