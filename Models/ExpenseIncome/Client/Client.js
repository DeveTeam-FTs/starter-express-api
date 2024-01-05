const Mongoose = require("mongoose");

const Client_ExpenseIncomeSchema = new Mongoose.Schema({
  
        
    Email:{
        type: String
    },
//******************************** Client Employement Details - Income Expense ********************************
        Client_PrimaryOccupation:{
            type: String
        },
        Client_EmploymentStatus:{
            type: String
        },
        Client_CompanyName:{
            type: String
        },
        Client_CommencementDate:{
            type: String
        },
        Client_HoursPerWeek:{
            type: Number
        },
        Client_Salary:{
            type: Number
        },
        Client_Superannuation:{
            type: Number
        },
        Client_Superannuation_Type:{
            type: String
        },
        Client_FundChoice:{
            type: String
        },
        Client_Sacririfce:{
            type: String
        },
        Client_SacririfceAbility:{
            type: Number
        },
        Client_TaxContribution:{
            type: String
        },
        Client_TaxContributionAbility:{
            type: Number
        },
        Client_SalaryPackage:{
            type: String
        },
        Client_FBT_Status:{
            type: String
        },
        Client_FBT_Options:{
            type: Array
        },
        Client_FBT_CarCostBase:{
            type: Number
        },
        Client_FBT_Paid:{
            type: String
        },
        Client_FBT_CarRunningAmount:{
            type: Number
        },
        Client_FBT_CardMortage:{
            type: Number
        },
        Client_IncomeVaries:{
            type: String
        },
        Client_SickLeaves_Number:{
            type: Number
        },
        Client_SickLeaves_Type:{
            type: String
        },
        Client_AnnualLeaves_Number:{
            type: Number
        },
        Client_AnnualLeaves_Type:{
            type: String
        },
        Client_LongServiceLeaves_Number:{
            type: Number
        },
        Client_LongServiceLeaves_Type:{
            type: String
        },
//******************************** End of Client Employement Details - Income Expense ********************************    
        
        
        
//******************************** Client Centre Link - Income Expense ********************************
        Client_Recieve_CentreLinkPayments:{
            type: String
        },
        Client_CentreLinkPayments:{
            type: String
        },
        Client_PaymentAmount:{
            type: Number
        },
        Client_AnnualPaymentAmount:{
            type: Number
        },
        Client_CareerAllowance:{
            type: String
        },
        Client_FamilyTax:{
            type: String
        },
        Client_CurrentlyRenting:{
            type: String
        },
        Client_AssetGifted:{
            type: String
        },
        Client_AssetNumbers:{
            type: Number
        },
        Client_Years:{
            type: String
        },
        Client_ActualDate:{
            type: String
        },
//******************************** End of Client Centre Link - Income Expense ********************************
        
    
    
//******************************** Client Other Taxable Income - Income Expense ********************************
        Client_TaxableIncome:{
            type: String
        },
        Client_TaxableAmount:{
            type: Number
        },
        Client_AustralianResident:{
            type: String
        },
        Client_HECS_Debt:{
            type: String
        },
        Client_PrivateHospital:{
            type: String
        },
        Client_ClaimingRebate:{
            type: String
        },
        Client_PAYG_Application:{
            type: String
        },
        Client_Outstanding_TaxPayments:{
            type: Number
        },
        Client_TaxLosses:{
            type: Number
        },
//******************************** End of Client Other Taxable Income - Income Expense ********************************



//******************************** Expense - Income Expense ********************************
        GeneralLivingCost:{
            type: Number
        },    
        IncomeAtRetirement:{
            type: Number
        },

    //********************** Lumpsum Expense **********************
        LumpsumExpenses:{
            type: String
        },  
        Lumpsum_Description:{
            type: String
        },
        Lumpsum_Year:{
            type: String
        },
        Lumpsum_Amount:{
            type: Number
        },
    //********************** End of Lumpsum Expense **********************
        
    //********************** Inheritance Expense **********************
        Inheritance:{
            type: String
        },    
        Inheritance_Description:{
            type: String
        },
        Inheritance_Year:{
            type: String
        },
        Inheritance_Amount:{
            type: Number
        },
    //********************** End of Inheritance Expense **********************

//******************************** End of Expense - Income Expense ********************************
});

module.exports = Mongoose.model("Client_IncomeExpenseDetails", Client_ExpenseIncomeSchema);