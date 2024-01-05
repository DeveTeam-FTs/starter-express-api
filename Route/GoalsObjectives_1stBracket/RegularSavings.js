const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../Models/GoalsObjectives_1stBracket/RegularSavings");
const RegularSavingsSchema = require("../../Schema/GoalsObjectives_1stBracket/RegularSavings");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-RegularSavings", async (req, res) => {
  const NewRegularSavings = req.body;
  const { error } = RegularSavingsSchema(NewRegularSavings);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddRegularSavings = new ClientDetails(NewRegularSavings);
    AddRegularSavings = await AddRegularSavings.save();
    res.send(AddRegularSavings);
  }
});

MyRouter.patch("/Update-Client-RegularSavings/:Email", async (req, res) => {
  const UpdateRegularSavings = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateRegularSavings.Email = req.body.Email),
    (UpdateRegularSavings.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateRegularSavings.When = req.body.When),
    (UpdateRegularSavings.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateRegularSavings.Description = req.body.Description);

  try {
    const C = await UpdateRegularSavings.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-RegularSavings/:Email", async (req, res) => {
  const DeleteRegularSavings = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteRegularSavings.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
