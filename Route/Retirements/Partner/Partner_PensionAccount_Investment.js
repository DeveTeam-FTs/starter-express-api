const Express = require("express");
const MyRouter = Express.Router();

const PensionBeneficiaryDetails = require("../../../Models/Retirements/Partner/Partner_PensionAccount_Investment");
const PensionBeneficiarySchema = require("../../../Schema/Retirements/Partner/Partner_PensionAccount_Investment");

MyRouter.get("/", async (req, res) => {
  const C = await PensionBeneficiaryDetails.find();
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Partner-PensionAccount-Investment", async (req, res) => {
  const NewClientPensionInvestment = req.body;
  const { error } = PensionBeneficiarySchema(NewClientPensionInvestment);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let NewPensionInvestment = new PensionBeneficiaryDetails(
      NewClientPensionInvestment
    );
    NewPensionInvestment = await NewPensionInvestment.save();
    res.send(NewPensionInvestment);
  }
});

MyRouter.patch(
  "/Update-Partner-PensionAccount-Investment/:Email/:_id",
  async (req, res) => {
    const UpdatePensionInvestment = await PensionBeneficiaryDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });

    (UpdatePensionInvestment.Email = req.body.Email),
      (UpdatePensionInvestment.InvestmentOption = req.body.InvestmentOption),
      (UpdatePensionInvestment.CurrentValue = req.body.CurrentValue);

    try {
      const C = await UpdatePensionInvestment.save();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

MyRouter.delete(
  "/Delete-Partner-PensionAccount-Investment/:Email/:_id",
  async (req, res) => {
    const DeletePensionInvestment = await PensionBeneficiaryDetails.findOne({
      Email: req.params.Email,
      _id: req.params._id,
    });
    try {
      const C = await DeletePensionInvestment.remove();
      res.send(C);
    } catch (Error) {
      res.send("Error: " + Error);
    }
  }
);

module.exports = MyRouter;
