const Joi = require('joi');

const ManagedFunds = (Share) => {
    const Schema = Joi.object({
        // id: Joi.number(),
    Email: Joi.string().required(), 
    ManagedFundsPlatformName: Joi.string(),
    ManagedFundsInvestmentName: Joi.string(),
    ManagedFundsNumberOfShares: Joi.number(),
    ManagedFundsSharePrice: Joi.number(),
    ManagedFundsCurrentValue: Joi.number(),
    ManagedFundsOriginalInvestment: Joi.number(),
    ManagedFundsPurchaseDate: Joi.string(),
    ManagedFundsIncomePA: Joi.number(),
    ManagedFundsIncomePAType: Joi.string(),
    ManagedFundsTotalIncomePA: Joi.number(),
    ManagedFundsReinvestedIncome: Joi.string(),
    ManagedFundsRegInvestments: Joi.number()
    });
    return Schema.validate(Share);
};

module.exports = ManagedFunds;