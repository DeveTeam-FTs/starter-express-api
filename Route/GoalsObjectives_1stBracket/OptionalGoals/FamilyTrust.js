const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/FamilyTrust");
const FamilyTrustSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/FamilyTrust");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-FamilyTrust", async (req, res) => {
  const NewFamilyTrust = req.body;
  const { error } = FamilyTrustSchema(NewFamilyTrust);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddFamilyTrust = new ClientDetails(NewFamilyTrust);
    AddFamilyTrust = await AddFamilyTrust.save();
    res.send(AddFamilyTrust);
  }
});

MyRouter.patch("/Update-Client-FamilyTrust/:Email", async (req, res) => {
  const UpdateFamilyTrust = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateFamilyTrust.Email = req.body.Email),
    (UpdateFamilyTrust.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateFamilyTrust.When = req.body.When),
    (UpdateFamilyTrust.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateFamilyTrust.Description = req.body.Description);

  try {
    const C = await UpdateFamilyTrust.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-FamilyTrust/:Email", async (req, res) => {
  const DeleteFamilyTrust = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteFamilyTrust.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
