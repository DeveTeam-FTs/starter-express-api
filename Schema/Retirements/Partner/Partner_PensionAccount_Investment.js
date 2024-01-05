const Joi = require("joi");

const Pension_BeneficiarySchema = (Investment) => {
    const schema = Joi.object({
        Email: Joi.string(),
        InvestmentOption: Joi.string(),
        CurrentValue: Joi.number()
    })
    return schema.validate(Investment)
};

module.exports = Pension_BeneficiarySchema