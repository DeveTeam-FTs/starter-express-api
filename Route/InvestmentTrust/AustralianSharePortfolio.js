const Express = require("express");
const ClientDetails = require("../../Models/InvestmentTrust/AustralianSharePortfolio");
const ClientAssetSchema = require("../../Schema/InvestmentTrust/AustralianSharePortfolio");
const MyRouter = Express.Router();

MyRouter.get("/Australian-Market-Portfolio", async (req, res) => {
  const C = await ClientDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Australian-Market-Portfolio", async (req, res) => {
  const NewClientInvestment = req.body;
  const { error } = ClientAssetSchema(NewClientInvestment);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddClientInvestment = new ClientDetails(NewClientInvestment);
    AddClientInvestment = await AddClientInvestment.save();
    res.send(AddClientInvestment);
  }
});

MyRouter.patch(
  "/Update-Client-Australian-Market-Portfolio/:Email/:_id",
  async (req, res) => {
    const UpdateClientInvestment = await ClientDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });

    (UpdateClientInvestment.Email = req.body.Email),
      (UpdateClientInvestment.AustralianPortfolioLoanType =
        req.body.AustralianPortfolioLoanType),
      (UpdateClientInvestment.AustralianPortfolioCurrentBalance =
        req.body.AustralianPortfolioCurrentBalance),
      (UpdateClientInvestment.AustralianPortfolioLender =
        req.body.AustralianPortfolioLender),
      (UpdateClientInvestment.AustralianPortfolioRepaymentAmount =
        req.body.AustralianPortfolioRepaymentAmount),
      (UpdateClientInvestment.AustralianPortfolioFrequency =
        req.body.AustralianPortfolioFrequency),
      (UpdateClientInvestment.AustralianPortfolioAnnualRepayment =
        req.body.AustralianPortfolioAnnualRepayment),
      (UpdateClientInvestment.AustralianInterestRatePA =
        req.body.AustralianInterestRatePA),
      (UpdateClientInvestment.AustralianPortfolioLoanTerm =
        req.body.AustralianPortfolioLoanTerm),
      (UpdateClientInvestment.AustralianPortfolioLoanType2 =
        req.body.AustralianPortfolioLoanType2),
      (UpdateClientInvestment.AustralianPortfolioDeductibleLoanAmount =
        req.body.AustralianPortfolioDeductibleLoanAmount),
      (UpdateClientInvestment.AustralianPortfolioYearRemaining =
        req.body.AustralianPortfolioYearRemaining);

    try {
      const C = await UpdateClientInvestment.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Client-Australian-Market-Portfolio/:Email/:_id",
  async (req, res) => {
    const DeleteClientInvestment = await ClientDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });
    try {
      const C = await DeleteClientInvestment.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
