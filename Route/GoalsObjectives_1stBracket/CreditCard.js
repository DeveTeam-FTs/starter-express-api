const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../Models/GoalsObjectives_1stBracket/CreditCard");
const CreditCardSchema = require("../../Schema/GoalsObjectives_1stBracket/CreditCard");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-CreditCard", async (req, res) => {
  const NewCreditCard = req.body;
  const { error } = CreditCardSchema(NewCreditCard);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddCreditCard = new ClientDetails(NewCreditCard);
    AddCreditCard = await AddCreditCard.save();
    res.send(AddCreditCard);
  }
});

MyRouter.patch("/Update-Client-CreditCard/:Email", async (req, res) => {
  const UpdateCreditCard = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateCreditCard.Email = req.body.Email),
    (UpdateCreditCard.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateCreditCard.When = req.body.When),
    (UpdateCreditCard.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateCreditCard.Description = req.body.Description);

  try {
    const C = await UpdateCreditCard.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-CreditCard/:Email", async (req, res) => {
  const DeleteCreditCard = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteCreditCard.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
