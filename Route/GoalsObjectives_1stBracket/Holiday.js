const Express = require("express");
const MyRouter = Express.Router();

const ClientDetails = require("../../Models/GoalsObjectives_1stBracket/Holiday");
const HolidaySchema = require("../../Schema/GoalsObjectives_1stBracket/Holiday");

MyRouter.get("/", async (req, res) => {
  const C = await ClientDetails.find().sort({ Email: 1 });
  try {
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.post("/Add-Client-Holiday", async (req, res) => {
  const NewHoliday = req.body;
  const { error } = HolidaySchema(NewHoliday);
  if (error) {
    res.status(404).send({ message: error.details[0].message });
  } else {
    let AddHoliday = new ClientDetails(NewHoliday);
    AddHoliday = await AddHoliday.save();
    res.send(AddHoliday);
  }
});

MyRouter.patch("/Update-Client-Holiday/:Email", async (req, res) => {
  const UpdateHoliday = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  (UpdateHoliday.Email = req.body.Email),
    (UpdateHoliday.AreaOfAdvice = req.body.AreaOfAdvice),
    (UpdateHoliday.When = req.body.When),
    (UpdateHoliday.EstimatedAmount = req.body.EstimatedAmount),
    (UpdateHoliday.Description = req.body.Description);

  try {
    const C = await UpdateHoliday.save();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.delete("/Delete-Client-Holiday/:Email", async (req, res) => {
  const DeleteHoliday = await ClientDetails.findOne({
    Email: req.params.Email,
  });
  try {
    const C = await DeleteHoliday.remove();
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

module.exports = MyRouter;
