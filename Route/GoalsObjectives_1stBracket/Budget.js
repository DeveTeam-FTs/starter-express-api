const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../Models/GoalsObjectives_1stBracket/Budget");
const BudgetSchema = require("../../Schema/GoalsObjectives_1stBracket/Budget");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Budget", async (req, res) => {
  const NewBudget = req.body;
  const { error } = BudgetSchema(NewBudget);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddBudget = new ClientDetails(NewBudget);
    AddBudget = await AddBudget.save();
    res.send(AddBudget);
  }
});

MyRouter.patch("/Update-Client-Budget/:Email", async (req, res) => {
  const UpdateBudget = await ClientDetails.findOne({ Email: req.params.Email });
  (UpdateBudget.Email = req.body.Email),
    (UpdateBudget.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateBudget.When = req.body.When),
    (UpdateBudget.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateBudget.Description = req.body.Description);

  try {
    const C = await UpdateBudget.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-Budget/:Email", async (req, res) => {
  const DeleteBudget = await ClientDetails.findOne({ Email: req.params.Email });
  try {
    const C = await DeleteBudget.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
