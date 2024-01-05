const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/Wedding");
const WeddingSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/Wedding");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Wedding", async (req, res) => {
  const NewWedding = req.body;
  const { error } = WeddingSchema(NewWedding);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddWedding = new ClientDetails(NewWedding);
    AddWedding = await AddWedding.save();
    res.send(AddWedding);
  }
});

MyRouter.patch("/Update-Client-Wedding/:Email", async (req, res) => {
  const UpdateWedding = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateWedding.Email = req.body.Email),
    (UpdateWedding.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateWedding.When = req.body.When),
    (UpdateWedding.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateWedding.Description = req.body.Description);

  try {
    const C = await UpdateWedding.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-Wedding/:Email", async (req, res) => {
  const DeleteWedding = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteWedding.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
