const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/StartFamily");
const StartFamilySchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/StartFamily");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-StartFamily", async (req, res) => {
  const NewStartFamily = req.body;
  const { error } = StartFamilySchema(NewStartFamily);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddStartFamily = new ClientDetails(NewStartFamily);
    AddStartFamily = await AddStartFamily.save();
    res.send(AddStartFamily);
  }
});

MyRouter.patch("/Update-Client-StartFamily/:Email", async (req, res) => {
  const UpdateStartFamily = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateStartFamily.Email = req.body.Email),
    (UpdateStartFamily.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateStartFamily.When = req.body.When),
    (UpdateStartFamily.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateStartFamily.Description = req.body.Description);

  try {
    const C = await UpdateStartFamily.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-StartFamily/:Email", async (req, res) => {
  const DeleteStartFamily = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteStartFamily.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
