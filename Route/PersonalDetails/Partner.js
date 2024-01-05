const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../Models/PersonalDetails/Partner");
const PartnerSchema = require("../../Schema/PersonalDetails/Partner");

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err)
    }
});

MyRouter.post('/Add-Partner', async(req, res) => {
    const NewPartner = (req.body);
    const { error } = PartnerSchema(NewPartner);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddPartner = new PartnerDetails(NewPartner);
        AddPartner = await AddPartner.save();
        res.send(AddPartner);
    }
});

MyRouter.patch("/Update-Partner/:ClientEmail", async(req, res) => {
    const UpdatePartner = await PartnerDetails.findOne({ ClientEmail: req.params.ClientEmail });
    UpdatePartner.Email = req.body.Email,
    (UpdateClient.partnerTitle = req.body.partnerTitle),
    (UpdateClient.partnerGivenName = req.body.partnerGivenName),
    (UpdateClient.partnerSurname = req.body.partnerSurname),
    (UpdateClient.partnerPreferredName = req.body.partnerPreferredName),
    (UpdateClient.partnerGender = req.body.partnerGender),
    (UpdateClient.partnerDOB = req.body.partnerDOB),
    (UpdateClient.partnerAge = req.body.partnerAge),
    (UpdateClient.partnerMaritalStatus = req.body.partnerMaritalStatus),
    (UpdateClient.partnerEmploymentStatus = req.body.partnerEmploymentStatus),
    (UpdateClient.partnerHealth = req.body.partnerHealth),
    (UpdateClient.partnerSmoker = req.body.partnerSmoker),
    (UpdateClient.partnerPlannedRetirementAge = req.body.partnerPlannedRetirementAge),
    (UpdateClient.partnerHomeAddress = req.body.partnerHomeAddress),
    (UpdateClient.partnerPostcode = req.body.partnerPostcode),
    (UpdateClient.partnerHomePhone = req.body.partnerHomePhone),
    (UpdateClient.partnerWorkPhone = req.body.partnerWorkPhone),
    (UpdateClient.partnerMobile = req.body.partnerMobile),
    (UpdateClient.partnerEmail = req.body.partnerEmail),
    (UpdateClient.partnerPostalAddress = req.body.partnerPostalAddress),
    (UpdateClient.partnerPostalPostCode = req.body.partnerPostalPostCode),

    (UpdateClient.partnersameAsAbove = req.body.partnersameAsAbove),

    (UpdateClient.partnerMiddleName = req.body.partnerMiddleName),
    (UpdateClient.partnerOccupationID = req.body.partnerOccupationID),
    (UpdateClient.partnerTaxResidentRadio = req.body.partnerTaxResidentRadio),
    (UpdateClient.partnerPrivateHealthCoverRadio = req.body.partnerPrivateHealthCoverRadio),
    (UpdateClient.partnerHELPSDebtRadio = req.body.partnerHELPSDebtRadio),
    (UpdateClient.partnerSameAsClient = req.body.partnerSameAsAbove)


    try{
        const C = await UpdatePartner.save();
        res.send(C);
    }
    catch(err){
        res.send("Error: " + err);
    }
});

MyRouter.delete("/Delete-Partner/:ClientEmail", async(req, res) => {
    const DeletePartner = PartnerDetails.findOne({ ClientEmail: req.params.ClientEmail });
    try{
        const C = await DeletePartner.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;