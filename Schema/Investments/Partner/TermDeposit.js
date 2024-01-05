const Joi = require('joi');

const TermDeposit = (Share) => {
    const Schema = Joi.object({
        // id: Joi.number(),   
        Email: Joi.string().required(),   
        TermDepositCurrentValue: Joi.number(),
        TermDepositFinancialInstitution: Joi.string(),
        TermDepositIncomePA: Joi.number(),
        TermDepositIncomePAType: Joi.string(),
        TermDepositIncomeinDollars: Joi.number(),
        TermDepositRegularSavings: Joi.number(),
        TermDepositReinvestedIncome: Joi.string()
       
    });
    return Schema.validate(Share);
};

module.exports = TermDeposit;