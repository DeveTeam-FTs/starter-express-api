const Express = require("express");
const MyRouter = Express.Router();

const RetirementClientDetails = require("../../../Models/Retirements/Client/Client_LifetimePension");
const ClientSchema = require("../../../Schema/Retirements/Client/ClientLifetimePension");

MyRouter.get("/", async (req, res) => {
  const C = await RetirementClientDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-LifetimePension", async (req, res) => {
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
  "/Update-Client-LifetimePension/:Email/:_id",
  async (req, res) => {
    const UpdateClientRetirement = await RetirementClientDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });
    (UpdateClientRetirement.Email = req.body.Email),
      (UpdateClientRetirement.LifePension_FundName =
        req.body.LifePension_FundName),
      (UpdateClientRetirement.LifePension_RegularIncome =
        req.body.LifePension_RegularIncome),
      (UpdateClientRetirement.LifePension_Frequency =
        req.body.LifePension_Frequency),
      (UpdateClientRetirement.LifePension_DeductibleAmount =
        req.body.LifePension_DeductibleAmount),
      (UpdateClientRetirement.LifePension_TaxFree_Pension =
        req.body.LifePension_TaxFree_Pension),
      (UpdateClientRetirement.LifePension_TaxablePensionAmount =
        req.body.LifePension_TaxablePensionAmount);
    // ************************* End of Life Time Pension *************************

    try {
      const C = await UpdateClientRetirement.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Client-LifetimePension/:Email/:_id",
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
