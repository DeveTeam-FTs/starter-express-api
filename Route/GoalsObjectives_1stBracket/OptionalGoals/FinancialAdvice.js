const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/FinancialAdvice");
const FinancialAdviceSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/FinancialAdvice");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-FinancialAdvice", async (req, res) => {
  const NewFinancialAdvice = req.body;
  const { error } = FinancialAdviceSchema(NewFinancialAdvice);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddFinancialAdvice = new ClientDetails(NewFinancialAdvice);
    AddFinancialAdvice = await AddFinancialAdvice.save();
    res.send(AddFinancialAdvice);
  }
});

MyRouter.patch("/Update-Client-FinancialAdvice/:Email", async (req, res) => {
  const UpdateFinancialAdvice = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateFinancialAdvice.Email = req.body.Email),
    (UpdateFinancialAdvice.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateFinancialAdvice.When = req.body.When),
    (UpdateFinancialAdvice.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateFinancialAdvice.Description = req.body.Description);

  try {
    const C = await UpdateFinancialAdvice.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-FinancialAdvice/:Email", async (req, res) => {
  const DeleteFinancialAdvice = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteFinancialAdvice.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
