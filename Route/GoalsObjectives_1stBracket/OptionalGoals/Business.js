const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/Business");
const BusinessSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/Business");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Business", async (req, res) => {
  const NewBusiness = req.body;
  const { error } = BusinessSchema(NewBusiness);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddBusiness = new ClientDetails(NewBusiness);
    AddBusiness = await AddBusiness.save();
    res.send(AddBusiness);
  }
});

MyRouter.patch("/Update-Client-Business/:Email", async (req, res) => {
  const UpdateBusiness = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateBusiness.Email = req.body.Email),
    (UpdateBusiness.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateBusiness.When = req.body.When),
    (UpdateBusiness.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateBusiness.Description = req.body.Description);

  try {
    const C = await UpdateBusiness.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-Business/:Email", async (req, res) => {
  const DeleteBusiness = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteBusiness.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
