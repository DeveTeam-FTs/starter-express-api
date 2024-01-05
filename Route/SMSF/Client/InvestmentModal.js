const Express = require("express");
const MyRouter = Express.Router();

const Client_InvestmentPropertiesDetails = require("../../../Models/SMSF/Client/InvestmentModal");
const Client_InvestmentPropertiesSchema = require("../../../Schema/SMSF/Client/InvestmentModal");

MyRouter.get("/", async (req, res) => {
  const C = await Client_InvestmentPropertiesDetails.find().sort({ id: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-InvestmentModal", async (req, res) => {
  const NewRiskProfile = req.body;
  const { error } = Client_InvestmentPropertiesSchema(NewRiskProfile);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddRiskProfile = new Client_InvestmentPropertiesDetails(NewRiskProfile);
    AddRiskProfile = await AddRiskProfile.save();
    res.send(AddRiskProfile);
  }
});

MyRouter.patch("/Update-Client-InvestmentModal/:Email", async (req, res) => {
  const UpdateClient = await Client_InvestmentPropertiesDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateClient.Email = req.body.Email),
    (UpdateClient.TotalExpense = req.body.TotalExpense),
    (UpdateClient.CorporateFees = req.body.CorporateFees),
    (UpdateClient.CouncilRates = req.body.CouncilRates),
    (UpdateClient.LawnMoving = req.body.LawnMoving),
    (UpdateClient.Insurance = req.body.Insurance),
    (UpdateClient.LandTax = req.body.LandTax),
    (UpdateClient.Repairs = req.body.Repairs),
    (UpdateClient.WaterCharges = req.body.WaterCharges),
    (UpdateClient.Others = req.body.Others),
    (UpdateClient.Telephone = req.body.Telephone),
    (UpdateClient.ProfessionalFees = req.body.ProfessionalFees),
    (UpdateClient.AllOthers = req.body.AllOthers);

  try {
    const C = await UpdateClient.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-InvestmentModal/:Email", async (req, res) => {
  const DeleteClient = await Client_InvestmentPropertiesDetails.findOne({
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
