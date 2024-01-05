const Express = require("express");
const MyRouter = Express.Router();

const Client_PensionAccountsDetails = require("../../../Models/SMSF/Client/PensionAccount");
const Client_PensionAccountsSchema = require("../../../Schema/SMSF/Client/PensionAccount");

MyRouter.get("/", async (req, res) => {
  const C = await Client_PensionAccountsDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-PensionAccounts", async (req, res) => {
  const NewRiskProfile = req.body;
  const { error } = Client_PensionAccountsSchema(NewRiskProfile);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddRiskProfile = new Client_PensionAccountsDetails(NewRiskProfile);
    AddRiskProfile = await AddRiskProfile.save();
    res.send(AddRiskProfile);
  }
});

MyRouter.patch(
  "/Update-Client-PensionAccounts/:Email/:_id",
  async (req, res) => {
    const UpdateClient = await Client_PensionAccountsDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });

    (UpdateClient.Email = req.body.Email),
      (UpdateClient.MemberName = req.body.MemberName),
      (UpdateClient.PensionType = req.body.PensionType),
      (UpdateClient.CommencementDateDate = req.body.CommencementDateDate),
      (UpdateClient.CurrentBalance = req.body.CurrentBalance),
      (UpdateClient.TaxFree = req.body.TaxFree),
      (UpdateClient.Taxed = req.body.Taxed),
      (UpdateClient.OriginalPurchasePrice = req.body.OriginalPurchasePrice),
      (UpdateClient.Frequency = req.body.Frequency),
      (UpdateClient.RegularIncomeDrawn = req.body.RegularIncomeDrawn),
      (UpdateClient.MinimumRequired = req.body.MinimumRequired),
      (UpdateClient.RelevantNumber = req.body.RelevantNumber),
      (UpdateClient.LumpsumTaken = req.body.LumpsumTaken),
      (UpdateClient.DeductibleAmount = req.body.DeductibleAmount),
      (UpdateClient.PensionMaximum = req.body.PensionMaximum);


    try {
      const C = await UpdateClient.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Client-PensionAccounts/:Email/:_id",
  async (req, res) => {
    const DeleteClient = await Client_PensionAccountsDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });
    try {
      const C = await DeleteClient.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
