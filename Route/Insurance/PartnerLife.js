const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../Models/Insurance/PartnerLife");
const PartnerSchema = require("../../Schema/Insurance/PartnerLife");

MyRouter.get("/", async (req, res) => {
  const C = await PartnerDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Partner-Insurance-Life", async (req, res) => {
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
  "/Update-Partner-Insurance-Life/:Email/:_id",
  async (req, res) => {
    const UpdatePartnerInsurance = await PartnerDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });
    (UpdatePartnerInsurance.Email = req.body.Email),
      (UpdatePartnerInsurance.Life_PolicyID = req.body.Life_PolicyID),
      // UpdatePartnerInsurance.Life_Health = req.body.Life_Health,
      (UpdatePartnerInsurance.Life = req.body.Life),
      (UpdatePartnerInsurance.LifeInput = req.body.LifeInput),
      (UpdatePartnerInsurance.TPD = req.body.TPD),
      (UpdatePartnerInsurance.TPDInput = req.body.TPDInput),
      (UpdatePartnerInsurance.Trauma = req.body.Trauma),
      (UpdatePartnerInsurance.TraumaInput = req.body.TraumaInput),
      (UpdatePartnerInsurance.Life_PolicyOwner = req.body.Life_PolicyOwner),
      (UpdatePartnerInsurance.Life_Insured = req.body.Life_Insured),
      (UpdatePartnerInsurance.Life_InsuranceCompany =
        req.body.Life_InsuranceCompany),
      (UpdatePartnerInsurance.Life_InsuranceProduct =
        req.body.Life_InsuranceProduct),
      (UpdatePartnerInsurance.Life_PolicyNumber = req.body.Life_PolicyNumber),
      (UpdatePartnerInsurance.Life_PolicyDateCommenced =
        req.body.Life_PolicyDateCommenced),
      (UpdatePartnerInsurance.Life_PolicyDateRenewal =
        req.body.Life_PolicyDateRenewal),
      (UpdatePartnerInsurance.Life_Smoker = req.body.Life_Smoker),
      (UpdatePartnerInsurance.Life_PremiumType = req.body.Life_PremiumType),
      (UpdatePartnerInsurance.Life_PremiumPA = req.body.Life_PremiumPA),
      (UpdatePartnerInsurance.Life_CPI_Indexed = req.body.Life_CPI_Indexed),
      (UpdatePartnerInsurance.Life_SuperannuationPolicy =
        req.body.Life_SuperannuationPolicy),
      (UpdatePartnerInsurance.Life_ContinuationPolicy =
        req.body.Life_ContinuationPolicy),
      (UpdatePartnerInsurance.Life_LoadingExecutions =
        req.body.Life_LoadingExecutions),
      (UpdatePartnerInsurance.Life_Details_LoadingExecutions =
        req.body.Life_Details_LoadingExecutions);
    // ****************************** End of Life/TPD/Trauma Policy Details ******************************

    try {
      const C = await UpdatePartnerInsurance.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Partner-Insurance-Life/:Email/:_id",
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
