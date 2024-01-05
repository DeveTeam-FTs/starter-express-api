const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/ReviewInvestmentPortfolio");
const ReviewInvestmentPortfolioSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/ReviewInvestmentPortfolio");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-ReviewInvestmentPortfolio", async (req, res) => {
  const NewReviewInvestmentPortfolio = req.body;
  const { error } = ReviewInvestmentPortfolioSchema(
    NewReviewInvestmentPortfolio
  );
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddReviewInvestmentPortfolio = new ClientDetails(
      NewReviewInvestmentPortfolio
    );
    AddReviewInvestmentPortfolio = await AddReviewInvestmentPortfolio.save();
    res.send(AddReviewInvestmentPortfolio);
  }
});

MyRouter.patch(
  "/Update-Client-ReviewInvestmentPortfolio/:Email",
  async (req, res) => {
    const UpdateReviewInvestmentPortfolio = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    (UpdateReviewInvestmentPortfolio.Email = req.body.Email),
      (UpdateReviewInvestmentPortfolio.AreaOfAdvice = req.body.AreaOfAdvice),
      (UpdateReviewInvestmentPortfolio.When = req.body.When),
      (UpdateReviewInvestmentPortfolio.EstimatedAmount =
        req.body.EstimatedAmount),
      (UpdateReviewInvestmentPortfolio.Description = req.body.Description);

    try {
      const C = await UpdateReviewInvestmentPortfolio.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Client-ReviewInvestmentPortfolio/:Email",
  async (req, res) => {
    const DeleteReviewInvestmentPortfolio = await ClientDetails.findOne({
      Email: req.params.Email,
    });
    try {
      const C = await DeleteReviewInvestmentPortfolio.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
