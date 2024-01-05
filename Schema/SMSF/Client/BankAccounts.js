const Joi = require('joi');

const BankAccounts = (BankAccounts) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        CurrentValue1: Joi.number(),
        FinancialInstitution1: Joi.string(),
        IncomeYield1: Joi.number(),
        AnnualIncome1: Joi.number()
       
    });
    return schema.validate(BankAccounts);
};

module.exports = BankAccounts;