const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/Care");
const CareSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/Care");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Care", async (req, res) => {
  const NewCare = req.body;
  const { error } = CareSchema(NewCare);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddCare = new ClientDetails(NewCare);
    AddCare = await AddCare.save();
    res.send(AddCare);
  }
});

MyRouter.patch("/Update-Client-Care/:Email", async (req, res) => {
  const UpdateCare = await ClientDetails.findOne({ Email: req.params.Email });
  (UpdateCare.Email = req.body.Email),
    (UpdateCare.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateCare.When = req.body.When),
    (UpdateCare.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateCare.Description = req.body.Description);

  try {
    const C = await UpdateCare.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-Care/:Email", async (req, res) => {
  const DeleteCare = await ClientDetails.findOne({ Email: req.params.Email });
  try {
    const C = await DeleteCare.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
