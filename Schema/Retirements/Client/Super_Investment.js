const Joi = require("joi");

const Super_BeneficiarySchema = (Investment) => {
    const schema = Joi.object({
        Email: Joi.string(),
        InvestmentOption: Joi.string(),
        CurrentValue: Joi.number()
    })
    return schema.validate(Investment)
};

module.exports = Super_BeneficiarySchema