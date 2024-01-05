const Joi = require('joi');

const AustralainMarketShare = (Share) => {
    const Schema = Joi.object({
        // id: Joi.number(),
        Email:Joi.string(),
    AustralianMarketInvestmentName: Joi.string(),
    AustralianMarketNumberOfShares: Joi.number(),
    AustralianMarketSharePrice: Joi.number(),
    AustralianMarketTotalShareValue: Joi.number(),
    AustralianMarketCostBase: Joi.number(),
    AustralianMarketPurchaseDate: Joi.string(),
    AustralianMarketIncomePA: Joi.number(),
    AustralianMarketIncomePAType: Joi.string(),
    AustralianMarketTotalIncomePA: Joi.number(),
    AustralianMarketFrankedAmount: Joi.number(),
    AustralianMarketReinvestedIncome: Joi.string(),
    AustralianMarketRegInvestments: Joi.number(),
    });
    return Schema.validate(Share);
};

module.exports = AustralainMarketShare;