const Express = require("express");
const MyRouter = Express.Router();

const Client_AccumulationDetails = require("../../../Models/SMSF/Client/Accumulation");
const AccumulationSchema = require("../../../Schema/SMSF/Client/Accumulation");

MyRouter.get("/", async(req, res) => {
    const C = await Client_AccumulationDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post("/Add-Client-Accumulation", async(req, res) => {
    const NewRiskProfile = (req.body);
    const { error } = AccumulationSchema(NewRiskProfile);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddRiskProfile = new Client_AccumulationDetails(NewRiskProfile);
        AddRiskProfile = await AddRiskProfile.save();
        res.send(AddRiskProfile);
    }
});

MyRouter.patch("/Update-Client-Accumulation/:Email", async(req, res) => {
    const UpdateClient = await Client_AccumulationDetails.findOne({ Email: req.params.Email});

    UpdateClient.Email = req.body.Email,
    UpdateClient.MemberName = req.body.MemberName,
    UpdateClient.EligibleDate = req.body.EligibleDate,
    UpdateClient.CurrentBalance = req.body.CurrentBalance,
    UpdateClient.TaxFree = req.body.TaxFree,
    UpdateClient.Taxed = req.body.Taxed,
    UpdateClient.NonPreservedRestriction = req.body.NonPreservedRestriction,
    UpdateClient.NonPreservedUnRestriction = req.body.NonPreservedUnRestriction,
    UpdateClient.PreservedAmount = req.body.PreservedAmount

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete-Client-Accumulation/:Email", async(req, res) => {
    const DeleteClient = await Client_AccumulationDetails.findOne({ Email: req.params.Email});
    try{
        const C = await DeleteClient.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;