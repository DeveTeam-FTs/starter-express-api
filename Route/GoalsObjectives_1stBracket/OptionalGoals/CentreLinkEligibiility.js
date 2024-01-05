const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/CentreLinkEligibiility");
const CentreLinkEligibillitySchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/CentreLinkEligibiility");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-CentreLinkEligibiility", async (req, res) => {
  const NewCentreLinkEligibiility = req.body;
  const { error } = CentreLinkEligibillitySchema(NewCentreLinkEligibiility);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddCentreLinkEligibiility = new ClientDetails(
      NewCentreLinkEligibiility
    );
    AddCentreLinkEligibiility = await AddCentreLinkEligibiility.save();
    res.send(AddCentreLinkEligibiility);
  }
});

MyRouter.patch(
  "/Update-Client-CentreLinkEligibillity/:Email",
  async (req, res) => {
    const UpdateCentreLinkEligibillity = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    (UpdateCentreLinkEligibillity.Email = req.body.Email),
      (UpdateCentreLinkEligibillity.AreaOfAdvice = req.body.AreaOfAdvice),
      (UpdateCentreLinkEligibillity.When = req.body.When),
      (UpdateCentreLinkEligibillity.EstimatedAmount = req.body.EstimatedAmount),
      (UpdateCentreLinkEligibillity.Description = req.body.Description);

    try {
      const C = await UpdateCentreLinkEligibillity.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Client-CentreLinkEligibillity/:Email",
  async (req, res) => {
    const DeleteCentreLinkEligibillity = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    try {
      const C = await DeleteCentreLinkEligibillity.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
