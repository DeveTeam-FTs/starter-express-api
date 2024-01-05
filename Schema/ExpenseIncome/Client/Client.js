const Joi = require("joi");

const Client_ExpenseIncomeSchema = (ExpenseIncome) => {
    const schema = Joi.object({

        Email: Joi.string().required(),
                
//******************************** Client Employement Details - Income Expense ********************************  
        Client_PrimaryOccupation: Joi.string(),
        Client_EmploymentStatus: Joi.string(),
        Client_CompanyName: Joi.string(),
        Client_CommencementDate: Joi.string(),
        Client_HoursPerWeek: Joi.number(),
        Client_Salary: Joi.number(),
        Client_Superannuation: Joi.number(),
        Client_Superannuation_Type: Joi.string(),
        Client_FundChoice: Joi.string(),
        Client_Sacririfce: Joi.string(),
        Client_SacririfceAbility: Joi.number(),
        Client_TaxContribution: Joi.string(),
        Client_TaxContributionAbility: Joi.number(),
        Client_SalaryPackage: Joi.string(),
        Client_FBT_Status: Joi.string(),
        Client_FBT_Options: Joi.array(),
        Client_FBT_CarCostBase:Joi.number(),
        Client_FBT_Paid: Joi.string(),
        Client_FBT_CarRunningAmount:Joi.number(),
        Client_FBT_CardMortage:Joi.number(),
        Client_IncomeVaries: Joi.string(),
        Client_SickLeaves_Number: Joi.number(),
        Client_SickLeaves_Type: Joi.string(),
        Client_AnnualLeaves_Number: Joi.number(),
        Client_AnnualLeaves_Type: Joi.string(),
        Client_LongServiceLeaves_Number: Joi.number(),
        Client_LongServiceLeaves_Type: Joi.string(),
//******************************** End of Client Employement Details - Income Expense ********************************    



//******************************** Client Centre Link - Income Expense ********************************
        Client_Recieve_CentreLinkPayments: Joi.string(),
        Client_CentreLinkPayments: Joi.string(),
        Client_PaymentAmount: Joi.number(),
        Client_AnnualPaymentAmount: Joi.number(),
        Client_CareerAllowance: Joi.string(),
        Client_FamilyTax: Joi.string(),
        Client_CurrentlyRenting: Joi.string(),
        Client_AssetGifted: Joi.string(),
        Client_AssetNumbers: Joi.number(),
        Client_Years: Joi.string(),
        Client_ActualDate: Joi.string(),
//******************************** End of Client Centre Link - Income Expense ********************************



//******************************** Client Other Taxable Income - Income Expense ********************************
        Client_TaxableIncome: Joi.string(),
        Client_TaxableAmount: Joi.number(),
        Client_AustralianResident: Joi.string(),
        Client_HECS_Debt: Joi.string(),
        Client_PrivateHospital: Joi.string(),
        Client_ClaimingRebate: Joi.string(),
        Client_PAYG_Application: Joi.string(),
        Client_Outstanding_TaxPayments: Joi.number(),
        Client_TaxLosses: Joi.number(),
//******************************** End of Client Other Taxable Income - Income Expense ********************************



//******************************** Expense - Income Expense ********************************
        GeneralLivingCost: Joi.number(),
        IncomeAtRetirement: Joi.number(),

    //********************** End of Lumpsum Expense **********************
        LumpsumExpenses: Joi.string(),
        Lumpsum_Description: Joi.string(),
        Lumpsum_Year: Joi.string(),
        Lumpsum_Amount: Joi.number(),
    //********************** End of Lumpsum Expense **********************

    //********************** Inheritance Expense **********************
        Inheritance: Joi.string(),
        Inheritance_Description: Joi.string(),
        Inheritance_Year: Joi.string(),
        Inheritance_Amount: Joi.number()
    //********************** End of Inheritance Expense **********************

//******************************** Expense - Income Expense ********************************
    });
    return schema.validate(ExpenseIncome);
};

module.exports = Client_ExpenseIncomeSchema;