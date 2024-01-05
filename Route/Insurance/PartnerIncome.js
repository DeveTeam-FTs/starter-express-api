const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../Models/Insurance/PartnerIncome");
const PartnerSchema = require("../../Schema/Insurance/PartnerIncome");

MyRouter.get("/", async (req, res) => {
  const C = await PartnerDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Partner-Insurance-Income", async (req, res) => {
  const NewPartnerInsurance = req.body;
  const { error } = PartnerSchema(NewPartnerInsurance);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddPartnerInsurance = new PartnerDetails(NewPartnerInsurance);
    AddPartnerInsurance = await AddPartnerInsurance.save();
    res.send(AddPartnerInsurance);
  }
});

MyRouter.patch(
  "/Update-Partner-Insurance-Income/:Email/:_id",
  async (req, res) => {
    const UpdatePartnerInsurance = await PartnerDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });
    (UpdatePartnerInsurance.Email = req.body.Email),
      (UpdatePartnerInsurance.Income_PolicyID = req.body.Income_PolicyID),
      (UpdatePartnerInsurance.Income_PolicyOwner =
        req.body.Income_PolicyNumber),
      (UpdatePartnerInsurance.Income_LifeInsured = req.body.Income_LifeInsured);
    UpdatePartnerInsurance.Income_InsuranceCompany =
      req.body.Income_InsuranceCompany;
    (UpdatePartnerInsurance.Income_InsuranceProduct =
      req.body.Income_InsuranceProduct),
      (UpdatePartnerInsurance.Income_PolicyNumber =
        req.body.Income_PolicyNumber),
      (UpdatePartnerInsurance.Income_PolicyDateCommenced =
        req.body.Income_PolicyDateCommenced),
      (UpdatePartnerInsurance.Income_PolicyDateRenewal =
        req.body.Income_PolicyDateRenewal),
      (UpdatePartnerInsurance.Income_Smoker = req.body.Income_Smoker),
      (UpdatePartnerInsurance.Income_MonthlyBenefit =
        req.body.Income_MonthlyBenefit),
      (UpdatePartnerInsurance.Income_ContinuanceAmount =
        req.body.Income_ContinuanceAmount),
      (UpdatePartnerInsurance.Income_WaitingPeriod =
        req.body.Income_WaitingPeriod),
      (UpdatePartnerInsurance.Income_BenefitPeriod =
        req.body.Income_BenefitPeriod),
      (UpdatePartnerInsurance.Income_Agreed = req.body.Income_Agreed),
      (UpdatePartnerInsurance.Income_PremiumType = req.body.Income_PremiumType),
      (UpdatePartnerInsurance.Income_PremiumPA = req.body.Income_PremiumPA),
      (UpdatePartnerInsurance.Income_SuperannuationPolicy =
        req.body.Income_SuperannuationPolicy),
      (UpdatePartnerInsurance.Income_Accident = req.body.Income_Accident),
      (UpdatePartnerInsurance.Income_IncreasingClaim =
        req.body.Income_IncreasingClaim),
      (UpdatePartnerInsurance.Income_TPD = req.body.Income_TPD),
      (UpdatePartnerInsurance.Income_BenefitIndexed =
        req.body.Income_BenefitIndexed),
      (UpdatePartnerInsurance.Income_LoadingExecutions =
        req.body.Income_LoadingExecutions),
      (UpdatePartnerInsurance.Income_Details_LoadingExecutions =
        req.body.Income_Details_LoadingExecutions);

    try {
      const C = await UpdatePartnerInsurance.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Partner-Insurance-Income/:Email/:_id",
  async (req, res) => {
    const DeletePartnerInsurance = await PartnerDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });

    try {
      const C = await DeletePartnerInsurance.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
