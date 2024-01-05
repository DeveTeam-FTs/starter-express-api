const Joi = require("joi");

const RetirementSchema = (Retirement) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        LifePension_FundName: Joi.string(),
        LifePension_RegularIncome: Joi.number(),
        LifePension_Frequency: Joi.string(),
        LifePension_DeductibleAmount: Joi.number(),
        LifePension_TaxFree_Pension: Joi.string(),
        LifePension_TaxablePensionAmount: Joi.number()
    });
    return schema.validate(Retirement);
};

module.exports = RetirementSchema;