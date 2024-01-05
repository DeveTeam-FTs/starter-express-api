const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../../Models/GoalsObjectives_1stBracket/OptionalGoals/ChildrenEducation");
const ChildrenEducationSchema = require("../../../Schema/GoalsObjectives_1stBracket/OptionalGoals/ChildrenEducation");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-ChildrenEducation", async (req, res) => {
  const NewChildrenEducation = req.body;
  const { error } = ChildrenEducationSchema(NewChildrenEducation);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddChildrenEducation = new ClientDetails(NewChildrenEducation);
    AddChildrenEducation = await AddChildrenEducation.save();
    res.send(AddChildrenEducation);
  }
});

MyRouter.patch("/Update-Client-ChildrenEducation/:Email", async (req, res) => {
  const UpdateChildrenEducation = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateChildrenEducation.Email = req.body.Email),
    (UpdateChildrenEducation.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateChildrenEducation.When = req.body.When),
    (UpdateChildrenEducation.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateChildrenEducation.Description = req.body.Description);

  try {
    const C = await UpdateChildrenEducation.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-ChildrenEducation/:Email", async (req, res) => {
  const DeleteChildrenEducation = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteChildrenEducation.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
