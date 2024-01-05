const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/Boat");
const BoatSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/Boat");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Boat", async (req, res) => {
  const NewBoat = req.body;
  const { error } = BoatSchema(NewBoat);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddBoat = new ClientDetails(NewBoat);
    AddBoat = await AddBoat.save();
    res.send(AddBoat);
  }
});

MyRouter.patch("/Update-Client-Boat/:Email", async (req, res) => {
  const UpdateBoat = await ClientDetails.findOne({ Email: req.params.Email });
  (UpdateBoat.Email = req.body.Email),
    (UpdateBoat.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateBoat.When = req.body.When),
    (UpdateBoat.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateBoat.Description = req.body.Description);

  try {
    const C = await UpdateBoat.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-Boat/:Email", async (req, res) => {
  const DeleteBoat = await ClientDetails.findOne({ Email: req.params.Email });
  try {
    const C = await DeleteBoat.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
