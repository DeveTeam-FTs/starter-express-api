const Express = require("express");
const ClientDetails = require("../../../Models/ExpenseIncome/Client/Client");
const ClientSchema = require("../../../Schema/ExpenseIncome/Client/Client");
const MyRouter = Express.Router();

MyRouter.get('/', async(req, res) => {
    const C = await ClientDetails.find();
    try{
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

MyRouter.post('/Add-Client-ExpenseIncome', async(req, res) => {
    const NewExpenseIncome = (req.body);
    const { error } = ClientSchema(NewExpenseIncome);
    if(error){
        res.status(404).send({ message: error.details[0].message });
    }
    else{
        let AddExpenseIncome = new ClientDetails(NewExpenseIncome);
        AddExpenseIncome = await AddExpenseIncome.save();
        res.send(AddExpenseIncome);
    }
});

MyRouter.patch('/Update-Client-ExpenseIncome/:Email', async(req, res) => {
    const UpdateExpenseIncome = await ClientDetails.findOne({ Email: req.params.Email });
        
        UpdateExpenseIncome.Email = req.body.Email,
//******************************** Client Employement Details - Income Expense ********************************
        UpdateExpenseIncome.Client_PrimaryOccupation = req.body.Client_PrimaryOccupation,
        UpdateExpenseIncome.Client_EmploymentStatus = req.body.Client_EmploymentStatus,
        UpdateExpenseIncome.Client_CompanyName = req.body.Client_CompanyName,
        UpdateExpenseIncome.Client_CommencementDate = req.body.Client_CommencementDate,
        UpdateExpenseIncome.Client_HoursPerWeek = req.body.Client_HoursPerWeek,
        UpdateExpenseIncome.Client_Salary = req.body.Client_Salary,
        UpdateExpenseIncome.Client_Superannuation = req.body.Client_Superannuation,
        UpdateExpenseIncome.Client_Superannuation_Type = req.body.Client_Superannuation_Type,
        UpdateExpenseIncome.Client_FundChoice = req.body.Client_FundChoice,
        UpdateExpenseIncome.Client_Sacririfce = req.body.Client_Sacririfce,
        UpdateExpenseIncome.Client_SacririfceAbility = req.body.Client_SacririfceAbility,
        UpdateExpenseIncome.Client_TaxContribution = req.body.Client_TaxContribution,
        UpdateExpenseIncome.Client_TaxContributionAbility = req.body.Client_TaxContributionAbility,
        UpdateExpenseIncome.Client_SalaryPackage = req.body.Client_SalaryPackage,
        UpdateExpenseIncome.Client_FBT_Status = req.body.Client_FBT_Status,
        UpdateExpenseIncome.Client_FBT_Options = req.body.Client_FBT_Options,
        UpdateExpenseIncome.Client_FBT_CarCostBase = req.body.Client_FBT_CarCostBase,
        UpdateExpenseIncome.Client_FBT_Paid = req.body.Client_FBT_Paid,
        UpdateExpenseIncome.Client_FBT_CarRunningAmount = req.body.Client_FBT_CarRunningAmount,
        UpdateExpenseIncome.Client_FBT_CardMortage = req.body.Client_FBT_CardMortage,
        UpdateExpenseIncome.Client_SalaryPackage = req.body.Client_SalaryPackage,
        UpdateExpenseIncome.Client_IncomeVaries = req.body.Client_IncomeVaries,
        UpdateExpenseIncome.Client_SickLeaves_Number = req.body.Client_SickLeaves_Number,
        UpdateExpenseIncome.Client_SickLeaves_Type = req.body.Client_SickLeaves_Type,
        UpdateExpenseIncome.Client_AnnualLeaves_Number = req.body.Client_AnnualLeaves_Number,
        UpdateExpenseIncome.Client_AnnualLeaves_Type = req.body.Client_AnnualLeaves_Type,
        UpdateExpenseIncome.Client_LongServiceLeaves_Number = req.body.Client_LongServiceLeaves_Number,
        UpdateExpenseIncome.Client_LongServiceLeaves_Type = req.body.Client_LongServiceLeaves_Type
//******************************** End of Client Employement Details - Income Expense ********************************    



//******************************** Client Centre Link - Income Expense ********************************
        UpdateExpenseIncome.Client_Recieve_CentreLinkPayments = req.body.Client_Recieve_CentreLinkPayments
        UpdateExpenseIncome.Client_CentreLinkPayments = req.body.Client_CentreLinkPayments,
        UpdateExpenseIncome.Client_PaymentAmount = req.body.Client_PaymentAmount,
        UpdateExpenseIncome.Client_AnnualPaymentAmount = req.body.Client_AnnualPaymentAmount,
        UpdateExpenseIncome.Client_CareerAllowance = req.body.Client_CareerAllowance,
        UpdateExpenseIncome.Client_FamilyTax = req.body.Client_FamilyTax,
        UpdateExpenseIncome.Client_AssetGifted = req.body.Client_AssetGifted,
        UpdateExpenseIncome.Client_CurrentlyRenting = req.body.Client_CurrentlyRenting,
        UpdateExpenseIncome.Client_AssetNumbers = req.body.Client_AssetNumbers,
        UpdateExpenseIncome.Client_Years = req.body.Client_Years,
        UpdateExpenseIncome.Client_ActualDate = req.body.Client_ActualDate,
//******************************** End of Client Centre Link - Income Expense ********************************



//******************************** Client Other Taxable Income - Income Expense ********************************
        UpdateExpenseIncome.Client_TaxableIncome = req.body.Client_TaxableIncome,
        UpdateExpenseIncome.Client_TaxableAmount = req.body.Client_TaxableAmount,
        UpdateExpenseIncome.Client_AustralianResident = req.body.Client_AustralianResident,
        UpdateExpenseIncome.Client_HECS_Debt = req.body.Client_HECS_Debt,
        UpdateExpenseIncome.Client_PrivateHospital = req.body.Client_PrivateHospital,
        UpdateExpenseIncome.Client_ClaimingRebate = req.body.Client_ClaimingRebate,
        UpdateExpenseIncome.Client_PAYG_Application = req.body.Client_PAYG_Application,
        UpdateExpenseIncome.Client_Outstanding_TaxPayments = req.body.Client_Outstanding_TaxPayments,
        UpdateExpenseIncome.Client_TaxLosses = req.body.Client_TaxLosses,
//******************************** End of Client Other Taxable Income - Income Expense ********************************



//******************************** Expense - Income Expense ********************************
        UpdateExpenseIncome.GeneralLivingCost = req.body.GeneralLivingCost,
        UpdateExpenseIncome.IncomeAtRetirement = req.body.IncomeAtRetirement,

    //********************** Lumpsum Expense **********************
        UpdateExpenseIncome.LumpsumExpenses = req.body.LumpsumExpenses,
        UpdateExpenseIncome.Lumpsum_Description = req.body.Lumpsum_Description,
        UpdateExpenseIncome.Lumpsum_Year = req.body.Lumpsum_Year,
        UpdateExpenseIncome.Lumpsum_Amount = req.body.Lumpsum_Amount,
    //********************** End of Lumpsum Expense **********************

    //********************** Inheritance Expense **********************
        UpdateExpenseIncome.Inheritance = req.body.Inheritance,
        UpdateExpenseIncome.Inheritance_Description = req.body.Inheritance_Description,
        UpdateExpenseIncome.Inheritance_Year = req.body.Inheritance_Year,
        UpdateExpenseIncome.Inheritance_Amount = req.body.Inheritance_Amount
    //********************** End of Inheritance Expense **********************

//******************************** End of Expense - Income Expense ********************************
        try{
            const C = await UpdateExpenseIncome.save();
            res.send(C);
        }
        catch(Error){
            res.send("Error: " + Error);
        }
});

MyRouter.delete('/Delete-Client-ExpenseIncome/:Email', async(req, res) => {
    const DeleteExpenseIncome = await ClientDetails.findOne({ Email: req.params.Email });
    try{
        const C = await DeleteExpenseIncome.remove();
        res.send(C);
    }
    catch(Error){
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;