const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/House");
const HouseSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/House");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-House", async (req, res) => {
  const NewHouse = req.body;
  const { error } = HouseSchema(NewHouse);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddHouse = new ClientDetails(NewHouse);
    AddHouse = await AddHouse.save();
    res.send(AddHouse);
  }
});

MyRouter.patch("/Update-Client-House/:Email", async (req, res) => {
  const UpdateHouse = await ClientDetails.findOne({ Email: req.params.Email });
  (UpdateHouse.Email = req.body.Email),
    (UpdateHouse.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateHouse.When = req.body.When),
    (UpdateHouse.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateHouse.Description = req.body.Description);

  try {
    const C = await UpdateHouse.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-House/:Email", async (req, res) => {
  const DeleteHouse = await ClientDetails.findOne({ Email: req.params.Email });
  try {
    const C = await DeleteHouse.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
