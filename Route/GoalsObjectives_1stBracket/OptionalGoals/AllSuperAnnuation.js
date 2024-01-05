const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/AllSuperAnnuation");
const AllSuperAnnuationSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/AllSuperAnnuation");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-AllSuperAnnuation", async (req, res) => {
  const NewAllSuperAnnuation = req.body;
  const { error } = AllSuperAnnuationSchema(NewAllSuperAnnuation);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddAllSuperAnnuation = new ClientDetails(NewAllSuperAnnuation);
    AddAllSuperAnnuation = await AddAllSuperAnnuation.save();
    res.send(AddAllSuperAnnuation);
  }
});

MyRouter.patch("/Update-Client-AllSuperAnnuation/:Email", async (req, res) => {
  const UpdateAllSuperAnnuation = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateAllSuperAnnuation.Email = req.body.Email),
    (UpdateAllSuperAnnuation.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateAllSuperAnnuation.When = req.body.When),
    (UpdateAllSuperAnnuation.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateAllSuperAnnuation.Description = req.body.Description);

  try {
    const C = await UpdateAllSuperAnnuation.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-AllSuperAnnuation/:Email", async (req, res) => {
  const DeleteAllSuperAnnuation = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteAllSuperAnnuation.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
