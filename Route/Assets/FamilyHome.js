const Express = require("express");
const ClientDetails = require("../../Models/Assets/FamilyHome");
const ClientAssetsSchema = require("../../Schema/Assets/FamilyHome");
const MyRouter = Express.Router();

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-FamilyHome", async (req, res) => {
  const NewClientAssets = req.body;
  const { error } = ClientAssetsSchema(NewClientAssets);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddClientAssets = new ClientDetails(NewClientAssets);
    AddClientAssets = await AddClientAssets.save();
    res.send(AddClientAssets);
  }
});

MyRouter.patch("/Update-Client-FamilyHome/:Email", async (req, res) => {
  const UpdateClientAssets = await ClientDetails.findOne({
    Email: req.params.Email,
  });

  (UpdateClientAssets.Email = req.body.Email),
    // UpdateClientAssets.Email = req.body.Email,

    // ******************************** Family Home - Assets ********************************
    (UpdateClientAssets.HomeNO = req.body.HomeNO),
    (UpdateClientAssets.CurrentValue = req.body.CurrentValue),
    (UpdateClientAssets.ClientOwnership = req.body.ClientOwnership),
    (UpdateClientAssets.PartnerOwnership = req.body.PartnerOwnership),
    (UpdateClientAssets.CostBase = req.body.CostBase),
    (UpdateClientAssets.Address = req.body.Address),
    (UpdateClientAssets.Postcode = req.body.Postcode),
    (UpdateClientAssets.AmountAssessed = req.body.AmountAssessed),
    (UpdateClientAssets.PropertyLoan = req.body.PropertyLoan),
    (UpdateClientAssets.ClientBorrowingPercentage =
      req.body.ClientBorrowingPercentage),
    (UpdateClientAssets.PartnerBorrowingPercentage =
      req.body.PartnerBorrowingPercentage),
    (UpdateClientAssets.CurrentBalance = req.body.CurrentBalance),
    (UpdateClientAssets.RepaymentAmounts = req.body.RepaymentAmounts),
    (UpdateClientAssets.Frequency = req.body.Frequency),
    (UpdateClientAssets.AnnualRepayments = req.body.AnnualRepayments),
    (UpdateClientAssets.InterestRate = req.body.InterestRate),
    (UpdateClientAssets.LoanTerm = req.body.LoanTerm),
    (UpdateClientAssets.LoanType = req.body.LoanType),
    (UpdateClientAssets.YearsRemaining = req.body.YearsRemaining);
  // ******************************** End of Family Home - Assets ********************************

  try {
    const C = await UpdateClientAssets.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-FamilyHome/:Email", async (req, res) => {
  const DeleteClientAssets = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteClientAssets.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
