const Joi = require("joi");

const RetirementSchema = (Retirement) => {
    const schema = Joi.object({
        id: Joi.number().min(1).max(5000000000).required(),
        Super: Joi.string().min(1).max(5000000000).required(),
        AccountPension: Joi.string().min(1).max(5000000000).required(),
        Annuities: Joi.string().min(1).max(5000000000).required(),
        LifetimePension: Joi.string().min(1).max(5000000000).required(),
        

       // ************************* Super *************************
        NO_ofSuperAccounts: Joi.number().min(1).max(5000000000).required(),
        Super_FundName: Joi.string().min(1).max(5000000000).required(),
        Super_MemberNO: Joi.number().min(1).max(5000000000).required(),
        Super_FundType: Joi.string().min(1).max(5000000000).required(),
        Super_ContactNO: Joi.number().min(1).max(5000000000).required(),
        Super_FaxNO: Joi.number().min(1).max(5000000000).required(),
        Super_PostalAddress: Joi.string().min(1).max(5000000000).required(),
        Super_ABN: Joi.number().min(1).max(5000000000).required(),
        Super_SPIN: Joi.string().min(1).max(5000000000).required(),
        Super_Website: Joi.string().min(1).max(5000000000).required(),
        Super_Email: Joi.string().min(1).max(5000000000).required(),
        Super_FundType_2: Joi.string().min(1).max(5000000000).required(),
        Super_CommencementDate: Joi.string().min(1).max(5000000000).required(),
        Super_EligibleServiceDate: Joi.string().min(1).max(5000000000).required(),
        Super_TFN: Joi.string().min(1).max(5000000000).required(),
        Super_CurrentBalance: Joi.number().min(1).max(5000000000).required(),
        Super_TaxFree: Joi.number().min(1).max(5000000000).required(),
        Super_Taxed: Joi.number().min(1).max(5000000000).required(),
        Super_Restricted: Joi.number().min(1).max(5000000000).required(),
        Super_Unrestricted: Joi.number().min(1).max(5000000000).required(),
        Super_PreservedAmount: Joi.number().min(1).max(5000000000).required(),
// ************************* End of Super *************************



// ************************* Account Based Pension *************************
        NO_ofAccountsBasedPension: Joi.number().min(1).max(5000000000).required(),
        AccountPension_FundName: Joi.string().min(1).max(5000000000).required(),
        AccountPension_MemberNO: Joi.number().min(1).max(5000000000).required(),
        AccountPension_FundType: Joi.string().min(1).max(5000000000).required(),
        AccountPension_ContactNO: Joi.number().min(1).max(5000000000).required(),
        AccountPension_FaxNO: Joi.number().min(1).max(5000000000).required(),
        AccountPension_PostalAddress: Joi.string().min(1).max(5000000000).required(),
        AccountPension_ABN: Joi.number().min(1).max(5000000000).required(),
        AccountPension_SPIN: Joi.string().min(1).max(5000000000).required(),
        AccountPension_Website: Joi.string().min(1).max(5000000000).required(),
        AccountPension_Email: Joi.string().min(1).max(5000000000).required(),
        AccountPension_PensionType: Joi.string().min(1).max(5000000000).required(),
        AccountPension_CurrentBalance: Joi.number().min(1).max(5000000000).required(),
        AccountPension_TaxFree: Joi.number().min(1).max(5000000000).required(),
        AccountPension_Taxed: Joi.number().min(1).max(5000000000).required(),
        AccountPension_EligibleService: Joi.string().min(1).max(5000000000).required(),
        AccountPension_CommencementDate: Joi.string().min(1).max(5000000000).required(),
        AccountPension_OriginalPrice: Joi.number().min(1).max(5000000000).required(),
        AccountPension_IncomeDrawn: Joi.number().min(1).max(5000000000).required(),
        AccountPension_Frequency: Joi.string().min(1).max(5000000000).required(),
        AccountPension_MinimumRequired: Joi.number().min(1).max(5000000000).required(),
        AccountPension_RelevantNumber: Joi.number().min(1).max(5000000000).required(),
        AccountPension_LumpsumTaken: Joi.number().min(1).max(5000000000).required(),
        AccountPension_DeductibleAmount: Joi.number().min(1).max(5000000000).required(),
// ************************* End of Account Based Pension *************************



// ************************* Annuitites *************************
        NO_ofAnnuities: Joi.number().min(1).max(5000000000).required(),
        Annuities_ProductProvider: Joi.string().min(1).max(5000000000).required(),
        Annuities_InvestmentAmount: Joi.number().min(1).max(5000000000).required(),
        Annuities_CurrentValue: Joi.number().min(1).max(5000000000).required(),
        Annuities_AnnuityType: Joi.string().min(1).max(5000000000).required(),
        Annuities_RCV: Joi.number().min(1).max(5000000000).required(),
        Annuities_Term: Joi.number().min(1).max(5000000000).required(),
        Annuities_YearsUntilMaturity: Joi.number().min(1).max(5000000000).required(),
        Annuities_RegularIncome: Joi.number().min(1).max(5000000000).required(),
        Annuities_Frequency: Joi.string().min(1).max(5000000000).required(),
        Annuities_AnnualInflation: Joi.number().min(1).max(5000000000).required(),
// ************************* End of Annuitites *************************



// ************************* Life Time Pension *************************
        NO_ofLifePension: Joi.number().min(1).max(5000000000).required(),
        LifePension_FundName: Joi.string().min(1).max(5000000000).required(),
        LifePension_RegularIncome: Joi.number().min(1).max(5000000000).required(),
        LifePension_Frequency: Joi.string().min(1).max(5000000000).required(),
        LifePension_DeductibleAmount: Joi.number().min(1).max(5000000000).required(),
        LifePension_TaxFree_Pension: Joi.string().min(1).max(5000000000).required(),
        LifePension_TaxablePensionAmount: Joi.number().min(1).max(5000000000).required(),
// ************************* End of Life Time Pension *************************
    });
    return schema.validate(Retirement);
};

module.exports = RetirementSchema;