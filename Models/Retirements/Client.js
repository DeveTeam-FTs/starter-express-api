const Mongoose = require("mongoose");

const RetirementSchema = new Mongoose.Schema({
    id:{
        type: Number
    },
    Super:{
        type: String
    },
    AccountPension:{
        type: String
    },
    Annuities:{
        type: String
    },
    LifetimePension:{
        type: String
    },

// ************************* Super *************************
    NO_ofSuperAccounts:{
        type: Number
    },
    Super_FundName:{
        type: String
    },
    Super_MemberNO:{
        type: Number
    },
    Super_FundType:{
        type: String
    },
    Super_ContactNO:{
        type: Number
    },
    Super_FaxNO:{
        type: Number
    },
    Super_PostalAddress:{
        type: String
    },
    Super_ABN:{
        type: Number
    },
    Super_SPIN:{
        type: String
    },
    Super_Website:{
        type: String
    },
    Super_Email:{
        type: String
    },
    Super_FundType_2:{
        type: String
    },
    Super_CommencementDate:{
        type: String
    },
    Super_EligibleServiceDate:{
        type: String
    },
    Super_TFN:{
        type: String
    },
    Super_CurrentBalance:{
        type: Number
    },
    Super_TaxFree:{
        type: Number
    },
    Super_Taxed:{
        type: Number
    },
    Super_Restricted:{
        type: Number
    },
    Super_Unrestricted:{
        type: Number
    },
    Super_PreservedAmount:{
        type: Number
    },
// ************************* End of Super *************************



// ************************* Account Based Pension *************************
    NO_ofAccountsBasedPension:{
        type: Number
    },
    AccountPension_FundName:{
        type: String
    },
    AccountPension_MemberNO:{
        type: Number
    },
    AccountPension_FundType:{
        type: String
    },
    AccountPension_ContactNO:{
        type: Number
    },
    AccountPension_FaxNO:{
        type: Number
    },
    AccountPension_PostalAddress:{
        type: String
    },
    AccountPension_ABN:{
        type: Number
    },
    AccountPension_SPIN:{
        type: String
    },
    AccountPension_Website:{
        type: String
    },
    AccountPension_Email:{
        type: String
    },
    AccountPension_PensionType:{
        type: String
    },
    AccountPension_CurrentBalance:{
        type: Number
    },
    AccountPension_TaxFree:{
        type: Number
    },
    AccountPension_Taxed:{
        type: Number
    },
    AccountPension_EligibleService:{
        type: String
    },
    AccountPension_CommencementDate:{
        type: String
    },
    AccountPension_OriginalPrice:{
        type: Number
    },
    AccountPension_IncomeDrawn:{
        type: Number
    },
    AccountPension_Frequency:{
        type: String
    },
    AccountPension_MinimumRequired:{
        type: Number
    },
    AccountPension_RelevantNumber:{
        type: Number
    },
    AccountPension_LumpsumTaken:{
        type: Number
    },
    AccountPension_DeductibleAmount:{
        type: Number
    },
// ************************* End of Account Based Pension *************************



// ************************* Annuitites *************************
    NO_ofAnnuities:{
        type: Number
    },
    Annuities_ProductProvider:{
        type: String
    },
    Annuities_InvestmentAmount:{
        type: Number
    },
    Annuities_CurrentValue:{
        type: Number
    },
    Annuities_AnnuityType:{
        type: String
    },
    Annuities_RCV:{
        type: Number
    },
    Annuities_Term:{
        type: Number
    },
    Annuities_YearsUntilMaturity:{
        type: Number
    },
    Annuities_RegularIncome:{
        type: Number
    },
    Annuities_Frequency:{
        type: String
    },
    Annuities_AnnualInflation:{
        type: Number
    },
// ************************* End of Annuitites *************************



// ************************* Life Time Pension *************************
    NO_ofLifePension:{
        type: Number
    },
    LifePension_FundName:{
        type: String
    },
    LifePension_RegularIncome:{
        type: Number
    },
    LifePension_Frequency:{
        type: String
    },
    LifePension_DeductibleAmount:{
        type: Number
    },
    LifePension_TaxFree_Pension:{
        type: String
    },
    LifePension_TaxablePensionAmount:{
        type: Number
    }
// ************************* End of Life Time Pension *************************
});

module.exports = Mongoose.model("RetirementClientDetails", RetirementSchema);