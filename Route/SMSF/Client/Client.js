const Express = require("express");
const MyRouter = Express.Router();

const Client_SMSFDetails = require("../../../Models/SMSF/Client/Client");
const Client_SMSFSchema = require("../../../Schema/SMSF/Client/Client");

MyRouter.get("/", async (req, res) => {
  const C = await Client_SMSFDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-SMSF", async (req, res) => {
  const NewRiskProfile = req.body;
  const { error } = Client_SMSFSchema(NewRiskProfile);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddRiskProfile = new Client_SMSFDetails(NewRiskProfile);
    AddRiskProfile = await AddRiskProfile.save();
    res.send(AddRiskProfile);
  }
});

MyRouter.patch("/Update-Client-SMSF/:Email", async (req, res) => {
  const UpdateClient = await Client_SMSFDetails.findOne({
    Email: req.params.Email,
  });

  (UpdateClient.Email = req.body.Email),
    (UpdateClient.Accumulation = req.body.Accumulation),
    (UpdateClient.PensionAccount = req.body.PensionAccount),
    (UpdateClient.BankAccount = req.body.BankAccount),
    (UpdateClient.TermDepositAccount = req.body.TermDepositAccount),
    (UpdateClient.AustralianShareMarket = req.body.AustralianShareMarket),
    (UpdateClient.AustralianSharePortfolio = req.body.AustralianSharePortfolio),
    (UpdateClient.ManagedFunds = req.body.ManagedFunds),
    (UpdateClient.ManagedFundsPortfolio = req.body.ManagedFundsPortfolio),
    (UpdateClient.InvestmentProperties = req.body.InvestmentProperties);

  try {
    const C = await UpdateClient.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-SMSF/:Email", async (req, res) => {
  const DeleteClient = await Client_SMSFDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteClient.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
