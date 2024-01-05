const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/PayLessTax");
const PayLessTaxSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/PayLessTax");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-PayLessTax", async (req, res) => {
  const NewPayLessTax = req.body;
  const { error } = PayLessTaxSchema(NewPayLessTax);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddPayLessTax = new ClientDetails(NewPayLessTax);
    AddPayLessTax = await AddPayLessTax.save();
    res.send(AddPayLessTax);
  }
});

MyRouter.patch("/Update-Client-PayLessTax/:Email", async (req, res) => {
  const UpdatePayLessTax = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdatePayLessTax.Email = req.body.Email),
    (UpdatePayLessTax.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdatePayLessTax.When = req.body.When),
    (UpdatePayLessTax.EstimatedAmount = req.body.EstimatedAmount),
    (UpdatePayLessTax.Description = req.body.Description);

  try {
    const C = await UpdatePayLessTax.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-PayLessTax/:Email", async (req, res) => {
  const DeletePayLessTax = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeletePayLessTax.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
