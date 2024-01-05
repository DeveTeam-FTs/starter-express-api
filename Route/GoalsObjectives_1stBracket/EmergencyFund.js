const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../Models/GoalsObjectives_1stBracket/EmergencyFund");
const EmergencyFundSchema = require("../../Schema/GoalsObjectives_1stBracket/EmergencyFund");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-EmergencyFund", async (req, res) => {
  const NewEmergencyFund = req.body;
  const { error } = EmergencyFundSchema(NewEmergencyFund);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddEmergencyFund = new ClientDetails(NewEmergencyFund);
    AddEmergencyFund = await AddEmergencyFund.save();
    res.send(AddEmergencyFund);
  }
});

MyRouter.patch("/Update-Client-EmergencyFund/:Email", async (req, res) => {
  const UpdateEmergencyFund = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateEmergencyFund.Email = req.body.Email),
    (UpdateEmergencyFund.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateEmergencyFund.When = req.body.When),
    (UpdateEmergencyFund.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateEmergencyFund.Description = req.body.Description);

  try {
    const C = await UpdateEmergencyFund.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-EmergencyFund/:Email", async (req, res) => {
  const DeleteEmergencyFund = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteEmergencyFund.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
