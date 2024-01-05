const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/DownSizeFamilyHome");
const DownSizeFamilyHomeSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/DownSizeFamilyHome");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-DownSizeFamilyHome", async (req, res) => {
  const NewDownSizeFamilyHome = req.body;
  const { error } = DownSizeFamilyHomeSchema(NewDownSizeFamilyHome);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddDownSizeFamilyHome = new ClientDetails(NewDownSizeFamilyHome);
    AddDownSizeFamilyHome = await AddDownSizeFamilyHome.save();
    res.send(AddDownSizeFamilyHome);
  }
});

MyRouter.patch("/Update-Client-DownSizeFamilyHome/:Email", async (req, res) => {
  const UpdateDownSizeFamilyHome = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateDownSizeFamilyHome.Email = req.body.Email),
    (UpdateDownSizeFamilyHome.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateDownSizeFamilyHome.When = req.body.When),
    (UpdateDownSizeFamilyHome.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateDownSizeFamilyHome.Description = req.body.Description);

  try {
    const C = await UpdateDownSizeFamilyHome.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete(
  "/Delete-Client-DownSizeFamilyHome/:Email",
  async (req, res) => {
    const DeleteDownSizeFamilyHome = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    try {
      const C = await DeleteDownSizeFamilyHome.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
