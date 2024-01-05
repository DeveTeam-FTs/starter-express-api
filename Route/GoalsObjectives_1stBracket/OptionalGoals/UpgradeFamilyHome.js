const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/UpgradeFamilyHome");
const UpgradeFamilyHomeSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/UpgradeFamilyHome");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-UpgradeFamilyHome", async (req, res) => {
  const NewUpgradeFamilyHome = req.body;
  const { error } = UpgradeFamilyHomeSchema(NewUpgradeFamilyHome);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddUpgradeFamilyHome = new ClientDetails(NewUpgradeFamilyHome);
    AddUpgradeFamilyHome = await AddUpgradeFamilyHome.save();
    res.send(AddUpgradeFamilyHome);
  }
});

MyRouter.patch("/Update-Client-UpgradeFamilyHome/:Email", async (req, res) => {
  const UpdateUpgradeFamilyHome = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateUpgradeFamilyHome.Email = req.body.Email),
    (UpdateUpgradeFamilyHome.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateUpgradeFamilyHome.When = req.body.When),
    (UpdateUpgradeFamilyHome.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateUpgradeFamilyHome.Description = req.body.Description);

  try {
    const C = await UpdateUpgradeFamilyHome.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-UpgradeFamilyHome/:Email", async (req, res) => {
  const DeleteUpgradeFamilyHome = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteUpgradeFamilyHome.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
