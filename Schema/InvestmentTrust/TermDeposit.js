const Joi = require('joi');

const TermDeposit = (TermDeposit) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        CurrentValue1: Joi.number(),
        FinancialInstitution1: Joi.string(),
        IncomeYield1: Joi.number(),
        AnnualIncome1: Joi.number(),
        CurrentValue2: Joi.number(),
        FinancialInstitution2: Joi.string(),
        IncomeYield2: Joi.number(),
        AnnualIncome2: Joi.number(),
        CurrentValue3: Joi.number(),
        FinancialInstitution3: Joi.string(),
        IncomeYield3: Joi.number(),
        AnnualIncome3: Joi.number()
    });
    return schema.validate(TermDeposit);
};

module.exports = TermDeposit;