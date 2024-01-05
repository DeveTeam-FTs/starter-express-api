const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/Retirement");
const RetirementSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/Retirement");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Retirement", async (req, res) => {
  const NewRetirement = req.body;
  const { error } = RetirementSchema(NewRetirement);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddRetirement = new ClientDetails(NewRetirement);
    AddRetirement = await AddRetirement.save();
    res.send(AddRetirement);
  }
});

MyRouter.patch("/Update-Client-Retirement/:Email", async (req, res) => {
  const UpdateRetirement = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateRetirement.Email = req.body.Email),
    (UpdateRetirement.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateRetirement.When = req.body.When),
    (UpdateRetirement.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateRetirement.Description = req.body.Description);

  try {
    const C = await UpdateRetirement.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-Retirement/:Email", async (req, res) => {
  const DeleteRetirement = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteRetirement.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
