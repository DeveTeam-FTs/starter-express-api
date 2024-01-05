const Joi = require("joi");

const RetirementSchema = (Retirement) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        AccountPension_FundName: Joi.string(),
        AccountPension_MemberNO: Joi.number(),
        AccountPension_FundType: Joi.string(),
        AccountPension_ContactNO: Joi.number(),
        AccountPension_FaxNO: Joi.number(),
        AccountPension_PostalAddress: Joi.string(),
        AccountPension_ABN: Joi.number(),
        AccountPension_SPIN: Joi.string(),
        AccountPension_Website: Joi.string(),
        AccountPension_Email: Joi.string(),
        AccountPension_PensionType: Joi.string(),
        AccountPension_CurrentBalance: Joi.number(),
        AccountPension_TaxFree: Joi.number(),
        AccountPension_Taxed: Joi.number(),
        AccountPension_EligibleService: Joi.string(),
        AccountPension_CommencementDate: Joi.string(),
        AccountPension_OriginalPrice: Joi.number(),
        AccountPension_IncomeDrawn: Joi.number(),
        AccountPension_Frequency: Joi.string(),
        AccountPension_MinimumRequired: Joi.number(),
        AccountPension_RelevantNumber: Joi.number(),
        AccountPension_LumpsumTaken: Joi.number(),
        AccountPension_DeductibleAmount: Joi.number()
    });
    return schema.validate(Retirement);
};

module.exports = RetirementSchema;