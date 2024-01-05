const Joi = require("joi");

const RetirementSchema = (Retirement) => {
    const schema = Joi.object({
        Email: Joi.string().min(1).max(5000000000).required(),
        LifePension_FundName: Joi.string().min(1).max(5000000000),
        LifePension_RegularIncome: Joi.number().min(1).max(5000000000),
        LifePension_Frequency: Joi.string().min(1).max(5000000000),
        LifePension_DeductibleAmount: Joi.number().min(1).max(5000000000),
        LifePension_TaxFree_Pension: Joi.string().min(1).max(5000000000),
        LifePension_TaxablePensionAmount: Joi.number().min(1).max(5000000000)
// ************************* End of Life Time Pension *************************
    });
    return schema.validate(Retirement);
};

module.exports = RetirementSchema;