const Express = require("express");
const PartnerDetails = require("../../../Models/ExpenseIncome/Partner/Partner");
const PartnerSchema = require("../../../Schema/ExpenseIncome/Partner/Partner");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await PartnerDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Partner-ExpenseIncome', async(req, res) => {
    const NewExpenseIncome = (req.body);
    const { error } = PartnerSchema(NewExpenseIncome);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddExpenseIncome = new PartnerDetails(NewExpenseIncome);
        AddExpenseIncome = await AddExpenseIncome.save();
        res.send(AddExpenseIncome);
    }
});

MyRouter.patch('/Update-Partner-ExpenseIncome/:Email', async(req, res) => {
    const UpdateExpenseIncome = await PartnerDetails.findOne({ Email: req.params.Email });
        
        UpdateExpenseIncome.Email = req.body.Email,
//******************************** Partner Employement Details - Income Expense ********************************
        UpdateExpenseIncome.Partner_PrimaryOccupation = req.body.Partner_PrimaryOccupation,
        UpdateExpenseIncome.Partner_EmploymentStatus = req.body.Partner_EmploymentStatus,
        UpdateExpenseIncome.Partner_CompanyName = req.body.Partner_CompanyName,
        UpdateExpenseIncome.Partner_CommencementDate = req.body.Partner_CommencementDate,
        UpdateExpenseIncome.Partner_HoursPerWeek = req.body.Partner_HoursPerWeek,
        UpdateExpenseIncome.Partner_Salary = req.body.Partner_Salary,
        UpdateExpenseIncome.Partner_Superannuation = req.body.Partner_Superannuation,
        UpdateExpenseIncome.Partner_Superannuation_Type = req.body.Partner_Superannuation_Type,
        UpdateExpenseIncome.Partner_FundChoice = req.body.Partner_FundChoice,
        UpdateExpenseIncome.Partner_Sacririfce = req.body.Partner_Sacririfce,
        UpdateExpenseIncome.Partner_SacririfceAbility = req.body.Partner_SacririfceAbility,
        UpdateExpenseIncome.Partner_TaxContribution = req.body.Partner_TaxContribution,
        UpdateExpenseIncome.Partner_TaxContributionAbility = req.body.Partner_TaxContributionAbility,
        UpdateExpenseIncome.Partner_SalaryPackage = req.body.Partner_SalaryPackage,
        UpdateExpenseIncome.Partner_FBT_Status = req.body.Partner_FBT_Status,
        UpdateExpenseIncome.Partner_FBT_Options = req.body.Partner_FBT_Options,
        UpdateExpenseIncome.Partner_FBT_CarCostBase = req.body.Partner_FBT_CarCostBase,
        UpdateExpenseIncome.Partner_FBT_Paid = req.body.Partner_FBT_Paid,
        UpdateExpenseIncome.Partner_FBT_CarRunningAmount = req.body.Partner_FBT_CarRunningAmount,
        UpdateExpenseIncome.Partner_FBT_CardMortage = req.body.Partner_FBT_CardMortage,
        UpdateExpenseIncome.Partner_SalaryPackage = req.body.Partner_SalaryPackage,
        UpdateExpenseIncome.Partner_IncomeVaries = req.body.Partner_IncomeVaries,
        UpdateExpenseIncome.Partner_SickLeaves_Number = req.body.Partner_SickLeaves_Number,
        UpdateExpenseIncome.Partner_SickLeaves_Type = req.body.Partner_SickLeaves_Type,
        UpdateExpenseIncome.Partner_AnnualLeaves_Number = req.body.Partner_AnnualLeaves_Number,
        UpdateExpenseIncome.Partner_AnnualLeaves_Type = req.body.Partner_AnnualLeaves_Type,
        UpdateExpenseIncome.Partner_LongServiceLeaves_Number = req.body.Partner_LongServiceLeaves_Number,
        UpdateExpenseIncome.Partner_LongServiceLeaves_Type = req.body.Partner_LongServiceLeaves_Type
//******************************** End of Partner Employement Details - Income Expense ********************************    



//******************************** Partner Centre Link - Income Expense ********************************
        UpdateExpenseIncome.Partner_Recieve_CentreLinkPayments = req.body.Partner_Recieve_CentreLinkPayments
        UpdateExpenseIncome.Partner_CentreLinkPayments = req.body.Partner_CentreLinkPayments,
        UpdateExpenseIncome.Partner_PaymentAmount = req.body.Partner_PaymentAmount,
        UpdateExpenseIncome.Partner_AnnualPaymentAmount = req.body.Partner_AnnualPaymentAmount,
        UpdateExpenseIncome.Partner_CareerAllowance = req.body.Partner_CareerAllowance,
        UpdateExpenseIncome.Partner_FamilyTax = req.body.Partner_FamilyTax,
        UpdateExpenseIncome.Partner_AssetGifted = req.body.Partner_AssetGifted,
        UpdateExpenseIncome.Partner_AssetNumbers = req.body.Partner_AssetNumbers,
        UpdateExpenseIncome.Partner_Years = req.body.Partner_Years,
        UpdateExpenseIncome.Partner_ActualDate = req.body.Partner_ActualDate,
//******************************** End of Partner Centre Link - Income Expense ********************************



//******************************** Partner Other Taxable Income - Income Expense ********************************
        UpdateExpenseIncome.Partner_TaxableIncome = req.body.Partner_TaxableIncome,
        UpdateExpenseIncome.Partner_TaxableAmount = req.body.Partner_TaxableAmount,
        UpdateExpenseIncome.Partner_AustralianResident = req.body.Partner_AustralianResident,
        UpdateExpenseIncome.Partner_HECS_Debt = req.body.Partner_HECS_Debt,
        UpdateExpenseIncome.Partner_PrivateHospital = req.body.Partner_PrivateHospital,
        UpdateExpenseIncome.Partner_ClaimingRebate = req.body.Partner_ClaimingRebate,
        UpdateExpenseIncome.Partner_PAYG_Application = req.body.Partner_PAYG_Application,
        UpdateExpenseIncome.Partner_Outstanding_TaxPayments = req.body.Partner_Outstanding_TaxPayments,
        UpdateExpenseIncome.Partner_TaxLosses = req.body.Partner_TaxLosses
//******************************** End of Partner Other Taxable Income - Income Expense ********************************

        try{
            const C = await UpdateExpenseIncome.save();
            res.send(C);
        }
        catch(Error){
            res.send("Error: " + Error);
        }
});

MyRouter.delete('/Delete-Partner-ExpenseIncome/:Email', async(req, res) => {
    const DeleteExpenseIncome = await PartnerDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteExpenseIncome.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;