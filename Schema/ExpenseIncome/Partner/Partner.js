const Joi = require("joi");

const Partner_ExpenseIncomeSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),

//******************************** Partner Employement Details - Income Expense ********************************
        Partner_PrimaryOccupation: Joi.string(),
        Partner_EmploymentStatus: Joi.string(),
        Partner_CompanyName: Joi.string(),
        Partner_CommencementDate: Joi.string(),
        Partner_HoursPerWeek: Joi.number(),
        Partner_Salary: Joi.number(),
        Partner_Superannuation: Joi.number(),
        Partner_Superannuation_Type: Joi.string(),
        Partner_FundChoice: Joi.string(),
        Partner_Sacririfce: Joi.string(),
        Partner_SacririfceAbility: Joi.number(),
        Partner_TaxContribution: Joi.string(),
        Partner_TaxContributionAbility: Joi.number(),
        Partner_SalaryPackage: Joi.string(),
        Partner_FBT_Status: Joi.string(),
        Partner_FBT_Options: Joi.array(),
        Partner_FBT_CarCostBase: Joi.number(),
        Partner_FBT_Paid: Joi.string(),
        Partner_FBT_CarRunningAmount: Joi.number(),
        Partner_FBT_CardMortage: Joi.number(),
        Partner_IncomeVaries: Joi.string(),
        Partner_SickLeaves_Number: Joi.number(),
        Partner_SickLeaves_Type: Joi.string(),
        Partner_AnnualLeaves_Number: Joi.number(),
        Partner_AnnualLeaves_Type: Joi.string(),
        Partner_LongServiceLeaves_Number: Joi.number(),
        Partner_LongServiceLeaves_Type: Joi.string(),
//******************************** End of Partner Employement Details - Income Expense ********************************
 


//******************************** Partner Centre Link - Income Expense ********************************
        Partner_Recieve_CentreLinkPayments: Joi.string(),
        Partner_CentreLinkPayments: Joi.string(),
        Partner_PaymentAmount: Joi.number(),
        Partner_AnnualPaymentAmount: Joi.number(),
        Partner_CareerAllowance: Joi.string(),
        Partner_FamilyTax: Joi.string(),
//******************************** End of Partner Centre Link - Income Expense ********************************


    
//******************************** Partner Other Taxable Income - Income Expense ********************************
        Partner_TaxableIncome: Joi.string(),
        Partner_TaxableAmount: Joi.number(),
        Partner_AustralianResident: Joi.string(),
        Partner_HECS_Debt: Joi.string(),
        Partner_PrivateHospital: Joi.string(),
        Partner_ClaimingRebate: Joi.string(),
        Partner_PAYG_Application: Joi.string(),
        Partner_Outstanding_TaxPayments: Joi.number(),
        Partner_TaxLosses: Joi.number(),
//******************************** End of Partner Other Taxable Income - Income Expense ********************************
    });
    return schema.validate(ExpenseIncome);
};

module.exports = Partner_ExpenseIncomeSchema;