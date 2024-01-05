const Joi = require('joi');

const AustralianShareMarket = (AustralianShareMarket) => {
    const schema = Joi.object({
        Email: Joi.string().required(),
        InvestmentName: Joi.string(),
    NoOfShares: Joi.number(),
    CurrentSharePrice: Joi.number(),
    TotalShareValue: Joi.number(),
    CostBase: Joi.number(),
    PurchaseDate: Joi.string(),
    IncomePA: Joi.number(),
    IncomePAType: Joi.string(),
    TotalIncomePA: Joi.number(),
    ReinvestIncome: Joi.string(),
    FrankedAmount: Joi.number(),
    RegInvestmentsPA: Joi.number(),
    });
    return schema.validate(AustralianShareMarket);
};

module.exports = AustralianShareMarket;