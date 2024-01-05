const Joi = require("joi");

const RetirementSchema = (Retirement) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        Super_FundName: Joi.string(),
        Super_MemberNO: Joi.number(),
        Super_FundType: Joi.string(),
        Super_ContactNO: Joi.number(),
        Super_FaxNO: Joi.number(),
        Super_PostalAddress: Joi.string(),
        Super_ABN: Joi.number(),
        Super_SPIN: Joi.string(),
        Super_Website: Joi.string(),
        Super_Email: Joi.string(),
        Super_FundType_2: Joi.string(),
        Super_CommencementDate: Joi.string(),
        Super_EligibleServiceDate: Joi.string(),
        Super_TFN: Joi.string(),
        Super_CurrentBalance: Joi.number(),
        Super_TaxFree: Joi.number(),
        Super_Taxed: Joi.number(),
        Super_Restricted: Joi.number(),
        Super_Unrestricted: Joi.number(),
        Super_PreservedAmount: Joi.number()

// ************************* End of Super *************************

    });
    return schema.validate(Retirement);
};

module.exports = RetirementSchema;