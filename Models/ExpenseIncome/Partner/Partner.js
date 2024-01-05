const Mongoose = require("mongoose");

const Partner_ExpenseIncomeSchema = new Mongoose.Schema({
    id:{
        type: Number
    },
    Email:{
        type: String
    },
    //******************************** Partner Employement Details - Income Expense ********************************
    Partner_PrimaryOccupation:{
        type: String
    },
    Partner_EmploymentStatus:{
        type: String
    },
    Partner_CompanyName:{
        type: String
    },
    Partner_CommencementDate:{
        type: String
    },
    Partner_HoursPerWeek:{
        type: Number
    },
    Partner_Salary:{
        type: Number
    },
    Partner_Superannuation:{
        type: Number
    },
    Partner_Superannuation_Type:{
        type: String
    },
    Partner_FundChoice:{
        type: String
    },
    Partner_Sacririfce:{
        type: String
    },
    Partner_SacririfceAbility:{
        type: Number
    },
    Partner_TaxContribution:{
        type: String
    },
    Partner_TaxContributionAbility:{
        type: Number
    },
    Partner_SalaryPackage:{
        type: String
    },
    Partner_FBT_Status:{
        type: String
    },
    Partner_FBT_Options:{
        type: Array
    },
    Partner_FBT_CarCostBase:{
        type: Number
    },
    Partner_FBT_Paid:{
        type: String
    },
    Partner_FBT_CarRunningAmount:{
        type: Number
    },
    Partner_FBT_CardMortage:{
        type: Number
    },
    Partner_IncomeVaries:{
        type: String
    },
    Partner_SickLeaves_Number:{
        type: Number
    },
    Partner_SickLeaves_Type:{
        type: String
    },
    Partner_AnnualLeaves_Number:{
        type: Number
    },
    Partner_AnnualLeaves_Type:{
        type: String
    },
    Partner_LongServiceLeaves_Number:{
        type: Number
    },
    Partner_LongServiceLeaves_Type:{
        type: String
    },
    //******************************** End of Partner Employement Details - Income Expense ********************************
 


    //******************************** Partner Centre Link - Income Expense ********************************
    Partner_Recieve_CentreLinkPayments:{
        type: String
    },
    Partner_CentreLinkPayments:{
        type: String
    },
    Partner_PaymentAmount:{
        type: Number
    },
    Partner_AnnualPaymentAmount:{
        type: Number
    },
    Partner_CareerAllowance:{
        type: String
    },
    Partner_FamilyTax:{
        type: String
    },
    //******************************** End of Partner Centre Link - Income Expense ********************************


    
    //******************************** Partner Other Taxable Income - Income Expense ********************************
    Partner_TaxableIncome:{
        type: String
    },
    Partner_TaxableAmount:{
        type: Number
    },
    Partner_AustralianResident:{
        type: String
    },
    Partner_HECS_Debt:{
        type: String
    },
    Partner_PrivateHospital:{
        type: String
    },
    Partner_ClaimingRebate:{
        type: String
    },
    Partner_PAYG_Application:{
        type: String
    },
    Partner_Outstanding_TaxPayments:{
        type: Number
    },
    Partner_TaxLosses:{
        type: Number
    },
    //******************************** End of Partner Other Taxable Income - Income Expense ********************************
});

module.exports = Mongoose.model("Partner_ExpenseIncomeSchemaDetails", Partner_ExpenseIncomeSchema);