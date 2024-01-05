const Express = require("express");
const MyRouter = Express.Router();

const PartnerDetails = require("../../../Models/EstatePlanning/Partner/Partner");
const PartnerSchema = require("../../../Schema/EstatePlanning/Partner/Partner");

MyRouter.get("/", async (req, res) => {
  const C = await PartnerDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add", async (req, res) => {
  const NewPartnerEstate = req.body;
  const { error } = PartnerSchema(NewPartnerEstate);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddPartnerEstate = new PartnerDetails(NewPartnerEstate);
    AddPartnerEstate = await AddPartnerEstate.save();
    res.send(AddPartnerEstate);
  }
});

MyRouter.patch("/Update/:Email", async (req, res) => {
  const UpdatePartnerEstate = await PartnerDetails.findOne({
    Email: req.params.Email,
  });

  (UpdatePartnerEstate.Email = req.body.Email),
  UpdatePartnerEstate.partnerEPYear = req.body.partnerEPYear,
  UpdatePartnerEstate.partnerEPCurrentWill = req.body.partnerEPCurrentWill,
  UpdatePartnerEstate.partnerEPExecutor = req.body.partnerEPExecutor,
  UpdatePartnerEstate.partnerEPGuardianship = req.body.partnerEPGuardianship,
  UpdatePartnerEstate.partnerEPTrust = req.body.partnerEPTrust,
  UpdatePartnerEstate.partnerEPFuneralPlan = req.body.partnerEPFuneralPlan,
  UpdatePartnerEstate.partnerEPExpense = req.body.partnerEPExpense,
  UpdatePartnerEstate.partnerEPNeeds = req.body.partnerEPNeeds,
  UpdatePartnerEstate.partnerEPPOA = req.body.partnerEPPOA,
  UpdatePartnerEstate.partnerEPPOAType = req.body.partnerEPPOAType,
  UpdatePartnerEstate.partnerEPPOANumber = req.body.partnerEPPOANumber,
  UpdatePartnerEstate.partnerEPPOAName1 = req.body.partnerEPPOAName1,
  UpdatePartnerEstate.partnerEPPOAName2 = req.body.partnerEPPOAName2,
  UpdatePartnerEstate.partnerEPPOAName3 = req.body.partnerEPPOAName3,
  UpdatePartnerEstate.partnerEPPOAName4 = req.body.partnerEPPOAName4,
  UpdatePartnerEstate.partnerEPPOAName5 = req.body.partnerEPPOAName5

  try {
    const C = await UpdatePartnerEstate.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete/:Email", async (req, res) => {
  const DeletePartnerEstate = await PartnerDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeletePartnerEstate.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
