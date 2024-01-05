const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/HomeLoan");
const HomeLoanSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/HomeLoan");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-HomeLoan", async (req, res) => {
  const NewHomeLoan = req.body;
  const { error } = HomeLoanSchema(NewHomeLoan);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddHomeLoan = new ClientDetails(NewHomeLoan);
    AddHomeLoan = await AddHomeLoan.save();
    res.send(AddHomeLoan);
  }
});

MyRouter.patch("/Update-Client-HomeLoan/:Email", async (req, res) => {
  const UpdateHomeLoan = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateHomeLoan.Email = req.body.Email),
    (UpdateHomeLoan.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateHomeLoan.When = req.body.When),
    (UpdateHomeLoan.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateHomeLoan.Description = req.body.Description);

  try {
    const C = await UpdateHomeLoan.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-HomeLoan/:Email", async (req, res) => {
  const DeleteHomeLoan = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteHomeLoan.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
