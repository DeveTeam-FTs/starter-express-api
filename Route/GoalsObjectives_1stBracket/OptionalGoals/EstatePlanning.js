const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/EstatePlanning");
const EstatePlanningSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/EstatePlanning");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-EstatePlanning", async (req, res) => {
  const NewEstatePlanning = req.body;
  const { error } = EstatePlanningSchema(NewEstatePlanning);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddEstatePlanning = new ClientDetails(NewEstatePlanning);
    AddEstatePlanning = await AddEstatePlanning.save();
    res.send(AddEstatePlanning);
  }
});

MyRouter.patch("/Update-Client-EstatePlanning/:Email", async (req, res) => {
  const UpdateEstatePlanning = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateEstatePlanning.Email = req.body.Email),
    (UpdateEstatePlanning.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateEstatePlanning.When = req.body.When),
    (UpdateEstatePlanning.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateEstatePlanning.Description = req.body.Description);

  try {
    const C = await UpdateEstatePlanning.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-EstatePlanning/:Email", async (req, res) => {
  const DeleteEstatePlanning = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteEstatePlanning.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
