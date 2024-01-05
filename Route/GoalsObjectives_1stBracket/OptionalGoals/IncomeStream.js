const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/IncomeStream");
const IncomeStreamSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/IncomeStream");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-IncomeStream", async (req, res) => {
  const NewIncomeStream = req.body;
  const { error } = IncomeStreamSchema(NewIncomeStream);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddIncomeStream = new ClientDetails(NewIncomeStream);
    AddIncomeStream = await AddIncomeStream.save();
    res.send(AddIncomeStream);
  }
});

MyRouter.patch("/Update-Client-IncomeStream/:Email", async (req, res) => {
  const UpdateIncomeStream = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateIncomeStream.Email = req.body.Email),
    (UpdateIncomeStream.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateIncomeStream.When = req.body.When),
    (UpdateIncomeStream.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateIncomeStream.Description = req.body.Description);

  try {
    const C = await UpdateIncomeStream.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-IncomeStream/:Email", async (req, res) => {
  const DeleteIncomeStream = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteIncomeStream.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
