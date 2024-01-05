const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../Models/PersonalDetails/Client");
const ClientSchema = require("../../Schema/PersonalDetails/Client");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find();
  try {
    res.send(C);
  } catch (err) {
    res.send("Error: " + err);
  }
});

MyRouter.post("/Add-Client", async (req, res) => {
  const NewClient = req.body;
  const { error } = ClientSchema(NewClient);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddClient = new ClientDetails(NewClient);
    AddClient = await AddClient.save();
    res.send(AddClient);
  }
});

MyRouter.patch("/Update-Client/:Email", async (req, res) => {
  const UpdateClient = await ClientDetails.findOne({ Email: req.params.Email });
  (UpdateClient.clientTitle = req.body.clientTitle),
    (UpdateClient.clientGivenName = req.body.clientGivenName),
    (UpdateClient.clientSurname = req.body.clientSurname),
    (UpdateClient.clientPreferredName = req.body.clientPreferredName),
    (UpdateClient.clientGender = req.body.clientGender),
    (UpdateClient.clientDOB = req.body.clientDOB),
    (UpdateClient.clientAge = req.body.clientAge),
    (UpdateClient.clientMaritalStatus = req.body.clientMaritalStatus),
    (UpdateClient.clientEmploymentStatus = req.body.clientEmploymentStatus),
    (UpdateClient.clientHealth = req.body.clientHealth),
    (UpdateClient.clientSmoker = req.body.clientSmoker),
    (UpdateClient.clientPlannedRetirementAge = req.body.clientPlannedRetirementAge),
    (UpdateClient.clientHomeAddress = req.body.clientHomeAddress),
    (UpdateClient.clientPostcode = req.body.clientPostcode),
    (UpdateClient.clientHomePhone = req.body.clientHomePhone),
    (UpdateClient.clientWorkPhone = req.body.clientWorkPhone),
    (UpdateClient.clientMobile = req.body.clientMobile),
    (UpdateClient.Email = req.body.Email),
    (UpdateClient.clientPostalAddress = req.body.clientPostalAddress),
    (UpdateClient.clientPostalPostCode = req.body.clientPostalPostCode),

    (UpdateClient.clientSameAsAbove = req.body.clientSameAsAbove),

    (UpdateClient.clientMiddleName = req.body.clientMiddleName),
    (UpdateClient.clientOccupationID = req.body.clientOccupationID),
    (UpdateClient.clientTaxResidentRadio = req.body.clientTaxResidentRadio),
    (UpdateClient.clientPrivateHealthCoverRadio = req.body.clientPrivateHealthCoverRadio),
    (UpdateClient.clientHELPSDebtRadio = req.body.clientHELPSDebtRadio)


  try {
    const C = await UpdateClient.save();
    res.send(C);
  } catch (err) {
    res.send("Error: " + err);
  }
});

MyRouter.delete("/Delete-Client/:Email", async (req, res) => {
  const DeleteClient = ClientDetails.findOne({ Email: req.params.Email });
  try {
    const C = await DeleteClient.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
