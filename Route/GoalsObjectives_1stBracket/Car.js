const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../Models/GoalsObjectives_1stBracket/Car");
const CarSchema = require("../../Schema/GoalsObjectives_1stBracket/Car");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Car", async (req, res) => {
  const NewCar = req.body;
  const { error } = CarSchema(NewCar);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddCar = new ClientDetails(NewCar);
    AddCar = await AddCar.save();
    res.send(AddCar);
  }
});

MyRouter.patch("/Update-Client-Car/:Email", async (req, res) => {
  const UpdateCar = await ClientDetails.findOne({ Email: req.params.Email });
  (UpdateCar.Email = req.body.Email),
    (UpdateCar.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateCar.When = req.body.When),
    (UpdateCar.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateCar.Description = req.body.Description);

  try {
    const C = await UpdateCar.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-Car/:Email", async (req, res) => {
  const DeleteCar = await ClientDetails.findOne({ Email: req.params.Email });
  try {
    const C = await DeleteCar.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
