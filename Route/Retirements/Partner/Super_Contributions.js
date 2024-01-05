const Express = require("express");
const MyRouter = Express.Router();

const Partner_ContributionDetails = require("../../../Models/Retirements/Partner/Super_Contributions");
const ContributionSchema = require("../../../Schema/Retirements/Partner/Super_Contributions");

MyRouter.get("/", async(req, res) => {
    const C = await Partner_ContributionDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post("/Add-Partner-Super-Contribution", async(req, res) => {
    const NewContribution = (req.body);
    const { error } = ContributionSchema(NewContribution);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddContribution = new Partner_ContributionDetails(NewContribution);
        AddContribution = await AddContribution.save();
        res.send(AddContribution);
    }
});

MyRouter.patch("/Update-Partner-Super-Contribution/:Email/:_id", async(req, res) => {
    const UpdateClient = await Partner_ContributionDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdateClient.Email = req.body.Email,
    UpdateClient.ContributeFund = req.body.ContributeFund,
    UpdateClient.NonConcessional1 = req.body.NonConcessional1,
    UpdateClient.Other1 = req.body.Other1,
    UpdateClient.EmployerContributions1 = req.body.EmployerContributions1,
    UpdateClient.SalaryPersonalDed1 = req.body.SalaryPersonalDed1,
    UpdateClient.NonConcessional2 = req.body.NonConcessional2,
    UpdateClient.Other2 = req.body.Other2,
    UpdateClient.EmployerContributions2 = req.body.EmployerContributions2,
    UpdateClient.SalaryPersonalDed2 = req.body.SalaryPersonalDed2,
    UpdateClient.NonConcessional3 = req.body.NonConcessional3,
    UpdateClient.Other3 = req.body.Other3,
    UpdateClient.EmployerContributions3 = req.body.EmployerContributions3,
    UpdateClient.SalaryPersonalDed3 = req.body.SalaryPersonalDed3

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete-Partner-Super-Contribution/:Email/:_id", async(req, res) => {
    const DeleteClient = await Partner_ContributionDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteClient.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;