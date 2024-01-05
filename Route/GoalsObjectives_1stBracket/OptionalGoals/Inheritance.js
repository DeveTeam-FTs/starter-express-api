const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/Inheritance");
const InheritanceSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/Inheritance");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Inheritance", async (req, res) => {
  const NewInheritance = req.body;
  const { error } = InheritanceSchema(NewInheritance);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddInheritance = new ClientDetails(NewInheritance);
    AddInheritance = await AddInheritance.save();
    res.send(AddInheritance);
  }
});

MyRouter.patch("/Update-Client-Inheritance/:Email", async (req, res) => {
  const UpdateInheritance = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateInheritance.Email = req.body.Email),
    (UpdateInheritance.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateInheritance.When = req.body.When),
    (UpdateInheritance.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateInheritance.Description = req.body.Description);

  try {
    const C = await UpdateInheritance.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-Inheritance/:Email", async (req, res) => {
  const DeleteInheritance = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteInheritance.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
