const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/InvestmentPortfolio");
const InvestmentPortfolioSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/InvestmentPortfolio");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-InvestmentPortfolio", async (req, res) => {
  const NewInvestmentPortfolio = req.body;
  const { error } = InvestmentPortfolioSchema(NewInvestmentPortfolio);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddInvestmentPortfolio = new ClientDetails(NewInvestmentPortfolio);
    AddInvestmentPortfolio = await AddInvestmentPortfolio.save();
    res.send(AddInvestmentPortfolio);
  }
});

MyRouter.patch(
  "/Update-Client-InvestmentPortfolio/:Email",
  async (req, res) => {
    const UpdateInvestmentPortfolio = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    (UpdateInvestmentPortfolio.Email = req.body.Email),
      (UpdateInvestmentPortfolio.AreaOfAdvice = req.body.AreaOfAdvice),
      (UpdateInvestmentPortfolio.When = req.body.When),
      (UpdateInvestmentPortfolio.EstimatedAmount = req.body.EstimatedAmount),
      (UpdateInvestmentPortfolio.Description = req.body.Description);

    try {
      const C = await UpdateInvestmentPortfolio.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Client-InvestmentPortfolio/:Email",
  async (req, res) => {
    const DeleteInvestmentPortfolio = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    try {
      const C = await DeleteInvestmentPortfolio.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
