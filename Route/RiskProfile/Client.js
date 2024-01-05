const Express = require("express");
const MyRouter = Express.Router();

const Client_RiskDetails = require("../../Models/RiskProfile/Client");
const RiskSchema = require("../../Schema/RiskProfile/Client");

MyRouter.get("/", async (req, res) => {
  const C = await Client_RiskDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-RiskProfile", async (req, res) => {
  const NewRiskProfile = req.body;
  const { error } = RiskSchema(NewRiskProfile);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddRiskProfile = new Client_RiskDetails(NewRiskProfile);
    AddRiskProfile = await AddRiskProfile.save();
    res.send(AddRiskProfile);
  }
});

MyRouter.patch("/Update-Client-RiskProfile/:Email", async (req, res) => {
  const UpdateClient = await Client_RiskDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateClient.Email = req.body.Email),
    (UpdateClient.Question1 = req.body.Question1),
    (UpdateClient.Question2 = req.body.Question2),
    (UpdateClient.Question3 = req.body.Question3),
    (UpdateClient.Question4 = req.body.Question4),
    (UpdateClient.Question5 = req.body.Question5),
    (UpdateClient.Question6 = req.body.Question6),
    (UpdateClient.Question7 = req.body.Question7),
    (UpdateClient.Question8 = req.body.Question8);

  try {
    const C = await UpdateClient.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-RiskProfile/:Email", async (req, res) => {
  const DeleteClient = await Client_RiskDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteClient.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
