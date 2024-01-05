const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/Superannuation");
const SuperannuationSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/Superannuation");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Superannuation", async (req, res) => {
  const NewSuperannuation = req.body;
  const { error } = SuperannuationSchema(NewSuperannuation);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddSuperannuation = new ClientDetails(NewSuperannuation);
    AddSuperannuation = await AddSuperannuation.save();
    res.send(AddSuperannuation);
  }
});

MyRouter.patch("/Update-Client-Superannuation/:Email", async (req, res) => {
  const UpdateSuperannuation = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateSuperannuation.Email = req.body.Email),
    (UpdateSuperannuation.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateSuperannuation.When = req.body.When),
    (UpdateSuperannuation.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateSuperannuation.Description = req.body.Description);

  try {
    const C = await UpdateSuperannuation.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-Superannuation/:Email", async (req, res) => {
  const DeleteSuperannuation = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteSuperannuation.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
