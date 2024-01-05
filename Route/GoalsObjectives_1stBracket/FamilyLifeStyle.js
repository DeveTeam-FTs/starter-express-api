const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../Models/GoalsObjectives_1stBracket/FamilyLifeStyle");
const FamilyLifeStyleSchema = require("../../Schema/GoalsObjectives_1stBracket/FamilyLifeStyle");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-FamilyLifeStyle", async (req, res) => {
  const NewFamilyLifeStyle = req.body;
  const { error } = FamilyLifeStyleSchema(NewFamilyLifeStyle);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddFamilyLifeStyle = new ClientDetails(NewFamilyLifeStyle);
    AddFamilyLifeStyle = await AddFamilyLifeStyle.save();
    res.send(AddFamilyLifeStyle);
  }
});

MyRouter.patch("/Update-Client-FamilyLifeStyle/:Email", async (req, res) => {
  const UpdateFamilyLifeStyle = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateFamilyLifeStyle.Email = req.body.Email),
    (UpdateFamilyLifeStyle.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateFamilyLifeStyle.When = req.body.When),
    (UpdateFamilyLifeStyle.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateFamilyLifeStyle.Description = req.body.Description);

  try {
    const C = await UpdateFamilyLifeStyle.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-FamilyLifeStyle/:Email", async (req, res) => {
  const DeleteFamilyLifeStyle = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteFamilyLifeStyle.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
