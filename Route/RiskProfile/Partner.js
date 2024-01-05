const Express = require("express");
const MyRouter = Express.Router();

const Partner_RiskDetails = require("../../Models/RiskProfile/Partner");
const RiskSchema = require("../../Schema/RiskProfile/Partner");

MyRouter.get("/", async (req, res) => {
  const C = await Partner_RiskDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Partner-RiskProfile", async (req, res) => {
  const NewPartnerRiskProfile = req.body;
  const { error } = RiskSchema(NewPartnerRiskProfile);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddPartnerRiskProfile = new Partner_RiskDetails(NewPartnerRiskProfile);
    AddPartnerRiskProfile = await AddPartnerRiskProfile.save();
    res.send(AddPartnerRiskProfile);
  }
});

MyRouter.patch("/Update-Partner-RiskProfile/:Email", async (req, res) => {
  const UpdatePartner = await Partner_RiskDetails.findOne({
    Email: req.params.Email,
  });
  (UpdatePartner.Email = req.body.Email),
    (UpdatePartner.PartnerQuestion1 = req.body.PartnerQuestion1),
    (UpdatePartner.PartnerQuestion2 = req.body.PartnerQuestion2),
    (UpdatePartner.PartnerQuestion3 = req.body.PartnerQuestion3),
    (UpdatePartner.PartnerQuestion4 = req.body.PartnerQuestion4),
    (UpdatePartner.PartnerQuestion5 = req.body.PartnerQuestion5),
    (UpdatePartner.PartnerQuestion6 = req.body.PartnerQuestion6),
    (UpdatePartner.PartnerQuestion7 = req.body.PartnerQuestion7),
    (UpdatePartner.PartnerQuestion8 = req.body.PartnerQuestion8);

  try {
    const C = await UpdatePartner.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Partner-RiskProfile/:Email", async (req, res) => {
  const DeletePartner = await Partner_RiskDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeletePartner.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
