const Express = require("express");
const MyRouter = Express.Router();

const Client_InvestmentPropertiesDetails = require("../../../Models/SMSF/Client/InvestmentProperties");
const Client_InvestmentPropertiesSchema = require("../../../Schema/SMSF/Client/InvestmentProperties");

MyRouter.get("/", async(req, res) => {
    const C = await Client_InvestmentPropertiesDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post("/Add-Client-InvestmentProperties", async(req, res) => {
    const NewRiskProfile = (req.body);
    const { error } = Client_InvestmentPropertiesSchema(NewRiskProfile);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddRiskProfile = new Client_InvestmentPropertiesDetails(NewRiskProfile);
        AddRiskProfile = await AddRiskProfile.save();
        res.send(AddRiskProfile);
    }
});

MyRouter.patch("/Update-Client-InvestmentProperties/:Email", async(req, res) => {
    const UpdateClient = await Client_InvestmentPropertiesDetails.findOne({ Email: req.params.Email});

    UpdateClient.Email = req.body.Email,
    UpdateClient.CurrentValue = req.body.CurrentValue,
    UpdateClient.CostBase = req.body.CostBase,
    UpdateClient.PropertyAddress = req.body.PropertyAddress,
    UpdateClient.PostCode = req.body.PostCode,
    UpdateClient.RentalIncome = req.body.RentalIncome,
    UpdateClient.Frequency = req.body.Frequency,
    UpdateClient.TotalAnnualIncome = req.body.TotalAnnualIncome,
    UpdateClient.ExpensesPA = req.body.ExpensesPA,
    UpdateClient.CurrentBalance = req.body.CurrentBalance,
    UpdateClient.Lender = req.body.Lender,
    UpdateClient.RepaymentAmount = req.body.RepaymentAmount,
    UpdateClient.Frequency2 = req.body.Frequency2,
    UpdateClient.AnnualRepayments = req.body.AnnualRepayments,
    UpdateClient.InterestRatePA = req.body.InterestRatePA,
    UpdateClient.LoanTerm = req.body.LoanTerm,
    UpdateClient.LoanType = req.body.LoanType,
    UpdateClient.DebtAmountLoan = req.body.DebtAmountLoan,
    UpdateClient.YearsRemaining = req.body.YearsRemaining

    try{
        const C = await UpdateClient.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete-Client-InvestmentProperties/:Email", async(req, res) => {
    const DeleteClient = await Client_InvestmentPropertiesDetails.findOne({ Email: req.params.Email});
    try{
        const C = await DeleteClient.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;