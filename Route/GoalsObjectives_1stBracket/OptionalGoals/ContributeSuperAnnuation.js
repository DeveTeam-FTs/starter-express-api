const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/ContributeSuperAnnuation");
const ContributeSuperAnnuationSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/ContributeSuperAnnuation");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-ContributeSuperAnnuation", async (req, res) => {
  const NewContributeSuperAnnuation = req.body;
  const { error } = ContributeSuperAnnuationSchema(NewContributeSuperAnnuation);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddContributeSuperAnnuation = new ClientDetails(
      NewContributeSuperAnnuation
    );
    AddContributeSuperAnnuation = await AddContributeSuperAnnuation.save();
    res.send(AddContributeSuperAnnuation);
  }
});

MyRouter.patch(
  "/Update-Client-ContributeSuperAnnuation/:Email",
  async (req, res) => {
    const UpdateContributeSuperAnnuation = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    (UpdateContributeSuperAnnuation.Email = req.body.Email),
      (UpdateContributeSuperAnnuation.AreaOfAdvice = req.body.AreaOfAdvice),
      (UpdateContributeSuperAnnuation.When = req.body.When),
      (UpdateContributeSuperAnnuation.EstimatedAmount =
        req.body.EstimatedAmount),
      (UpdateContributeSuperAnnuation.Description = req.body.Description);

    try {
      const C = await UpdateContributeSuperAnnuation.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Client-ContributeSuperAnnuation/:Email",
  async (req, res) => {
    const DeleteContributeSuperAnnuation = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    try {
      const C = await DeleteContributeSuperAnnuation.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
