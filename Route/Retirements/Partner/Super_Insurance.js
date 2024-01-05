const Express = require("express");
const MyRouter = Express.Router();

const Partner_InsuranceDetails = require("../../../Models/Retirements/Partner/Super_Insurance");
const InsuranceSchema = require("../../../Schema/Retirements/Partner/Super_Insurance");

MyRouter.get("/", async(req, res) => {
    const C = await Partner_InsuranceDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post("/Add-Partner-Super-Insurance", async(req, res) => {
    const NewInsurance = (req.body);
    const { error } = InsuranceSchema(NewInsurance);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddInsurance = new Partner_InsuranceDetails(NewInsurance);
        AddInsurance = await AddInsurance.save();
        res.send(AddInsurance);
    }
});

MyRouter.patch("/Update-Partner-Super-Insurance/:Email/:_id", async(req, res) => {
    const UpdateInsurance = await Partner_InsuranceDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    
    UpdateInsurance.Email = req.body.Email,
    UpdateInsurance.InsuranceAttached = req.body.InsuranceAttached,
    UpdateInsurance.Life_TPD_Insurance = req.body.Life_TPD_Insurance,
    UpdateInsurance.CoverType = req.body.CoverType,
    UpdateInsurance.LifeCover = req.body.LifeCover,
    UpdateInsurance.TPDCover = req.body.TPDCover,
    UpdateInsurance.CostPA = req.body.CostPA,
    UpdateInsurance.PremiumType = req.body.PremiumType,
    UpdateInsurance.LoadingExecutions = req.body.LoadingExecutions,
    UpdateInsurance.LoadingExecution_Details = req.body.LoadingExecution_Details,
    UpdateInsurance.IncomeProtection = req.body.IncomeProtection,
    UpdateInsurance.MonthlyBenefit = req.body.MonthlyBenefit,
    UpdateInsurance.WaitingPeriod = req.body.WaitingPeriod,
    UpdateInsurance.BenefitPeriod = req.body.BenefitPeriod,
    UpdateInsurance.Indemnity = req.body.Indemnity,
    UpdateInsurance.CostPA_2 = req.body.CostPA_2,
    UpdateInsurance.PremiumType_2 = req.body.PremiumType_2,
    UpdateInsurance.Includes_SuperContinuance = req.body.Includes_SuperContinuance,
    UpdateInsurance.BenefitIndexed = req.body.BenefitIndexed,
    UpdateInsurance.LoadingExecutions_2 = req.body.LoadingExecutions_2,
    UpdateInsurance.LoadingExecutions_2_Details = req.body.LoadingExecutions_2_Details

    try{
        const C = await UpdateInsurance.save();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.delete("/Delete-Partner-Super-Insurance/:Email/:_id", async(req, res) => {
    const DeleteInsurance = await Partner_InsuranceDetails.findOne({ Email: req.params.Email, _id: req.params._id });
    try{
        const C = await DeleteInsurance.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;