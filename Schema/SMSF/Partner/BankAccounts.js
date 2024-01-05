const Joi = require('joi');

const BankAccounts = (BankAccounts) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        CurrentValue1: Joi.string(),
        FinancialInstitution1: Joi.string(),
        IncomeYield1: Joi.string(),
        AnnualIncome1: Joi.string(),
        CurrentValue2: Joi.string(),
        FinancialInstitution2: Joi.string(),
        IncomeYield2: Joi.string(),
        AnnualIncome2: Joi.string()
    });
    return schema.validate(BankAccounts);
};

module.exports = BankAccounts;