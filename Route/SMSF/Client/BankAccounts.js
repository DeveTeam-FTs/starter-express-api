const Express = require("express");
const MyRouter = Express.Router();

const Client_BankAccountDetails = require("../../../Models/SMSF/Client/BankAccounts");
const Client_BankAccountsSchema = require("../../../Schema/SMSF/Client/BankAccounts");

MyRouter.get("/", async (req, res) => {
  const C = await Client_BankAccountDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-BankAccounts", async (req, res) => {
  const NewRiskProfile = req.body;
  const { error } = Client_BankAccountsSchema(NewRiskProfile);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddRiskProfile = new Client_BankAccountDetails(NewRiskProfile);
    AddRiskProfile = await AddRiskProfile.save();
    res.send(AddRiskProfile);
  }
});

MyRouter.patch("/Update-Client-BankAccounts/:Email/:_id", async (req, res) => {
  const UpdateClient = await Client_BankAccountDetails.findOne({Email: req.params.Email, _id: req.params._id});

  (UpdateClient.Email = req.body.Email),
    (UpdateClient.CurrentValue1 = req.body.CurrentValue1),
    (UpdateClient.FinancialInstitution1 = req.body.FinancialInstitution1),
    (UpdateClient.IncomeYield1 = req.body.IncomeYield1),
    (UpdateClient.AnnualIncome1 = req.body.AnnualIncome1)
    

  try {
    const C = await UpdateClient.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-BankAccounts/:Email/:_id", async (req, res) => {
  const DeleteClient = await Client_BankAccountDetails.findOne({
    Email: req.params.Email, _id: req.params._id
  });
  try {
    const C = await DeleteClient.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
