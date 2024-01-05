const Express = require("express");
const MyRouter = Express.Router();

const Client_TermDepositDetails = require("../../../Models/SMSF/Client/TermDeposit");
const Client_TermDepositSchema = require("../../../Schema/SMSF/Client/TermDeposit");

MyRouter.get("/", async(req, res) => {
    const C = await Client_TermDepositDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post("/Add-Client-TermDeposit", async(req, res) => {
    const NewRiskProfile = (req.body);
    const { error } = Client_TermDepositSchema(NewRiskProfile);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddRiskProfile = new Client_TermDepositDetails(NewRiskProfile);
        AddRiskProfile = await AddRiskProfile.save();
        res.send(AddRiskProfile);
    }
});

MyRouter.patch("/Update-Client-TermDeposit/:Email", async(req, res) => {
    const UpdateClient = await Client_TermDepositDetails.findOne({ Email: req.params.Email});
    
    UpdateClient.Email = req.body.Email,
    UpdateClient.CurrentValue1 = req.body.CurrentValue1,
    UpdateClient.FinancialInstitution1 = req.body.FinancialInstitution1,
    UpdateClient.IncomeYield1 = req.body.IncomeYield1,
    UpdateClient.AnnualIncome1 = req.body.AnnualIncome1,
    UpdateClient.CurrentValue2 = req.body.CurrentValue2,
    UpdateClient.FinancialInstitution2 = req.body.FinancialInstitution2,
    UpdateClient.IncomeYield2 = req.body.IncomeYield2,
    UpdateClient.AnnualIncome2 = req.body.AnnualIncome2,
    UpdateClient.CurrentValue3 = req.body.CurrentValue3,
    UpdateClient.FinancialInstitution3 = req.body.FinancialInstitution3,
    UpdateClient.IncomeYield3 = req.body.IncomeYield3,
    UpdateClient.AnnualIncome3 = req.body.AnnualIncome3

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete-Client-TermDeposit/:Email", async(req, res) => {
    const DeleteClient = await Client_TermDepositDetails.findOne({ Email: req.params.Email});
    try{
        const C = await DeleteClient.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;