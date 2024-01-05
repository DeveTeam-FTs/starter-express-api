const Joi = require('joi');

const BankAccounts = (Share) => {
    const Schema = Joi.object({
        // id: Joi.number(),
        //Email added by usama
    Email: Joi.string().required(), 
    BankCurrentValue: Joi.number(),
    BankFinancialInstitution: Joi.string(),
    BankIncomePA: Joi.number(), 
    BankIncomePAType: Joi.string(),
    BankIncomeinDollars: Joi.number(),
    BankRegularSavings: Joi.number(),
    BankReinvestedIncome: Joi.string()
    });
    return Schema.validate(Share);
};

module.exports = BankAccounts;