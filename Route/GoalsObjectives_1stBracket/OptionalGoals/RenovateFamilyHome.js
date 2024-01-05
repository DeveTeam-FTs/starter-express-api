const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/RenovateFamilyHome");
const RenovateFamilyHomeSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/RenovateFamilyHome");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-RenovateFamilyHome", async (req, res) => {
  const NewRenovateFamilyHome = req.body;
  const { error } = RenovateFamilyHomeSchema(NewRenovateFamilyHome);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddRenovateFamilyHome = new ClientDetails(NewRenovateFamilyHome);
    AddRenovateFamilyHome = await AddRenovateFamilyHome.save();
    res.send(AddRenovateFamilyHome);
  }
});

MyRouter.patch("/Update-Client-RenovateFamilyHome/:Email", async (req, res) => {
  const UpdateRenovateFamilyHome = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateRenovateFamilyHome.Email = req.body.Email),
    (UpdateRenovateFamilyHome.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateRenovateFamilyHome.When = req.body.When),
    (UpdateRenovateFamilyHome.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateRenovateFamilyHome.Description = req.body.Description);

  try {
    const C = await UpdateRenovateFamilyHome.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete(
  "/Delete-Client-RenovateFamilyHome/:Email",
  async (req, res) => {
    const DeleteRenovateFamilyHome = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    try {
      const C = await DeleteRenovateFamilyHome.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
