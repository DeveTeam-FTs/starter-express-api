const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/InvestmentProperty");
const InvestmentPropertySchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/InvestmentProperty");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-InvestmentProperty", async (req, res) => {
  const NewInvestmentProperty = req.body;
  const { error } = InvestmentPropertySchema(NewInvestmentProperty);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddInvestmentProperty = new ClientDetails(NewInvestmentProperty);
    AddInvestmentProperty = await AddInvestmentProperty.save();
    res.send(AddInvestmentProperty);
  }
});

MyRouter.patch("/Update-Client-InvestmentProperty/:Email", async (req, res) => {
  const UpdateInvestmentProperty = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateInvestmentProperty.Email = req.body.Email),
    (UpdateInvestmentProperty.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateInvestmentProperty.When = req.body.When),
    (UpdateInvestmentProperty.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateInvestmentProperty.Description = req.body.Description);

  try {
    const C = await UpdateInvestmentProperty.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete(
  "/Delete-Client-InvestmentProperty/:Email",
  async (req, res) => {
    const DeleteInvestmentProperty = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    try {
      const C = await DeleteInvestmentProperty.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
