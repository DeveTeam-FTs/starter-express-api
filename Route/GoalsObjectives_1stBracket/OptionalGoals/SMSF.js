const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/SMSF");
const SMSFSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/SMSF");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-SMSF", async (req, res) => {
  const NewSMSF = req.body;
  const { error } = SMSFSchema(NewSMSF);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddSMSF = new ClientDetails(NewSMSF);
    AddSMSF = await AddSMSF.save();
    res.send(AddSMSF);
  }
});

MyRouter.patch("/Update-Client-SMSF/:Email", async (req, res) => {
  const UpdateSMSF = await ClientDetails.findOne({ Email: req.params.Email });
  (UpdateSMSF.Email = req.body.Email),
    (UpdateSMSF.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateSMSF.When = req.body.When),
    (UpdateSMSF.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateSMSF.Description = req.body.Description);

  try {
    const C = await UpdateSMSF.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-SMSF/:Email", async (req, res) => {
  const DeleteSMSF = await ClientDetails.findOne({ Email: req.params.Email });
  try {
    const C = await DeleteSMSF.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
