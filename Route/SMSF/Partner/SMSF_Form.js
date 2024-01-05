const Express = require("express");
const MyRouter = Express.Router();

const Client_SMSFFormDetails = require("../../../Models/SMSF/Client/SMSF_Form");
const Client_SMSFFormSchema = require("../../../Schema/SMSF/Client/SMSF_Form");

MyRouter.get("/", async(req, res) => {
    const C = await Client_SMSFFormDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post("/Add-Client-SMSFForm", async(req, res) => {
    const NewRiskProfile = (req.body);
    const { error } = Client_SMSFFormSchema(NewRiskProfile);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddRiskProfile = new Client_SMSFFormDetails(NewRiskProfile);
        AddRiskProfile = await AddRiskProfile.save();
        res.send(AddRiskProfile);
    }
});

MyRouter.patch("/Update-Client-SMSFForm/:Email", async(req, res) => {
    const UpdateClient = await Client_SMSFFormDetails.findOne({ Email: req.params.Email});

    UpdateClient.Email = req.body.Email,
    UpdateClient.FundName = req.body.FundName,
    UpdateClient.FundType = req.body.FundType,
    UpdateClient.ABN = req.body.ABN,
    UpdateClient.TrusteeType = req.body.TrusteeType,
    UpdateClient.EstablishmentDate = req.body.EstablishmentDate,
    UpdateClient.AssetsSegregated = req.body.AssetsSegregated,
    UpdateClient.InvestmentBorrowing = req.body.InvestmentBorrowing,
    UpdateClient.AcquireInsurances = req.body.AcquireInsurances,
    UpdateClient.AccountantName = req.body.AccountantName,
    UpdateClient.AuditorName = req.body.AuditorName,
    UpdateClient.AccountingAuditing = req.body.AccountingAuditing,
    UpdateClient.ATOLevy = req.body.ATOLevy

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete-Client-SMSFForm/:Email", async(req, res) => {
    const DeleteClient = await Client_SMSFFormDetails.findOne({ Email: req.params.Email});
    try{
        const C = await DeleteClient.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;