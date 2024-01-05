const Express = require("express");
const MyRouter = Express.Router();

const Client_BeneficiaryDetails = require("../../../Models/SMSF/Client/BeneficiaryDetails");
const BeneficiarySchema = require("../../../Schema/SMSF/Client/BeneficiaryDetails");

MyRouter.get("/", async(req, res) => {
    const C = await Client_BeneficiaryDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post("/Add-Client-Beneficiary", async(req, res) => {
    const NewBeneficiary = (req.body);
    const { error } = BeneficiarySchema(NewBeneficiary);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddBeneficiary = new Client_BeneficiaryDetails(NewBeneficiary);
        AddBeneficiary = await AddBeneficiary.save();
        res.send(AddBeneficiary);
    }
});

MyRouter.patch("/Update-Client-Beneficiary/:Email/:_id", async(req, res) => {
    const UpdateClient = await Client_BeneficiaryDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdateClient.Email = req.body.Email,
    UpdateClient.NominatedBeneficiary = req.body.NominatedBeneficiary,
    UpdateClient.NominationType = req.body.NominationType,
    UpdateClient.No_ofBeneficiaries = req.body.No_ofBeneficiaries,
    UpdateClient.Beneficiary1 = req.body.Beneficiary1,
    UpdateClient.BenefitShare1 = req.body.BenefitShare1,
    UpdateClient.Relationship1 = req.body.Relationship1,
    UpdateClient.Beneficiary2 = req.body.Beneficiary2,
    UpdateClient.BenefitShare2 = req.body.BenefitShare2,
    UpdateClient.Relationship2 = req.body.Relationship2,
    UpdateClient.Beneficiary3 = req.body.Beneficiary3,
    UpdateClient.BenefitShare3 = req.body.BenefitShare3,
    UpdateClient.Relationship3 = req.body.Relationship3,
    UpdateClient.Beneficiary4 = req.body.Beneficiary4,
    UpdateClient.BenefitShare4 = req.body.BenefitShare4,
    UpdateClient.Relationship4 = req.body.Relationship4,
    UpdateClient.Beneficiary5 = req.body.Beneficiary5,
    UpdateClient.BenefitShare5 = req.body.BenefitShare5,
    UpdateClient.Relationship5 = req.body.Relationship5

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete-Client-Beneficiary/:Email/:_id", async(req, res) => {
    const DeleteClient = await Client_BeneficiaryDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteClient.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;