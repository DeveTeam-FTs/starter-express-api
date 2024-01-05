const Joi = require('joi');

const InvestmentBonds = (Share) => {
    const Schema = Joi.object({
        // id: Joi.number(),
        Email: Joi.string().required(), 
        InvestmentBondsPlatformName: Joi.string(),
        InvestmentBondsInvestmentName: Joi.string(),
        InvestmentBondsNumberOfShares: Joi.number(),
        InvestmentBondsSharePrice: Joi.number(),
        InvestmentBondsCurrentValue: Joi.number(),
        InvestmentBondsOriginalInvestment: Joi.number(),
        InvestmentBondsPurchaseDate: Joi.string(),
        InvestmentBondsIncomePA: Joi.number(),
        InvestmentBondsIncomePAType: Joi.string(),
        InvestmentBondsTotalIncomePA: Joi.number(),
        InvestmentBondsReinvestedIncome: Joi.string(),
        InvestmentBondsRegInvestments: Joi.number()
    });
    return Schema.validate(Share);
};

module.exports = InvestmentBonds;