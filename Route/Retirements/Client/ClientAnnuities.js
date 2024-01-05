const Express = require("express");
const MyRouter = Express.Router();

const RetirementClientDetails = require("../../../Models/Retirements/Client/Client_Annuities");
const ClientSchema = require("../../../Schema/Retirements/Client/ClientAnnuities");

MyRouter.get("/", async (req, res) => {
  const C = await RetirementClientDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-AnnuitiesAccount", async (req, res) => {
  const NewClientRetirment = req.body;
  const { error } = ClientSchema(NewClientRetirment);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddClient = new RetirementClientDetails(NewClientRetirment);
    AddClient = await AddClient.save();
    res.send(AddClient);
  }
});

MyRouter.patch(
  "/Update-Client-AnnuitiesAccount/:Email/:_id",
  async (req, res) => {
    const UpdateClientRetirement = await RetirementClientDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });
    (UpdateClientRetirement.Email = req.body.Email),
      (UpdateClientRetirement.NO_ofAnnuities = req.body.NO_ofAnnuities),
      (UpdateClientRetirement.Annuities_ProductProvider =
        req.body.Annuities_ProductProvider),
      (UpdateClientRetirement.Annuities_InvestmentAmount =
        req.body.Annuities_InvestmentAmount),
      (UpdateClientRetirement.Annuities_CurrentValue =
        req.body.Annuities_CurrentValue),
      (UpdateClientRetirement.Annuities_AnnuityType =
        req.body.Annuities_AnnuityType),
      (UpdateClientRetirement.Annuities_RCV = req.body.Annuities_RCV),
      (UpdateClientRetirement.Annuities_Term = req.body.Annuities_Term),
      (UpdateClientRetirement.Annuities_YearsUntilMaturity =
        req.body.Annuities_YearsUntilMaturity),
      (UpdateClientRetirement.Annuities_RegularIncome =
        req.body.Annuities_RegularIncome),
      (UpdateClientRetirement.Annuities_Frequency =
        req.body.Annuities_Frequency),
      (UpdateClientRetirement.Annuities_AnnualInflation =
        req.body.Annuities_AnnualInflation);
    // ************************* End of Annuitites *************************

    try {
      const C = await UpdateClientRetirement.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Client-AnnuitiesAccount/:Email/:_id",
  async (req, res) => {
    const DeleteClientRetirement = await RetirementClientDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });
    try {
      const C = await DeleteClientRetirement.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
